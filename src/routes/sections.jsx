import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const TeamsPage = lazy(() => import('src/pages/teams'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const TeamDetailPage = lazy(() => import('src/pages/team-detail'));
export const BlogDetailPage = lazy(() => import('src/pages/blog-detail'));
export const UserDetailPage = lazy(() => import('src/pages/user-detail'))
export const BlogReportPage = lazy(() => import('src/pages/blog-report'))
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
      ),
      children: [
        { element: <UserPage />, index: true, },
        { path: 'user', element: <UserPage /> },
        { path: 'teams', element: <TeamsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'teams/:teamId', element: <TeamDetailPage /> },
        { path: 'blog/:blogId', element: <BlogDetailPage /> },
        { path: 'user/:userId', element: <UserDetailPage /> },
        { path: 'blog-report', element: <BlogReportPage /> }
      ],
    },
    {
      path: 'login',
      element: (
        <LoginPage />
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
