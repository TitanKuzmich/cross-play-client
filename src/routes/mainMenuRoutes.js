import { lazy } from "react"
import {transferRoutes} from "./transferRoutes";
import Vk from "../app/sections/Transfer/Platforms/Vk";
import Spotify from "../app/sections/Transfer/Platforms/Spotify";
import Yandex from "../app/sections/Transfer/Platforms/Yandex";

const Main = lazy(() => import("../app/sections/Main/index"))
const WhySafe = lazy(() => import("../app/sections/WhySafe/index"))
const Transfer = lazy(() => import("../app/sections/Transfer/index"))
const Contacts = lazy(() => import("../app/sections/Contacts/index"))

export const mainMenuRoutes = () => {
  const routes = [
    {
      path: "/main",
      name: "Main",
      slug: "main",
      component: Main,
      exact: true,
      title: "Main"
    },
    {
      path: "/safe",
      name: "Why Safe",
      slug: "why-safe",
      component: WhySafe,
      exact: true,
      title: "Why Safe"
    },
    {
      path: "/transfer",
      name: "Transfer",
      slug: "transfer",
      component: Transfer,
      exact: true,
      title: "Transfer",
      // routes: [...transferRoutes]
    },
    {
      path: "/transfer/vk",
      name: "Transfer from VK",
      slug: "transferVk",
      component: Vk,
      exact: true,
      title: "VK",
    },
    {
      path: "/transfer/spotify",
      name: "Transfer from Spotify",
      slug: "transferSpotify",
      component: Spotify,
      exact: true,
      title: "Spotify",
    },
    {
      path: "/transfer/yandex",
      name: "Transfer from Yandex",
      slug: "transferYandex",
      component: Yandex,
      exact: true,
      title: "Yandex",
    },
    {
      path: "/contacts",
      name: "Contacts",
      slug: "Contacts",
      component: Contacts,
      exact: true,
      title: "Contacts"
    }
  ]

  return routes
}
