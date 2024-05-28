import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { toast } from "react-toastify";

type DeportePageProps = {
  image: string;
  name: string;
  canchas: { name: string; image: string }[];
  horarios: { hora: string; duracion: string; dia: string }[];
};

export function DeportePage(props: DeportePageProps) {
  function goBack() {
    window.history.back();
  }

  const [horario, setHorario] = useState<number>();
  const [cancha, setCancha] = useState<number>();

  function handleReservar() {
    console.log(cancha, horario);
    if (cancha === undefined || horario === undefined) return;

    console.log(props.canchas[cancha]);
    console.log(props.horarios[horario]);
    toast.success("Horario reservado!");
    window.history.back();
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
        <p className="mt-6 text-sm font-semibold">Canchas disponibles</p>
        <div className="mt-2 flex flex-col gap-6 px-6 text-center text-smd">
          {props.canchas.map((canchaLoop, index) => (
            <button
              key={canchaLoop.name}
              className={`${cancha === index ? "outline outline-offset-2 outline-primary_2" : ""} w-full overflow-hidden rounded-md bg-muted`}
              onClick={() => setCancha(index)}
            >
              <img src={canchaLoop.image} className="w-full" />
              <p className="px-1 py-2">{canchaLoop.name}</p>
            </button>
          ))}
        </div>
        <Button className="mt-4" onClick={handleReservar}>
          Reservar
        </Button>
      </div>
    </div>
  );
}
