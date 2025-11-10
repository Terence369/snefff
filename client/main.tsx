import { createRoot, type Root } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    __app_root__?: Root;
  }
}

const container = document.getElementById("root")!;
if (!window.__app_root__) {
  window.__app_root__ = createRoot(container);
}
window.__app_root__!.render(<App />);
