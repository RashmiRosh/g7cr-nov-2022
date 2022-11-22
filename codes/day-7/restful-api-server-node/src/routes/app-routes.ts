import { Route } from "../models/route.model"

const appRoutes: Route[] = []

export const registerRoutes = (...routes: Route[]) => {
    routes.forEach(
        r => appRoutes.push(r)
    )
}
export const getRoutes = (): Route[] => {
    return appRoutes
}