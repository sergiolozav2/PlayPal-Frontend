import { ProfilePage } from "@/modules/profile/ProfilePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/profile/")({
  component: Profile,
});

function Profile() {
  return <ProfilePage />;
}
