import { MdHome, MdOutlineMenu } from "react-icons/md";
import { SidebarLink } from "./components/SidebarLink";
import { IoMegaphone } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { HiTrophy } from "react-icons/hi2";

export function ApplicationSidebar() {
  return (
    <div className={`fixed inset-0 top-auto z-10`}>
      <div
        className={`h-full flex-col border border-t bg-background py-1.5 md:flex`}
      >
        <div className="flex gap-1.5 font-medium">
          <SidebarLink to="/admin/home" text="Inicio" icon={<MdHome />} />
          <SidebarLink
            to="/admin/anuncios"
            text="Categoría"
            icon={<IoMegaphone />}
          />
          <SidebarLink to="/admin/chat" text="Buscar" icon={<TbMessage />} />
          <SidebarLink
            to="/admin/torneos"
            text="Notificaciones"
            icon={<HiTrophy />}
          />
          <SidebarLink
            to="/admin/profile"
            text="Perfil"
            icon={<MdOutlineMenu />}
          />
        </div>
      </div>
    </div>
  );
}
