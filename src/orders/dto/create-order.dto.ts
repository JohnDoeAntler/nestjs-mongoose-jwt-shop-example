import { OrderStatus } from "src/enums/order";

export class CreateOrderDto {

  customer: string;

  address1: string;

  address2: string;

  address3: string;

  address4: string;

  status: OrderStatus;

}
