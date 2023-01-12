// 1. Import the module // and the pages
import { createRouter, createWebHistory } from "vue-router";
import HomeApp from "@/views/Home.vue";
import TemplateManipulations from "@/views/TemplateManipulations.vue";
import ScriptManipulations from "@/views/ScriptManipulations.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: HomeApp },
  { path: "/template", component: TemplateManipulations },
  { path: "/script", component: ScriptManipulations },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
