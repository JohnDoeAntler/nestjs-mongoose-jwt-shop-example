import { SellableStatus } from "src/enums/sellable";

export class CreateAccessoryDto {

    product: string;

    name: string;

    description: string;
    
    price: number;

    imageUrl: string;

    status: SellableStatus;

    kind: String;

}

