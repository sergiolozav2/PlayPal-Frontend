import Cookies from "js-cookie";
import { create } from "zustand";

type AuthStateType = {
  isLoggedIn: boolean;
  token: string;
  user: UserType;
};

type AuthActions = {
  setLoggedIn: (token: string, user: UserType) => void;
  setLoggedOut: () => void;
};

type UserType = {
  usuarioID: number;
  email: string;
  nombre: string;
  password: string;
  nacimiento: string;
  reservas: object;
};

export function useUsuarioID() {
  const token = useAuthStore((s) => s.token);
  const body = parseJwt(token);
  const usuarioID = body?.usuarioID as number | undefined;
  return usuarioID;
}
export function useToken() {
  const token = useAuthStore((s) => s.token);
  return token;
}

function defaultUser() {
  return {
    usuarioID: 0,
    email: " ",
    nacimiento: "",
    nombre: "",
    password: "",
    reservas: {},
  };
}
const userDefault = defaultUser();
export const useAuthStore = create<AuthStateType & AuthActions>((set) => ({
  token: Cookies.get("token") ?? "",
  user: JSON.parse(localStorage.getItem("user") ?? "[]") ?? userDefault,
  isLoggedIn: !!Cookies.get("isLoggedIn"),
  setLoggedIn: (token: string, user: UserType) => {
    Cookies.set("isLoggedIn", "true");
    Cookies.set("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set(() => ({ isLoggedIn: true, token, user }));
  },
  setLoggedOut: () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("token");
    localStorage.removeItem("user");
    set(() => ({ isLoggedIn: false, token: "", user: defaultUser() }));
  },
}));

function parseJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
}
