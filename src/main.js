import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homePage from "../pages/home";
import postPage from "../pages/post";
import projects from "../pages/projects";
import contact from "../pages/contact";
import { router, render, useState, useEffect } from "../lib";
import projectDetail from "../pages/project-detail";
import notFound from "../pages/notFound";
import adminProjects from "../pages/admin/adminProjects";
import AdminEditProjectPage from "../pages/admin/projects-edit";
import AdminAddProjectPage from "../pages/admin/projects-add";

const app = document.querySelector("#app");
router.on("/", () => render(homePage, app));
router.on("/post", () => render(postPage, app));
router.on("/projects", () => render(projects, app));
router.on("/contact", () => render(contact, app));
router.on("/project-detail/:id", ({ data: { id } }) =>
  render(() => projectDetail(id), app)
);
router.notFound(render(notFound, app));
//admin
router.on("/admin/projects", () => render(adminProjects, app));
router.on("/admin/add", () => render(AdminAddProjectPage, app));
router.on("/admin/:id/edit", ({ data: { id } }) =>
  render(() => AdminEditProjectPage(id), app)
);
router.resolve();
