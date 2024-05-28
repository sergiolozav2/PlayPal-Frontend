import { SalonesPage } from "@/modules/salon/SalonesPage";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/salon/$salonID")({
  component: Pokemon,
});

const salones = ["bali", "principal"] as const;
const datosSalonesMapa = {
  bali: {
    image: "/images/locations/bali.webp",
    name: "Salón - Bali",
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
  },
  principal: {
    image: "/images/locations/pilares.webp",
    name: "Salón - Principal",
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
  },
};
function Pokemon() {
  const { salonID } = Route.useParams();

  const salon = salones.find((d) => d === salonID);

  if (salon) {
    const salonesProps = datosSalonesMapa[salon];
    return <SalonesPage {...salonesProps} />;
  }
  return <Navigate to="/login" />;
}
