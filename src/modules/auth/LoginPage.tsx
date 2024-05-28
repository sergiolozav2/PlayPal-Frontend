import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import { FaChevronLeft } from "react-icons/fa6";
import { useAuthStore } from "../core/store/useAuthStore";
import { useState } from "react";
import { AuthService } from "@/backend";
import { z } from "zod";
import { zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoadingWrapper } from "../core/components/LoadingSpinner";
import { ErrorLabel } from "@/components/ui/error-label";
import { toast } from "react-toastify";

const formData = z.object({
  email: zodExtra.string().email(),
  password: zodExtra.string(),
});
type FormDataType = z.infer<typeof formData>;

export function LoginPage() {
  const navigate = useNavigate();
  function goBack() {
    navigate({ to: "/start" });
  }
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(formData) });

  const login = useAuthStore((s) => s.setLoggedIn);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  function onSubmit(data: FormDataType) {
    setLoading(true);
    AuthService.postAuthLogin(data)
      .then((r) => {
        login(r.token, r.usuario);
      })
      .catch(() => {
        toast.error("Email / contraseña incorrectos");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (isLoggedIn) {
    return <Navigate to="/admin/home" />;
  }
  return (
    <div className="flex min-h-screen flex-col bg-primary px-6 pb-5 pt-8 text-primary-foreground">
      <div className="flex items-center gap-2 font-semibold">
        <button className="-ml-1 p-1" onClick={goBack}>
          <FaChevronLeft />
        </button>
        <p>Iniciar sesión</p>
      </div>
      <Separator className="mt-2" />
      <div className="mx-auto mt-4 flex">
        <img className="w-36" src="/images/logo/logo-white-256.png" />
      </div>
      <div className="flex w-full flex-col justify-center">
        <div className="mt-4 flex flex-col items-center font-semibold">
          <p>Club de Tenis</p>
          <p>Santa Cruz</p>
        </div>
        <form className="mt-6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email" {...register("email")} />
          <ErrorLabel text={errors.email?.message} />

          <Input
            className="mt-4"
            placeholder="Contraseña"
            type="password"
            {...register("password")}
          />
          <ErrorLabel text={errors.password?.message} />

          <div className="mx-auto mt-12 flex flex-col">
            <LoadingWrapper isLoading={loading}>
              <Button
                disabled={loading}
                className="w-fit rounded-[20px] bg-background px-7 text-sm text-foreground hover:bg-stone-200"
              >
                INICIAR SESIÓN
              </Button>
            </LoadingWrapper>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-auto text-smd font-semibold">
        <Link>Olvidaste tu contraseña?</Link>
      </div>
    </div>
  );
}
