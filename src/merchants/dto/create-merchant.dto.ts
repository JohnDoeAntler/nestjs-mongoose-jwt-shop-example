export class CreateMerchantDto {

  username: string;

  password: string;

  nickname: string;

  phone?: string;

  email?: string;

  image_url?: string;

  role?: string;

  membership_enable: boolean;

  membership_fee?: number;

}
