import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="global-toast"
        progressClassName="global-progress"
      />
      <div className="flex flex-col">
        <div className="">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
