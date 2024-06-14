import { defineConfig } from "cypress";
import { reesed } from "./cypress/task/reseed";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3100",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        reseed: reesed,
      });
    },
  },
});
