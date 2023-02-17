import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
    // base: "/react-biker-web-practice",
    plugins: [react()],
    // server: { host: true },
    build: { outDir: "build" },
});
