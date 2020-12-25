import ProjectInput from "./model/ProjectInput.js";
import ProjectList from "./model/ProjectList.js";
import ProjectManager from "./state/ProjectManager.js";
import { ProjectType } from "./state/ProjectType.js";

const prjManager = ProjectManager.getManager();
new ProjectInput(prjManager);
new ProjectList(ProjectType.ACTIVE, prjManager)
new ProjectList(ProjectType.FINISHED, prjManager)