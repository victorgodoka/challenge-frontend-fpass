import { Outlet, useLoaderData } from "react-router-dom";
import Navigation from "../components/navigation";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
