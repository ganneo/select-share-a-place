import Observer from "../state/Observer.js"
import ProjectManager from "../state/ProjectManager.js"
import { ProjectType } from "../state/ProjectType.js"
import { AutoBind } from "../util/Decorators.js"
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

    protected configure() {
        this.element.addEventListener('dragover', this.makeDroppable)
        this.element.addEventListener('dragleave', this.outOfDragover)
        this.element.addEventListener('drop', this.dropPrj)
    }

    @AutoBind
    private makeDroppable(e: DragEvent) {
        if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
            this.element.style.color = 'red'
            e.preventDefault()
        }
    }

    @AutoBind
    private outOfDragover() {
        this.element.style.color = 'black'
    }

    @AutoBind
    private dropPrj(e: DragEvent) {
        this.element.style.color = 'black'
        const prjId = e.dataTransfer!.getData('text/plain')
        this.manager.updatePrj(+prjId, this.projectType)
    }

    private register() {
        this.manager.register(this)
    }

    observe(prjs: Project[]): void {
        this.ulEle.innerHTML = ''
        prjs.filter(prj => prj.type === this.projectType).forEach((prj) => {
            new ProjectListItem(this.ulId, prj)
        })
    }
}
