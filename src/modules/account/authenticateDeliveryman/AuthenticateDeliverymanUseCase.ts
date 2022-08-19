import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from 'jsonwebtoken';

interface IUserAuthenticateDeliveryman {
  username: string;
  password: string;
}


class AuthenticateDeliverymanUseCase {

  async execute({ password, username }: IUserAuthenticateDeliveryman) {


    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: username,
      }
    });

    if (!deliveryman) {
      throw new Error("Entregador ou senha incorreto.")
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Entregador ou senha incorreto.")
    }

    const token = sign({ username }, process.env.SECRET_TOKEN_DELIVERYMAN || "", {
      subject: deliveryman.id.toString(),
      expiresIn: "1d",
    });

    return {
      deliveryman: {
        username: username,
      },
      token,

    };

  }
}

export { AuthenticateDeliverymanUseCase };