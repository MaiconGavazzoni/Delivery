import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}
interface RequestProp extends Request {
  id_client: number;
}

export async function ensureAuthenticateClient(request: RequestProp, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;


  if (!authHeader) {
    return response.status(401).json({ message: "Token expirado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET_TOKEN_CLIENT || "") as IPayload;
    request.id_client = parseInt(sub);

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Token inválido!" });
  }

}

