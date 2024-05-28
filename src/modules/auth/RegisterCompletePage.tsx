import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { FaChevronLeft } from "react-icons/fa6";

export function RegisterCompletePage() {
  const navigate = useNavigate();
  function goBack() {
    navigate({ to: "/start" });
  }

  const email = localStorage.getItem("email") ?? "*******@example.com";
  return (
    <div className="flex min-h-screen flex-col bg-primary px-6 pb-5 pt-8 text-primary-foreground">
      <div className="flex items-center gap-2 font-semibold">
        <button className="-ml-1 p-1" onClick={goBack}>
          <FaChevronLeft />
        </button>
        <p>Inicio</p>
      </div>
      <Separator className="mt-2" />
      <div className="flex w-full flex-col justify-center">
        <div className="mt-32 flex flex-col items-center">
          <p className="text-lg font-bold">Listo!</p>
          <p className="mt-3 text-center text-sm font-semibold">
            Envíamos un correo electrońico a {email}. Ingresa a tu correo y
            sigue las instrucciones para reestablecer tu contraseña.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex flex-col">
        <Button
          onClick={goBack}
          className="w-fit rounded-[20px] bg-background px-16 text-sm text-foreground hover:bg-background/80"
        >
          OK
        </Button>
      </div>
    </div>
  );
}
