import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center text-muted">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
