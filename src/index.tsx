import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { heroesLoader, heroLoader, heroesPageLoader, heroesSearchLoader } from "./services/api";
import ErrorPage from "./error-page";
import Heroes from "./routes/heroes";
import Hero from "./routes/hero";
import Search from "./routes/search";
import Root from "./routes/root";
import 'normalize.css';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Root />}>
      <Route
        element={<Search />}
        path="/"
      />
      <Route
        element={<Hero />}
        loader={heroLoader}
        path="/hero/:heroid"
      />
      <Route
        element={<Heroes />}
        loader={heroesLoader}
        path="/listing"
      />
      <Route
        element={<Heroes />}
        loader={heroesPageLoader}
        path="/listing/page/:page"
      />
      <Route
        element={<Heroes />}
        loader={({ params }) => heroesSearchLoader({ params })}
        path="/search/:urlParams"
      />
      <Route
        element={<Heroes />}
        loader={({ params }) => heroesSearchLoader({ params })}
        path="/search/:urlParams/page/:page"
      />
      <Route
        element={<ErrorPage />}
        path="*"
      />
    </Route>
  ]))

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);