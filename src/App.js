import "./App.scss";
import Home from "./components/pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DarkThemeProvider from "./store/theme-provider";
import homeLoader from "./store/loader/homeLoader";
import Blogs from "./components/pages/Blogs/Blogs";
import ErrorBoundary from "./components/pages/Error/ErrorBoundary";
import ComingSoon from "./components/pages/ComingSoon/ComingSoon";

const router = createBrowserRouter([
    {
        path: "/",
        id:"home",
        errorElement:<ErrorBoundary />,
        children:[
            {
                path:"/",
                root:true,
                loader:homeLoader,
                element: <Home />,
            },
            {
                path: "/blogs",
                id:"blogs",
                element: < Blogs/>,
            },
            {
                path: "/projects",
                id:"projects",
                element: <ComingSoon/>,
            }
        ]
    },
]);

function App() {
    return (
      <DarkThemeProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </DarkThemeProvider>
    );
}

export default App;
