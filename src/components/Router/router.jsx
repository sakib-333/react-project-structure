import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import PageNotFound from "../PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
  },
]);
