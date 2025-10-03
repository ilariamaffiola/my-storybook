/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vutejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTest.ts",
        include: ["src/**/*./test.{js,ts,tsx}"],
    },
});

