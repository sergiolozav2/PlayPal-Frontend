interface SidebarTitleProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <div className="select-none py-2 text-left font-medium">
      <div className="flex flex-col items-center text-xs">
        {props.icon && <span className="text-3xl">{props.icon}</span>}
      </div>
    </div>
  );
}
