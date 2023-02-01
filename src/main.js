import './index.css'
import homePage from '../pages/home';
import postPage from '../pages/post';
import projects from '../pages/projects';
import contact from '../pages/contact';
import { router, render } from '../lib';
import projectDetail from '../pages/project-detail';
import notFound from '../pages/notFound';

const app = document.querySelector('#app');
router.on("/", () => render(homePage, app));
router.on("/post", () => render(postPage, app));
router.on("/projects", () => render(projects, app));
router.on("/contact", () => render(contact, app));
router.on("/project-detail/:id", ({data: {id}}) => render(() => projectDetail(id), app));
router.notFound(render(notFound, app));
router.resolve();