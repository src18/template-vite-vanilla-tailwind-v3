import { Menus } from "../data";
const navHeader = () => `${Menus.map((menu) => `<a href="${menu.path}">${menu.name}</a>`).join("")}`;

export default navHeader;