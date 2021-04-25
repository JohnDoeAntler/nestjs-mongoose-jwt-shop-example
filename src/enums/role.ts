import { Administrator } from "src/accounts/schemas/administrator.schema";
import { Customer } from "src/accounts/schemas/customer.schema";
import { Merchant } from "src/accounts/schemas/merchant.schema";

export enum Role {
    CUSTOMER = "Customer",
    MERCHANT = "Merchant",
    ADMINISTRATOR = "Administrator",
}