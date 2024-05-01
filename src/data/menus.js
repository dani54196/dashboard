import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  // {
  //   label: 'Halaman'
  // },
  // {
  //   label: "Blank",
  //   path: "/blank",
  //   icon: faPage4,
  // },
  // {
  //   label: "404",
  //   path: "/404",
  //   icon: faNotdef,
  // },

  {
    label: "Tabla y formularios",
  },
  {
    label: "Form",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "Tablas",
    path: "/table",
    icon: faTable,
  },

  {
    label: "Admin",
  },
  {
    label: "Login",
    path: "/auth/login",
    icon: faLock,
  },
  {
    label: "Register",
    path: "/auth/register",
    icon: faNoteSticky,
  },
];

export default initMenu;
