import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CompareTab from "../Components/CompareTab";

export default function DefaultLayout() {
  return (
    <div className="bg-zinc-200">
      <Header />
      <main className="w-[1200] max-w-full m-auto p-5">
        <Outlet />
        <CompareTab />
      </main>
      <Footer />
    </div>
  );
}
