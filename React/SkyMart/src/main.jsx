import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContex.jsx";
import { Slide, ToastContainer } from "react-toastify";
import { MainProvider } from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MainProvider>
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
    </MainProvider>
  </AuthProvider>,
);
