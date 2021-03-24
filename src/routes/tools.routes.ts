import { Router } from "express";
import CreateToolService from "../services/CreateToolService";

const toolsRouter = Router();
const createToolService = new CreateToolService();

toolsRouter.get("/", (request, response) => {
  return response.json({ message: "Tools will be here " });
});

toolsRouter.post("/", async (request, response) => {
  const { title, link, description, tags } = request.body;

  const tool = await createToolService.execute({
    title,
    link,
    description,
    tags,
  });

  return response.status(201).json(tool);
});

export default toolsRouter;
