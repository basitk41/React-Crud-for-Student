import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("app")).render(<App text="Props passed." />);
