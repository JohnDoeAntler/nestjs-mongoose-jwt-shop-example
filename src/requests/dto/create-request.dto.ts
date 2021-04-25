import { RequestType } from "src/enums/request-kind";

import { RequestStatus } from "src/enums/request-status";
export class CreateRequestDto {

    kind: RequestType;

    status: RequestStatus;

    requestTerm: string;

    customer: string;

    date: Date;

    remark: string;

    imageUrl?: string;

    address1: string;
    
    address2: string;

    address3: string;

    address4: string;

}
