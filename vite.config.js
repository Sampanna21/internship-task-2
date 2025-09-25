import { defineConfig } from "vite";
import handlebars from "@vituum/vite-plugin-handlebars";
import path from "path";

export default defineConfig({
  plugins: [
    handlebars({
      partials: {
        directory: path.resolve(__dirname, "src/templates/_partials"),
        extname: ".hbs",
      },
      pages: {
        index: "src/templates/index.hbs",
        about: "src/templates/about.hbs",
        contact: "src/templates/contact.hbs",
        bacteria: "src/templates/bacteria.hbs",
        fungi: "src/templates/fungi.hbs",
        virus: "src/templates/virus.hbs",
        protozoa: "src/templates/protozoa.hbs",
      },
    }),
  ],
});
