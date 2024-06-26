/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminRouteImport } from './routes/admin/route'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AdminTorneosImport } from './routes/admin/torneos'
import { Route as AdminHomeImport } from './routes/admin/home'
import { Route as AdminChatImport } from './routes/admin/chat'
import { Route as AdminAnunciosImport } from './routes/admin/anuncios'
import { Route as AdminProfileIndexImport } from './routes/admin/profile/index'
import { Route as AdminSalonSalonIDImport } from './routes/admin/salon.$salonID'
import { Route as AdminDeporteDeporteIDImport } from './routes/admin/deporte.$deporteID'

// Create Virtual Routes

const PublicLazyImport = createFileRoute('/_public')()
const AuthLazyImport = createFileRoute('/_auth')()
const IndexLazyImport = createFileRoute('/')()
const AuthStartLazyImport = createFileRoute('/_auth/start')()
const AuthRegisterCompleteLazyImport = createFileRoute(
  '/_auth/register-complete',
)()
const AuthRegisterLazyImport = createFileRoute('/_auth/register')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()

// Create/Update Routes

const PublicLazyRoute = PublicLazyImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_public.lazy').then((d) => d.Route))

const AuthLazyRoute = AuthLazyImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_auth.lazy').then((d) => d.Route))

const AdminRouteRoute = AdminRouteImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AdminIndexRoute = AdminIndexImport.update({
  path: '/',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AuthStartLazyRoute = AuthStartLazyImport.update({
  path: '/start',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() => import('./routes/_auth.start.lazy').then((d) => d.Route))

const AuthRegisterCompleteLazyRoute = AuthRegisterCompleteLazyImport.update({
  path: '/register-complete',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() =>
  import('./routes/_auth.register-complete.lazy').then((d) => d.Route),
)

const AuthRegisterLazyRoute = AuthRegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() =>
  import('./routes/_auth.register.lazy').then((d) => d.Route),
)

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => AuthLazyRoute,
} as any).lazy(() => import('./routes/_auth.login.lazy').then((d) => d.Route))

const AdminTorneosRoute = AdminTorneosImport.update({
  path: '/torneos',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminHomeRoute = AdminHomeImport.update({
  path: '/home',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminChatRoute = AdminChatImport.update({
  path: '/chat',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminAnunciosRoute = AdminAnunciosImport.update({
  path: '/anuncios',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminProfileIndexRoute = AdminProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminSalonSalonIDRoute = AdminSalonSalonIDImport.update({
  path: '/salon/$salonID',
  getParentRoute: () => AdminRouteRoute,
} as any)

const AdminDeporteDeporteIDRoute = AdminDeporteDeporteIDImport.update({
  path: '/deporte/$deporteID',
  getParentRoute: () => AdminRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthLazyImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      preLoaderRoute: typeof PublicLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/anuncios': {
      preLoaderRoute: typeof AdminAnunciosImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/chat': {
      preLoaderRoute: typeof AdminChatImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/home': {
      preLoaderRoute: typeof AdminHomeImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/torneos': {
      preLoaderRoute: typeof AdminTorneosImport
      parentRoute: typeof AdminRouteImport
    }
    '/_auth/login': {
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthLazyImport
    }
    '/_auth/register': {
      preLoaderRoute: typeof AuthRegisterLazyImport
      parentRoute: typeof AuthLazyImport
    }
    '/_auth/register-complete': {
      preLoaderRoute: typeof AuthRegisterCompleteLazyImport
      parentRoute: typeof AuthLazyImport
    }
    '/_auth/start': {
      preLoaderRoute: typeof AuthStartLazyImport
      parentRoute: typeof AuthLazyImport
    }
    '/admin/': {
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/deporte/$deporteID': {
      preLoaderRoute: typeof AdminDeporteDeporteIDImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/salon/$salonID': {
      preLoaderRoute: typeof AdminSalonSalonIDImport
      parentRoute: typeof AdminRouteImport
    }
    '/admin/profile/': {
      preLoaderRoute: typeof AdminProfileIndexImport
      parentRoute: typeof AdminRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AdminRouteRoute.addChildren([
    AdminAnunciosRoute,
    AdminChatRoute,
    AdminHomeRoute,
    AdminTorneosRoute,
    AdminIndexRoute,
    AdminDeporteDeporteIDRoute,
    AdminSalonSalonIDRoute,
    AdminProfileIndexRoute,
  ]),
  AuthLazyRoute.addChildren([
    AuthLoginLazyRoute,
    AuthRegisterLazyRoute,
    AuthRegisterCompleteLazyRoute,
    AuthStartLazyRoute,
  ]),
])

/* prettier-ignore-end */
