import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import CartForm from "./cartComponent/CartForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <CartPage />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todo",
    element: <Todolist />,
  },
  {
    path: "/cart",
    element: <CartForm />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>

    // <>
    //   <div>
    //     <iframe
    //       src="https://react.dev/reference/react/useRef"
    //       height="500px"
    //       width="500px"
    //       title="description"
    //       id="iframe"
    //     ></iframe>
    //   </div>
    // </>
  );
}

export default App;
