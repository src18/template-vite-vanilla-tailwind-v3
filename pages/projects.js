import projectsList from '../components/ProjectsList';
import header from "../components/header";
const projectsPage = () => `${header()} <h1>Projects page</h1> 
    <div>
        ${projectsList()}
    </div>`
export default projectsPage;
