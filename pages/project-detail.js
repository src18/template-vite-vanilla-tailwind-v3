import header from '../components/header'
import {projects} from '../data'
const projectDetail = () => `${header()} <h1>project detail</h1> 
<div class = 'project-detail'>
    ${projects[0].id}: ${projects[0].name};
    
</div>`;
console.log(projects);
export default projectDetail;