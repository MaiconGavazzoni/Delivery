import cors from "cors";
import { routes } from './routes';
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";



const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

//Mensagem de erro customizada
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: "error",
    message: 'Internal server error',
  });

})

app.listen(process.env.PORT || 3000, () => console.log('listening on port 3000 http://localhost:3000'));