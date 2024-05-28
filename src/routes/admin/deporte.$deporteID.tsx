import { DeportePage } from "@/modules/deporte/DeportePage";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/deporte/$deporteID")({
  component: Pokemon,
});

const deportes = ["tenis", "pickleball", "padel", "soccer"] as const;
const datosDeporteMapa = {
  tenis: {
    image: "/images/start/tenis.webp",
    name: "Tenis",
    horarios: [
      {
        duracion: "1 hr",
        hora: "17:00",
        dia: "Hoy",
      },
      {
        duracion: "1 hr",
        hora: "16:00",
        dia: "Hoy",
      },
    ],
    canchas: [
      {
        image: "/images/locations/tenis-1.webp",
        name: "Tenis 1 - Polvo de ladrillo",
      },
      {
        image: "/images/locations/tenis-2.webp",
        name: "Tenis 2 - Polvo de ladrillo",
      },
    ],
  },
  pickleball: {
    image: "/images/start/pickleball.webp",
    name: "Pickleball",
    horarios: [
      {
        duracion: "1 hr",
        hora: "13:00",
        dia: "Hoy",
      },
      {
        duracion: "1 hr",
        hora: "12:00",
        dia: "Hoy",
      },
    ],
    canchas: [
      {
        image: "/images/locations/tenis-1.webp",
        name: "Pickleball 1 - Polvo de ladrillo",
      },
    ],
  },
  padel: {
    image: "/images/start/padel.webp",
    name: "Padel",
    horarios: [
      {
        duracion: "1 hr",
        hora: "09:00",
        dia: "Hoy",
      },
    ],
    canchas: [
      {
        image: "/images/locations/tenis-1.webp",
        name: "Padel 1 - Polvo de ladrillo",
      },
    ],
  },
  soccer: {
    image: "/images/start/soccer.webp",
    name: "Fútbol",
    horarios: [
      {
        duracion: "1 hr",
        hora: "13:00",
        dia: "Hoy",
      },
    ],
    canchas: [
      {
        image: "/images/locations/futbol-1.png",
        name: "Fútbol 1 - Cancha sintética",
      },
    ],
  },
};
function Pokemon() {
  const { deporteID } = Route.useParams();

  const deporte = deportes.find((d) => d === deporteID);

  if (deporte) {
    const deportesProps = datosDeporteMapa[deporte];
    return <DeportePage {...deportesProps} />;
  }
  return <Navigate to="/login" />;
}
