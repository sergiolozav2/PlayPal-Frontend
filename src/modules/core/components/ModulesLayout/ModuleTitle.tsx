import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ModuleTitleProps = {
  children: React.ReactNode;
  className?: string;
  image?: string;
  separator?: boolean;
};

export function ModuleTitle(props: ModuleTitleProps) {
  const separator = props.separator ?? true;
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between px-6 pt-6",
        props.className,
      )}
    >
      <div className="w-11 ">
        <img
          className="w-full mix-blend-multiply"
          src={props.image ?? "/images/logo/logo-256.png"}
        />
      </div>
      <div className="flex flex-col">
        <div className="ml-auto text-sm">{props.children}</div>
        {separator && (
          <Separator className="ml-auto mt-3 w-32 max-w-32 border" />
        )}
      </div>
    </div>
  );
}
