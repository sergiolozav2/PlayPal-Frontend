import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export function StartPage() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate({ to: "/login" });
  }
  function goToRegister() {
    navigate({ to: "/register" });
  }
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center bg-background px-8">
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover brightness-75 contrast-125"
          src="/images/login/start_bg.png"
        />
        <div className="absolute inset-0 bg-sky-200/[35%]"></div>
      </div>

      <div className="mx-auto mt-20 flex">
        <img
          className="w-64  drop-shadow-[0px_5px_15px_#000]"
          src="/images/login/logo_login.png"
        />
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-60 flex-col">
        <Button
          onClick={goToLogin}
          className="rounded-[20px] bg-secondary px-8 text-xl hover:bg-secondary/85"
        >
          Iniciar sesión
        </Button>
        <Button
          onClick={goToRegister}
          variant="link"
          className="px-8 text-xl font-bold text-foreground"
        >
          Crear cuenta
        </Button>
      </div>
    </div>
  );
}
