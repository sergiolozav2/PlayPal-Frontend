import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useEffect, useState } from "react";
import { LoadingModule } from "../core/components/LoadingModule";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const torneosData = [
  {
    title: "Sport Event Tournament",
    image: "/images/torneos/sport.png",
  },
  {
    title: "Participa en nuestro torneo de Tenis!",
    image: "/images/torneos/tenis.png",
  },
  {
    title: "Torneo verde y blanco 2024",
    image: "/images/torneos/blanco.png",
  },
];
export function TorneosPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoading(false);
    }, 0);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div className="flex w-full max-w-[100vw] flex-col">
      <ModuleTitle>
        <div className="flex items-center">Torneos</div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col gap-5 px-7 pb-20 pt-6">
        {loading && <LoadingModule />}
        {!loading &&
          torneosData.map((evento) => (
            <Dialog key={evento.title}>
              <DialogTrigger asChild>
                <Button className="group flex flex-col whitespace-normal bg-transparent px-0 pb-0 pt-1 text-center text-smd transition-all hover:bg-transparent hover:brightness-90">
                  <p className="w-full rounded-t-2xl bg-primary_2 text-primary-foreground">
                    {evento.title}
                  </p>
                  <img
                    src={evento.image}
                    className="max-h-40 w-full rounded-b-2xl object-cover transition-all"
                  />
                </Button>
              </DialogTrigger>

              <DialogContent className="max-h-[80vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="mb-0 mt-2 text-left text-sm">
                    {evento.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="group flex flex-col whitespace-normal bg-transparent px-0 pb-0 pt-1 text-center text-smd transition-all">
                  <img
                    src={evento.image}
                    className="w-full  object-cover transition-all"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
      </div>
    </div>
  );
}
