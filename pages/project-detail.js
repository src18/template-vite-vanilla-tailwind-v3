import header from '../components/header'
import { projects } from '../data'
import {  router } from "../lib";
const projectDetail = ({ data: { id }}) => {
    const curentProjects = projects.find(project => project.id == id);
    if (!curentProjects) return router.navigate("/projects");
    return `${header()} 
    <h1>project detail</h1> 
        <div class = 'project-detail'>
            ${curentProjects.name}
        </div>
        <div>
            <h2>Teams</h2>
            ${curentProjects.teams}
        </div>`
        
}
export default projectDetail;