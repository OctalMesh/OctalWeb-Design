import { AppProvider } from "@app/providers";
import { AppRouter } from "@app/router";

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
