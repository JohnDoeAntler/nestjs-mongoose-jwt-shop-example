import { RequestType } from "src/enums/request-kind";

export class CreateRequestTermDto {

    kind: RequestType;

    merchant: string;

    price: number;

    from: Date;

    to: Date;

}
