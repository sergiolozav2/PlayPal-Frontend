import { RegisterCompletePage } from "@/modules/auth/RegisterCompletePage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/register-complete")({
  component: RegisterCompletePage,
});
