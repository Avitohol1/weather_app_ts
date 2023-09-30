/// <reference types="vitest/globals" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["react-pure-carousel"],
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
})
