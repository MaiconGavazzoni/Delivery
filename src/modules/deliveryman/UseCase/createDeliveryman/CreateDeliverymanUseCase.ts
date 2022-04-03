import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
  username: string;
  password: string;
}


class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {

    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if (deliverymanExist) {
      throw new Error("Já existe um entregador com esse username");

    }

    const hashPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };