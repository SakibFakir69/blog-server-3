import { Router } from "express";
import { projectController } from "./project.controller";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router();


router.post('/create-project' ,verifyToken, projectController.createProject)
router.put('/project-update', projectController.updateProject)
router.get('/all-project', projectController.allProject)

router.get('/:id', projectController.getByProjectID)
router.delete('/:id',verifyToken, projectController.deleteProject);
// all project
export const projectRouter = router;