export class CreateMerchantDto {

  username: string;

  password: string;

  nickname: string;

  phone?: string;

  email?: string;

  imageUrl?: string;

  role?: string;

  membershipEnable: boolean;

  membershipFee?: number;

}
