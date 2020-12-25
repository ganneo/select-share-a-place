import Observer from "../state/Observer.js"
import ProjectManager from "../state/ProjectManager.js"
import { ProjectType } from "../state/ProjectType.js"
import Component from "./Component.js"
import Project from "./Project.js"
import ProjectListItem from "./ProjectListItem.js"

export default class ProjectList extends Component<HTMLDivElement, HTMLElement> implements Observer {
    private ulId: string
    private ulEle: HTMLUListElement

    constructor(private projectType: ProjectType, private manager: ProjectManager) {
        super('project-list-template', 'app', 'beforeend')

        this.element.querySelector('h2')!.textContent = this.projectType.toString().toUpperCase()
        this.ulEle = this.element.querySelector('ul')! as HTMLUListElement
        this.ulEle!.id = this.projectType.toString()
        this.ulId = this.projectType.toString()
        this.register()
    }

    protected configure() {}

    private register() {
        this.manager.register(this)
    }

    observe(prjs: Project[]): void {
        this.ulEle.innerHTML = ''
        prjs.forEach(prj => {
            new ProjectListItem(this.ulId, prj)
        })
    }
}
