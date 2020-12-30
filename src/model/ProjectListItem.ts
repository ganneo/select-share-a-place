import { AutoBind } from "../util/Decorators";
import Component from "./Component";
import Project from "./Project";

export default class ProjectListItem extends Component<
  HTMLUListElement,
  HTMLLIElement
> {
  constructor(private hostId: string, private project: Project) {
    super("project-list-item-template", hostId, "afterbegin");

    this.element.querySelector("h3")!.textContent = project.title;
    this.element.querySelector(
      "h4"
    )!.textContent = project.numPeople.toString();
    this.element.querySelector("p")!.textContent = project.description;
  }

  protected configure(): void {
    this.element.addEventListener("dragstart", this.transferPrjId);
  }

  @AutoBind
  private transferPrjId(e: DragEvent) {
    e.dataTransfer!.setData("text/plain", this.project.id.toString());
    e.dataTransfer!.effectAllowed = "move";
  }
}
