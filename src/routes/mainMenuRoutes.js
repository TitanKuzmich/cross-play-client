import { lazy } from "react"

const Main = lazy(() => import("../app/sections/Main"))
const WhySafe = lazy(() => import("../app/sections/WhySafe"))
const Transfer = lazy(() => import("../app/sections/Transfer"))
const Contacts = lazy(() => import("../app/sections/Contacts"))

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
      title: "Transfer"
      // routes: [...transferRoutes]
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
