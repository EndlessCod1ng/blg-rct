import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/shared/config/i18n/i18n";
import { App } from "./app/App";

import "./app/styles/index.scss";

import { ThemeProvider } from "./app/providers/ThemeProvider/ThemeProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/ui/ErrorBoundary";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
