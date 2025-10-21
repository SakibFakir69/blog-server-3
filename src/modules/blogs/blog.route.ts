import { Router } from "express";
import { blogController } from "./blog.controller";
import { verifyToken } from "../../middleware/verifyToken";



const route = Router();



route.post('/create-blog',verifyToken, blogController.createBlog);
route.get('/all-blog', blogController.allBlog);
route.put('/update-blog',blogController.updateBlog);
route.get('/:id' , blogController.singleBlog)
route.delete('/:id', blogController.deleteBlog);


// update , allblog 
// find by email => 
// auth start project 



export const blogRouter = route;