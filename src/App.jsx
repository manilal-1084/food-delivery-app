import "./App.css"
import AppLayout from "./components/AppLayout";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";

import { RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )

}
const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/",
          element: <About/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ],
      errorElement: <Error /> 
  },
  
])

export default App;