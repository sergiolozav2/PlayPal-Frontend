import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { LoadingModule } from "../core/components/LoadingModule";
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuthStore } from "../core/store/useAuthStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/backend";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

type ReservaType = {
  reservaID: string;
  image: string;
  fecha: string;
  hora: string;
  local: string;
  deporte: string;
  tipo: string;
};

function useReservas() {
  const token = useAuthStore((s) => s.token);
  const query = useQuery({
    queryFn: () => AuthService.getAuthReservas(token),
    queryKey: ["reservas", token],
  });
  return query;
}
export function ProfilePage() {
  const usuario = useAuthStore((s) => s.user);

  const logout = useAuthStore((s) => s.setLoggedOut);

  const { data, isLoading } = useReservas();

  const reservas = data as ReservaType[];
  const queryClient = useQueryClient();

  const token = useAuthStore((s) => s.token);

  function eliminarReserva(reservaID: string) {
    AuthService.deleteAuthReservas(token, { reservaID })
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ["reservas"],
        });
        toast.success("Reserva eliminada!");
      })
      .catch((e) => {
        toast.error("Ocurrió un error al eliminar");
        console.log(e);
      });
  }
  return (
    <div className="flex w-full max-w-[100vw] flex-col">
      <ModuleTitle>
        <div className="flex items-center">Menu</div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col gap-5 px-7 pb-20 pt-6">
        {isLoading && <LoadingModule />}
        {!isLoading && (
          <div className="flex items-center rounded-md bg-muted px-3 py-4 text-foreground/80">
            <FaCircleUser className="mr-3 text-5xl" />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-semibold">{usuario.nombre}</p>
              <p className="text-smd">25 años | Cod. socio: 10816</p>
            </div>
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-sm font-medium">Tus reservas</p>
          <div className="mt-2 flex flex-col gap-6">
            {isLoading && <LoadingModule />}
            {reservas &&
              reservas.map((reserva, index) => (
                <div key={index} className="relative flex items-center">
                  <button
                    className="absolute right-0 top-0 p-0.5"
                    onClick={() => eliminarReserva(reserva.reservaID)}
                  >
                    <MdClose className="text-destructive" />
                  </button>
                  <div className="mr-4 h-14 w-14 rounded-lg bg-primary_2 p-2">
                    <img
                      className="h-full w-full object-contain"
                      src={reserva.image}
                    />
                  </div>
                  <div className="flex flex-col text-xs">
                    <p className="mb-0.5">
                      {reserva.fecha} | {reserva.hora}
                    </p>
                    {reserva.tipo === "deporte" && (
                      <div className="flex gap-2 text-xs">
                        <div className="flex flex-col items-center">
                          <div className="rounded-md bg-muted p-2">PG</div>
                          <p>Pedro</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="rounded-md bg-muted p-2">AV</div>
                          <p>Andrea</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="rounded-md bg-muted p-2">MM</div>
                          <p>Mateo</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="rounded-md bg-muted p-2">RF</div>
                          <p>Ramiro</p>
                        </div>
                      </div>
                    )}
                    {reserva.tipo !== "deporte" && <p>{reserva.local}</p>}
                  </div>
                </div>
              ))}
            {reservas && reservas?.length === 0 && (
              <p className="text-smd text-muted-foreground">
                No tienes ninguna reserva
              </p>
            )}
          </div>
        </div>
        <Button className="items-center justify-start bg-primary_2 text-left font-semibold">
          <div className="mr-3 w-8">
            <svg
              className="w-full fill-white text-white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="1.0 1.0 30.0 30.0"
              zoomAndPan="magnify"
            >
              <g>
                <g id="__id164_szwio773dc">
                  <path d="M7.044,10.911H3.831c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5v-3.214 C7.544,11.134,7.321,10.911,7.044,10.911z M6.544,14.125H4.331v-2.214h2.214V14.125z" />
                  <path d="M12.081,10.911H8.866c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C12.581,11.134,12.357,10.911,12.081,10.911z M11.581,14.125H9.366v-2.214h2.214V14.125z" />
                  <path d="M17.116,10.911h-3.214c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C17.616,11.134,17.393,10.911,17.116,10.911z M16.616,14.125h-2.214v-2.214h2.214V14.125z" />
                  <path d="M18.938,15.125h3.214c0.276,0,0.5-0.224,0.5-0.5v-3.214c0-0.276-0.224-0.5-0.5-0.5h-3.214c-0.276,0-0.5,0.224-0.5,0.5 v3.214C18.438,14.901,18.661,15.125,18.938,15.125z M19.438,11.911h2.214v2.214h-2.214V11.911z" />
                  <path d="M7.044,16.268H3.831c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5v-3.214 C7.544,16.492,7.321,16.268,7.044,16.268z M6.544,19.482H4.331v-2.214h2.214V19.482z" />
                  <path d="M12.081,16.268H8.866c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C12.581,16.492,12.357,16.268,12.081,16.268z M11.581,19.482H9.366v-2.214h2.214V19.482z" />
                  <path d="M17.116,16.268h-3.214c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C17.616,16.492,17.393,16.268,17.116,16.268z M16.616,19.482h-2.214v-2.214h2.214V19.482z" />
                  <path d="M24.98,18.065V9.278c0-0.003,0.002-0.006,0.002-0.01s-0.002-0.006-0.002-0.01V5.51c0-1.053-0.857-1.91-1.91-1.91h-1.079 V2.679C21.991,1.753,21.238,1,20.312,1s-1.679,0.753-1.679,1.679V3.6H7.348V2.679C7.348,1.753,6.595,1,5.669,1 C4.744,1,3.991,1.753,3.991,2.679V3.6H2.91C1.857,3.6,1,4.457,1,5.51v20.8c0,1.053,0.857,1.91,1.91,1.91h16.358 c1.211,1.716,3.156,2.74,5.272,2.74c3.562,0,6.46-2.898,6.46-6.46C31,21.106,28.367,18.321,24.98,18.065z M21.086,19.044 c-0.21,0.133-0.416,0.277-0.615,0.436H19.44v-2.21h2.21v1.452c-0.149,0.075-0.294,0.163-0.439,0.25 C21.17,18.997,21.127,19.018,21.086,19.044z M19.634,2.679C19.634,2.305,19.938,2,20.312,2s0.679,0.305,0.679,0.679V3.6h-1.357 V2.679z M19.634,4.6h1.357v0.811c0,0.374-0.305,0.679-0.679,0.679s-0.679-0.305-0.679-0.679V4.6z M4.991,2.679 C4.991,2.305,5.295,2,5.669,2s0.679,0.305,0.679,0.679V3.6H4.991V2.679z M4.991,4.6h1.357v0.811c0,0.374-0.305,0.679-0.679,0.679 S4.991,5.785,4.991,5.411V4.6z M2.91,4.6h1.081v0.811c0,0.926,0.753,1.679,1.678,1.679c0.926,0,1.679-0.753,1.679-1.679V4.6 h11.286v0.811c0,0.926,0.753,1.679,1.679,1.679s1.679-0.753,1.679-1.679V4.6h1.079c0.502,0,0.91,0.408,0.91,0.91v3.258H2V5.51 C2,5.008,2.408,4.6,2.91,4.6z M2.91,27.22C2.408,27.22,2,26.812,2,26.31V9.768h21.98v8.296c-0.018,0.002-0.036,0.007-0.054,0.009 c-0.305,0.029-0.606,0.081-0.903,0.153c-0.061,0.015-0.12,0.032-0.18,0.048c-0.064,0.018-0.129,0.032-0.193,0.052V16.77 c0-0.276-0.224-0.5-0.5-0.5h-3.21c-0.276,0-0.5,0.224-0.5,0.5v3.21c0,0.276,0.224,0.5,0.5,0.5h0.545 c-0.906,1.135-1.415,2.545-1.415,4.02c0,0.28,0.024,0.557,0.06,0.832c0.011,0.083,0.027,0.164,0.041,0.247 c0.034,0.198,0.076,0.394,0.129,0.588c0.023,0.084,0.044,0.167,0.07,0.25c0.071,0.228,0.155,0.452,0.251,0.671 c0.016,0.035,0.027,0.072,0.043,0.107c0.004,0.008,0.006,0.016,0.01,0.024H2.91z M24.54,29.96c-1.87,0-3.59-0.938-4.6-2.511 c-0.569-0.882-0.87-1.902-0.87-2.949c0-1.592,0.695-3.101,1.902-4.138c0.428-0.361,0.892-0.652,1.377-0.864c0,0,0,0,0.001-0.001 c0.676-0.295,1.395-0.449,2.19-0.458c3.011,0,5.46,2.449,5.46,5.46S27.551,29.96,24.54,29.96z" />
                  <path d="M7.044,21.625H3.831c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5v-3.214 C7.544,21.849,7.321,21.625,7.044,21.625z M6.544,24.839H4.331v-2.214h2.214V24.839z" />
                  <path d="M12.081,21.625H8.866c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C12.581,21.849,12.357,21.625,12.081,21.625z M11.581,24.839H9.366v-2.214h2.214V24.839z" />
                  <path d="M17.116,21.625h-3.214c-0.276,0-0.5,0.224-0.5,0.5v3.214c0,0.276,0.224,0.5,0.5,0.5h3.214c0.276,0,0.5-0.224,0.5-0.5 v-3.214C17.616,21.849,17.393,21.625,17.116,21.625z M16.616,24.839h-2.214v-2.214h2.214V24.839z" />
                  <path d="M24.48,21.044c0.276,0,0.5-0.224,0.5-0.5V19.98c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v0.564 C23.98,20.821,24.204,21.044,24.48,21.044z" />
                  <path d="M24.48,28.078c-0.276,0-0.5,0.224-0.5,0.5v0.565c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.565 C24.98,28.302,24.756,28.078,24.48,28.078z" />
                  <path d="M29.062,24.062h-0.565c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h0.565c0.276,0,0.5-0.224,0.5-0.5 S29.338,24.062,29.062,24.062z" />
                  <path d="M20.463,24.062h-0.565c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h0.565c0.276,0,0.5-0.224,0.5-0.5 S20.74,24.062,20.463,24.062z" />
                  <path d="M24.98,24.291v-2.032c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5V24.5c0,0.134,0.054,0.262,0.149,0.356l1.395,1.375 c0.098,0.096,0.224,0.144,0.351,0.144c0.129,0,0.258-0.05,0.356-0.149c0.194-0.197,0.192-0.513-0.005-0.707L24.98,24.291z" />
                </g>
              </g>
            </svg>
          </div>
          <p>Horarios</p>
        </Button>
        <Button className="items-center justify-start whitespace-normal bg-primary_2 text-left font-semibold">
          <div className="mr-3 w-8">
            <IoSettingsOutline className="text-3xl" />
          </div>
          <p>Configuración y privacidad</p>
        </Button>
        <Button className="items-center justify-start bg-primary_2 text-left font-semibold">
          <div className="mr-3 w-8">
            <svg
              className="w-full fill-white text-white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="0.0 0.0 24.0 24.0"
              zoomAndPan="magnify"
            >
              <g data-name="23. Help" id="__id170_szwio773dc">
                <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.644,3.644,0,0,0,11,14a.965.965,0,0,0,1,.957,1.039,1.039,0,0,0,1-1.044,1.646,1.646,0,0,1,.93-1.408,4,4,0,0,0-1.213-7.442Z" />
                <path d="M12.02,17h-.01a1.005,1.005,0,1,0,.01,0Z" />
              </g>
            </svg>
          </div>
          <p>Ayuda y soporte</p>
        </Button>

        <Button
          className="bg-muted text-foreground hover:text-white"
          onClick={logout}
        >
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}
