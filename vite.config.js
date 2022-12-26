import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    define: {
      global: {},
    },
    plugins: [react()],
})

//
//https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/