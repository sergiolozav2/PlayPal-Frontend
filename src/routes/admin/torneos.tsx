import { TorneosPage } from "@/modules/torneos/TorneosPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/torneos")({
  component: Page,
});

function Page() {
  return <TorneosPage />;
}
