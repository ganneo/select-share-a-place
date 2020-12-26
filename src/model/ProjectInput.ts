import ProjectManager from "../state/ProjectManager.js";
import { ProjectType } from "../state/ProjectType.js";
import { AutoBind } from "../util/Decorators.js";
import Component from "./Component.js";
import Project from "./Project.js";

export default class ProjectInput extends Component<HTMLDivElement, HTMLElement> {
  private titleInput!: HTMLInputElement;
  private descriptionTextArea!: HTMLTextAreaElement;
  private numPeopleInput!: HTMLInputElement;
  private btn!: HTMLButtonElement;

  constructor(private projectManager: ProjectManager) {
    super('project-input-template', 'app', 'afterbegin')
  }
  
  protected configure() {
    const inputs = this.element.querySelectorAll("input");
    this.titleInput = inputs[0];
    this.descriptionTextArea = this.element.querySelector(
      "textarea"
    )! as HTMLTextAreaElement;
    this.numPeopleInput = inputs[1];
    this.btn = this.element.querySelector("button")! as HTMLButtonElement;

    this.btn.addEventListener("click", this.createProject);
  }

  @AutoBind
  private createProject(e: Event) {
    e.preventDefault();

    const project = new Project(
      this.titleInput.value,
      this.descriptionTextArea.value,
      +this.numPeopleInput.value,
      ProjectType.ACTIVE
    );

    this.projectManager.addPrj(project);
    this.titleInput.value = ''
    this.descriptionTextArea.value = ''
    this.numPeopleInput.value = ''
  }
}
