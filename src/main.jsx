import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import "./index.css";
import NewPost, { action as savePost } from "./routes/NewPost.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: "/new",
            element: <NewPost />,
            action: savePost,
          },
          {
            path: "/posts/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
