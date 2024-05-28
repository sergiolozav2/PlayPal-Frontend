import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useEffect, useState } from "react";
import { LoadingModule } from "../core/components/LoadingModule";

const eventosData = [
  {
    title: "Menú Semanal del lunes 06/05 al domingo 12/05",
    image: "/images/anuncios/menu.webp",
    description: "¡Disfrute de nuestro menú todos los días en el Club!",
  },
  {
    title: "Fiesta 77° Aniversario del Club de Tenis Santa Cruz",
    image: "/images/anuncios/aniversario.webp",
    description:
      "¡Les compartimos las emocionantes momentos vividos en la Fiesta 77° Aniversario del Club de Tenis Santa Cruz!",
  },
  {
    title: "Torneo Verde y Blanco 2024",
    image: "/images/anuncios/torneo.webp",
    description:
      "¡Inscribete a nuestro torneo de Padel para miembros del Club! Este 22/05",
  },
];
export function AnunciosPage() {
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
        <div className="flex items-center">Anuncios</div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col gap-5 px-7 pb-20 pt-6">
        {loading && <LoadingModule />}
        {!loading &&
          eventosData.map((evento) => (
            <Button
              key={evento.title}
              className="group flex flex-col whitespace-normal bg-transparent px-0 pb-0 pt-1 text-center text-smd transition-all hover:bg-transparent hover:brightness-90"
            >
              <p className="w-full rounded-t-2xl bg-primary_2 text-primary-foreground">
                Hali
              </p>
              <img
                src={evento.image}
                className="max-h-40 w-full object-cover transition-all"
              />
              <p className="w-full rounded-b-2xl bg-muted px-2 py-1 text-xs text-primary">
                {evento.description}
              </p>
            </Button>
          ))}
      </div>
    </div>
  );
}
