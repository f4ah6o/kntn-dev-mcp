import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["tests/**/*.ts"],
		exclude: ["tests/**/*.d.ts", "node_modules/**/*"],
		environment: "node",
		reporters: ["default"],
		globals: false,
		coverage: {
			enabled: false,
		},
	},
});
