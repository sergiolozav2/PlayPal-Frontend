import { AuthService } from "@/backend";
import { Button } from "@/components/ui/button";
import { ErrorLabel } from "@/components/ui/error-label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodExtra } from "@/lib/zodExtra";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa6";
import { z } from "zod";
import { LoadingWrapper } from "../core/components/LoadingSpinner";
import { zodResolver } from "@hookform/resolvers/zod";

const formData = z.object({
  email: zodExtra.string().email(),
  password: zodExtra.string(),
  nombre: zodExtra.string(),
  telefono: zodExtra.string(),
});
type FormDataType = z.infer<typeof formData>;

export function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(formData) });

  const [loading, setLoading] = useState(false);
  function goBack() {
    navigate({ to: "/start" });
  }

  function createCuenta(data: FormDataType) {
    setLoading(true);
    localStorage.setItem("correo", data.email);
    AuthService.postAuthRegister({
      ...data,
      nacimiento: "2001-05-05",
      reservas: "[]",
    })
      .then(() => {
        navigate({ to: "/register-complete" });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="flex min-h-screen flex-col bg-primary px-6 pb-5 pt-8 text-primary-foreground">
      <div className="flex items-center gap-2 font-semibold">
        <button className="-ml-1 p-1" onClick={goBack}>
          <FaChevronLeft />
        </button>
        <p>Crea cuenta</p>
      </div>
      <Separator className="mt-2" />
      <div className="flex w-full flex-col justify-center">
        <div className="mt-12 flex flex-col items-center font-semibold">
          <p>Crea tu nueva cuenta</p>
        </div>
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit(createCuenta)}
        >
          <div className="flex flex-col">
            <Input placeholder="Nombre completo" {...register("nombre")} />
            <ErrorLabel text={errors.nombre?.message} />
          </div>
          <div className="flex flex-col">
            <Input placeholder="Número de teléfono" {...register("telefono")} />
            <ErrorLabel text={errors.telefono?.message} />
          </div>
          <div className="flex flex-col">
            <Input
              placeholder="Email"
              type="email"
              autoComplete="new-password"
              {...register("email")}
            />
            <ErrorLabel text={errors.email?.message} />
          </div>
          <div className="flex flex-col">
            <Input
              placeholder="Contraseña"
              type="password"
              autoComplete="new-password"
              {...register("password")}
            />
            <ErrorLabel text={errors.password?.message} />
          </div>
          <div className="mx-auto mt-8 flex flex-col">
            <LoadingWrapper isLoading={loading}>
              <Button
                className="w-fit rounded-[20px] bg-background px-7 text-sm text-foreground hover:bg-stone-200"
                disabled={loading}
              >
                CREAR CUENTA
              </Button>
            </LoadingWrapper>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-auto text-smd font-semibold">
        <Link to="/login">Ya tienes una cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
}
