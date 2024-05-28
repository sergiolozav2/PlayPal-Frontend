import { Link, LinkProps } from "@tanstack/react-router";
import { SidebarTitle } from "./SidebarTitle";

interface SidebarLinkProps extends LinkProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <Link
      className="w-full font-normal text-stone-600 hover:text-primary/80 [&.active]:text-primary/80"
      to={props.to}
    >
      <SidebarTitle text={props.text} icon={props.icon} />
    </Link>
  );
}
