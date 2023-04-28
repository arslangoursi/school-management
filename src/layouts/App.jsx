import { Head } from "@modules";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Head
        title="School-Management"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      <Outlet />
    </>
  );
}
