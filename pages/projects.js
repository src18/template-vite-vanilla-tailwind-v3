import { projects } from '../data'
import header from "../components/header";
const projectsPage = () => `${header()} <h1>Projects page</h1> 
    <div class="projects">
        ${projects.map((project) => {
            return `<div class="project-item">
                        <a href="/project-detail/${project.id}">${project.name}</a>
                    </div>`;
        })
        .join("")}
    </div>`;

export default projectsPage;
