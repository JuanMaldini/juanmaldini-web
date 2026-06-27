import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "@/features/about/AboutPage";

// Heavier routes are code-split so the landing page stays light.
// The printable CV pulls html2pdf/html2canvas only when visited.
const CurriculumPage = lazy(() => import("@/features/curriculum/CurriculumPage"));
const ResumeDocument = lazy(() => import("@/features/curriculum/ResumeDocument"));
const ProjectsPage = lazy(() => import("@/features/projects/ProjectsPage"));
const QrCodePage = lazy(() => import("@/features/qrcode/QrCodePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "curriculum", element: <CurriculumPage /> },
      { path: "curriculumweb", element: <ResumeDocument /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "qrcode", element: <QrCodePage /> },
    ],
  },
]);

export default router;
