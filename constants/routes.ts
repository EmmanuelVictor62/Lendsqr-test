import { IconTypes } from "@/public/icons/icon";

export type RouteType = {
  label: string;
  path?: string;
  icon?: IconTypes;
  children?: RouteType[];
};

export const routes: RouteType[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "home",
  },
  {
    label: "CUSTOMERS",
    children: [
      {
        label: "Users",
        path: "/users",
        icon: "users",
      },
      {
        label: "Guarantors",
        path: "/guarantors",
        icon: "guarantors",
      },
    ],
  },
  {
    label: "BUSINESSES",
    children: [
      {
        label: "Organizations",
        path: "/organizations",
        icon: "briefcase",
      },
      {
        label: "Services",
        path: "/services",
        icon: "settings",
      },
    ],
  },
  {
    label: "SETTINGS",
    children: [
      {
        label: "Preferences",
        path: "/preferences",
        icon: "slider",
      },
      {
        label: "Audit Logs",
        path: "/logs",
        icon: "clipboard",
      },
    ],
  },
];
