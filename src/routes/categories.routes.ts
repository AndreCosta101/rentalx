import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
    id: uuidV4()
  }

  categories.push(category);
  console.log(categories)

  return response.status(201).send();
})

export { categoriesRoutes };