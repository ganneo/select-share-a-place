import ProjectInput from "./model/ProjectInput";
import ProjectList from "./model/ProjectList";
import ProjectManager from "./state/ProjectManager";
import { ProjectType } from "./state/ProjectType";

const prjManager = ProjectManager.getManager();
new ProjectInput(prjManager);
new ProjectList(ProjectType.ACTIVE, prjManager);
new ProjectList(ProjectType.FINISHED, prjManager);
