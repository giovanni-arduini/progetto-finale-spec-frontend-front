import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function DefaultLayout() {
  return (
    <div className="bg-zinc-200">
      <Header />
      <main className="w-[1200] max-w-full m-auto p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
