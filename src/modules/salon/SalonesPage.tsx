import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { LoadingWrapper } from "../core/components/LoadingSpinner";
import { AuthService } from "@/backend";
import { useAuthStore } from "../core/store/useAuthStore";

type DeportePageProps = {
  image: string;
  name: string;
  horarios: { hora: string; duracion: string; dia: string; fecha: string }[];
};

export function SalonesPage(props: DeportePageProps) {
  function goBack() {
    window.history.back();
  }

  const [horario, setHorario] = useState<number>();
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((s) => s.token);

  function handleReservar() {
    console.log(horario);
    if (horario === undefined) {
      toast.info("Completa el formulario de reserva");
      return;
    }

    const reserva = props.horarios[horario];
    let horaFinal = 19;
    try {
      horaFinal =
        Number.parseInt(reserva.hora.split(":")[0]) +
        Number.parseInt(reserva.duracion.split(" ")[0]);
    } catch (e) {
      console.log(e);
    }
    const reservaHora = `${reserva.hora} - ${horaFinal}:00`;
    AuthService.postAuthReservar(token, {
      deporte: props.name,
      fecha: props.horarios[horario].fecha,
      hora: reservaHora,
      local: props.name,
      image: props.image,
      tipo: "salon",
    })
      .then(() => {
        toast.success("Horario reservado!");
        window.history.back();
      })
      .catch(() => {
        toast.error("Ocurrió un error al reservar");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex w-full flex-col">
      <ModuleTitle image={props.image}>
        <div className="flex items-center">
          <button className="p-1" onClick={goBack}>
            <FaChevronLeft />
          </button>
          {props.name}
        </div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col px-7 pb-20">
        <p className="mt-6 text-sm font-semibold">Horarios</p>
        <div className="mt-2 flex text-center text-sm">
          <div className="flex w-full flex-col items-center">
            <p className="text-smd font-semibold">Hora</p>
            <div className="mt-1 flex flex-col gap-2">
              {props.horarios.map((h, index) => (
                <React.Fragment key={index}>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="horario"
                      onChange={(e) =>
                        setHorario(Number.parseInt(e.target.value))
                      }
                      value={index}
                    />
                    <p className="rounded-lg bg-muted px-2 py-1">
                      {h.duracion}
                    </p>
                    <p className="rounded-lg bg-muted px-2 py-1">{h.hora}</p>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <p className="text-smd font-semibold">Día</p>
            <div className="mt-1 flex flex-col gap-2">
              {props.horarios.map((h, index) => (
                <React.Fragment key={index}>
                  <p className="rounded-lg bg-muted px-6 py-1">{h.dia}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold">Salon elegido</p>
        <div className="mt-2 flex flex-col gap-6 px-6 text-center text-smd">
          <button
            className={
              "w-full overflow-hidden rounded-md bg-muted outline outline-offset-2 outline-primary_2"
            }
          >
            <img src={props.image} className="w-full" />
            <p className="px-1 py-2">{props.name}</p>
          </button>
        </div>
        <LoadingWrapper isLoading={loading}>
          <Button
            className="mt-4 w-full"
            disabled={loading}
            onClick={handleReservar}
          >
            Reservar
          </Button>
        </LoadingWrapper>
      </div>
    </div>
  );
}
