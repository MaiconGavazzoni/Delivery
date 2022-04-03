import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from 'jsonwebtoken';

interface IUserAuthenticateClient {
  username: string;
  password: string;
}


class AuthenticateClientUseCase {

  async execute({ password, username }: IUserAuthenticateClient) {


    const client = await prisma.clients.findFirst({
      where: {
        username: username,
      }
    });

    if (!client) {
      throw new Error("Usuario ou senha incorreto.")
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Usuario ou senha incorreto.")
    }

    const token = sign({ username }, process.env.SECRET_TOKEN_CLIENT, {
      subject: client.id.toString(),
      expiresIn: "1d",
    });

    return {
      client: {
        username: username,
      },
      token,

    };

  }
}

export { AuthenticateClientUseCase };