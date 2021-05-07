import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/accounts/schemas/account.schema';
import { HashService } from 'src/hash/hash.service';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Account.name) private readonly accountModel: Model<AccountDocument>,
        private readonly jwtService: JwtService,
        private readonly hashService: HashService,
    ) {}

    async validate(username: string, password: string) {
        const ret = await this.accountModel.findOne({ username }).lean();
        if (ret && await this.hashService.compare(password, ret.password)) {
            const { password, ...result } = ret;
            return result;
        }
        return null;
    }

    async login(user: any) {
        return {
            access_token: this.jwtService.sign(user),
        };
    }

    async changePassword(
        user: any,
        changePasswordDto: ChangePasswordDto,
    ) {
        const ret = await this.accountModel.findById(user._id);

        if (ret && await this.hashService.compare(changePasswordDto.current_password, ret.password)) {
            return await ret.update({
                password: await this.hashService.hash(changePasswordDto.new_password),
            }).lean();
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'password mismatch',
            }, HttpStatus.FORBIDDEN);
        }
    }

}