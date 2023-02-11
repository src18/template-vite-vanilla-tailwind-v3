
import { useState, useEffect } from "../../lib";


const adminProjects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const projects = JSON.parse(localStorage.getItem("projects")) || [];
      setData(projects);
    }, []);
    useEffect(() => {
    const btns = document.querySelectorAll('.btn')
    for (let btn of btns) {
        const id = btn.dataset.id;
        btn.addEventListener('click', () => {
            const newProjects = data.filter((project) => project.id != id);
            localStorage.setItem("projects", JSON.stringify(newProjects));
            setData(newProjects);
        });
    }
})
    return `<table class="table table-bordered">
    <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th><a href="/admin/add">add</a></th>
        </tr>
    </thead>
    <tbody>
        
        ${data.map(
        (list, index) =>
            `<tr>
                <td>${index + 1}</td>
                <td>${list.name}</td>
                <td><button id="cc"data-id="${list.id}"class="btn btn-remove btn-danger">Remove</button><a href="/admin/${list.id}/edit">update</a></td>
                </tr>`
        )}
        
    </tbody>
    
</table >`}
export default adminProjects;