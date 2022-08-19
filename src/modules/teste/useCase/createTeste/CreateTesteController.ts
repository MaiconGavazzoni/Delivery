import { Request, Response } from 'express';



class CreateTesteController {
  async handle(request: Request, response: Response) {

    const result = {
      title: "Olá mundo"
    }

    return response.json(result);
  }
}

export { CreateTesteController };