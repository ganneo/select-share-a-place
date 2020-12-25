import Component from "./Component.js";
import Project from "./Project.js";

export default class ProjectListItem extends Component<HTMLUListElement, HTMLLIElement>{
    constructor(private hostId: string, private project: Project) {
        super('project-list-item-template', hostId, 'afterbegin')

        this.element.querySelector('h3')!.textContent = project.title
        this.element.querySelector('h4')!.textContent = project.numPeople.toString()
        this.element.querySelector('p')!.textContent = project.description

    }

    protected configure(): void {
    }
}