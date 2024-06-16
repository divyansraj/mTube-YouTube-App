import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import Shimmer from "./components/Shimmer"; // Placeholder component while loading

// Lazy-loaded components
const Body = React.lazy(() => import("./components/Body"));
const VideoContainer = React.lazy(() => import("./components/VideoContainer"));
const Watchpage = React.lazy(() => import("./components/WatchPage,"));
const SearchPage = React.lazy(() => import("./components/SearchPage"));

function App() {
  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Shimmer />}>
          <Body />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Shimmer />}>
              <VideoContainer />
            </Suspense>
          ),
        },
        {
          path: "watch",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Watchpage />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<Shimmer />}>
              <SearchPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appLayout} />
    </Provider>
  );
}

export default App;
