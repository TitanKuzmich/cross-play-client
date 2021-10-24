import { mainMenuRoutes } from "./mainMenuRoutes";

export const setPageTitle = ({ prefix, routes, pathname, search }) => {
  let title = prefix
  const fullPath = `${pathname}${search}`
  const path = pathname.split("/")[1]
  const route = routes.find(routeItem => routeItem.path.toString().includes(path))
  const exactRoute  = routes.find(routeItem => routeItem.path.toString() === pathname)

  if (route?.title) {
    title = `${prefix} - ${route.title}`
  }

  if (exactRoute?.title) {
    title = `${prefix} - ${exactRoute.title}`
  }

  if (route?.routes) {
    const extendedRoute = route?.routes.find(routeItem =>
      fullPath.includes(routeItem.path.toString())
    )

    if (extendedRoute && extendedRoute.title) {
      title = `${prefix} - ${extendedRoute.title}`
    }
  }
  document.title = title
}

export const routes = () => [
  ...mainMenuRoutes()
]

export const redirects = [
  { from: "/", to: "/main", exact: true, strict: false },
]
