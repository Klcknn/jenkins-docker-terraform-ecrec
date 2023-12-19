import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import ContactPage from "../pages/contact-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import ForgotPage from "../pages/dashboard/profile/forgot-page";
import ResetPasswordPage from "../pages/dashboard/profile/reset-password-page";
import ChangePasswordPage from "../pages/dashboard/profile/change-password-page";
import AdminLayout from "../layouts/admin-layout";
import AdminDashboardPage from "../pages/dashboard/admin/admin-dashboard-page";
import { config } from "../helpers/config/index";
import PrivateRoute from "./private-route";
import MyProfilePage from "../pages/dashboard/profile/my-profile-page";
import MyAdvertsPage from "../pages/dashboard/profile/my-adverts-page";
import MyFavoritesPage from "../pages/dashboard/profile/my-favorites-page";
import MyTourRequestPage from "../pages/dashboard/profile/my-tour-request-page";
import AdvertDetailPage from "../pages/dashboard/profile/advert-detail-page";
import TourRequestDetailsPage from "../pages/dashboard/profile/tour-request-details-page";
import NewAdvertPage from "../pages/dashboard/profile/new-advert-page";
import EditAdvertPage from "../pages/dashboard/profile/edit-advert-page";
import AdvertPage from "../pages/advert-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "properties",
        element: <AdvertPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "change-password",
        element: <ChangePasswordPage />,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute roles={config.pageRoles.myProfile}>
            <MyProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-adverts",
        element: (
          <PrivateRoute roles={config.pageRoles.myAdverts}>
            <MyAdvertsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-favorites",
        element: (
          <PrivateRoute roles={config.pageRoles.myFavorites}>
            <MyFavoritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tour-requests",
        element: (
          <PrivateRoute roles={config.pageRoles.myFavorites}>
            <MyTourRequestPage />
          </PrivateRoute>
        ),
      },
      {
        path: ":slug",
        element: <AdvertDetailPage />,
      },
      {
        path: "tour-request-details",
        element: <TourRequestDetailsPage />,
      },
      {
        path: "/ad",
        element: (
          <PrivateRoute roles={config.pageRoles.myAdverts}>
            <NewAdvertPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/ad/edit",
        element: (
          <PrivateRoute roles={config.pageRoles.myAdverts}>
            <EditAdvertPage />
          </PrivateRoute>
        ),

      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute roles={config.pageRoles.dashboard}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
