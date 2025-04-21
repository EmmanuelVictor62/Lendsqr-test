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
        path: "/organizations",
        icon: "settings",
      },
    ],
  },
  {
    label: "SETTINGS",
    children: [
      {
        label: "Preferences",
        path: "/organizations",
        icon: "slider",
      },
      {
        label: "Audit Logs",
        path: "/organizations",
        icon: "clipboard",
      },
    ],
  },
];
