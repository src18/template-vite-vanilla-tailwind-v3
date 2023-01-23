import { projects } from "../data";
const projectsList = () => `<div class="projects">
        ${projects.map((project) => {
            return `<div class="project-item">
                        <a href="/project-detail/${project.id}">${project.name}</a>
                    </div>`
        })
        .join("")}
    </div>`;
export default projectsList;