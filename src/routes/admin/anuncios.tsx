import { AnunciosPage } from "@/modules/anuncios/AnunciosPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/anuncios")({
  component: Anuncios,
});

function Anuncios() {
  return <AnunciosPage />;
}
