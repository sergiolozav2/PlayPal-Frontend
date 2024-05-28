import { Link } from "@tanstack/react-router";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useAuthStore } from "../core/store/useAuthStore";

export function HomePage() {
  const usuario = useAuthStore((s) => s.user);
  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>Club de Tenis Santa Cruz</ModuleTitle>
      <div className="fade-in-animation flex flex-col px-7 pb-20">
        <p className="mt-4 text-smd font-light">
          Buenos días {usuario.nombre?.split(" ")?.at(0)}
        </p>
        <p className="text-sm font-medium">¿Qué actividad realizarás hoy?</p>

        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium text-primary-foreground">
          <Link
            to="/admin/deporte/$deporteID"
            params={{ deporteID: "tenis" }}
            className="flex flex-col  items-center rounded-2xl bg-primary_2 px-5 pb-3 pt-4 hover:bg-primary_2/90"
          >
            <img
              className="mb-0.5 h-20 max-h-20 object-contain"
              src="/images/start/tenis.webp"
            />

            <p>Tenis</p>
          </Link>
          <Link
            to="/admin/deporte/$deporteID"
            params={{ deporteID: "padel" }}
            className="flex flex-col  items-center rounded-2xl bg-primary_2 px-5 pb-3 pt-4 hover:bg-primary_2/90"
          >
            <img
              className="mb-0.5 h-20 max-h-20 object-contain"
              src="/images/start/padel.webp"
            />

            <p>Padel</p>
          </Link>
          <Link
            to="/admin/deporte/$deporteID"
            params={{ deporteID: "soccer" }}
            className="flex flex-col  items-center rounded-2xl bg-primary_2 px-5 pb-3 pt-4 hover:bg-primary_2/90"
          >
            <img
              className="mb-0.5 ml-3 h-20 w-full max-w-20 object-contain"
              src="/images/start/soccer.webp"
            />

            <p>Fútbol</p>
          </Link>
          <Link
            to="/admin/deporte/$deporteID"
            params={{ deporteID: "pickleball" }}
            className="flex flex-col  items-center rounded-2xl bg-primary_2 px-5 pb-3 pt-4 hover:bg-primary_2/90"
          >
            <img
              className="mb-0.5 h-20 w-full max-w-20 object-contain"
              src="/images/start/pickleball.webp"
            />

            <p>Pickleball</p>
          </Link>
        </div>

        <div className="relative mt-5 flex">
          <div className="absolute -inset-x-4 inset-y-0 -z-10 rounded-xl bg-muted"></div>
          <div className=" px-6 py-2 text-center text-sm font-semibold text-foreground/80">
            Reserva tu salón de eventos favorito!
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-sm font-medium text-primary-foreground">
          <Link
            className="flex flex-col rounded-t-2xl bg-primary_2 px-0 pb-0 pt-1 text-center text-smd"
            to={"/admin/salon/$salonID"}
            params={{ salonID: "bali" }}
          >
            <p>Hali</p>
            <img
              src="/images/locations/bali.webp"
              className="h-full w-full object-cover"
            />
          </Link>
          <Link
            className="flex flex-col rounded-t-2xl bg-primary_2 px-0 pb-0 pt-1 text-center text-smd"
            to={"/admin/salon/$salonID"}
            params={{ salonID: "principal" }}
          >
            <p>Salón principal</p>
            <img
              src="/images/locations/pilares.webp"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
