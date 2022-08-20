import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';


interface ICreateClient {
  username: string;
  password: string;
}


class CreateClientUseCase {

  async execute({ password, username }: ICreateClient) {

    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if (clientExist) {
      return new Error("Já existe um cliente com esse username");

    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return client;
  }
}

export { CreateClientUseCase };