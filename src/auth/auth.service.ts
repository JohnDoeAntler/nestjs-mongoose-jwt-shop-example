import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Account, AccountDocument } from 'src/accounts/schemas/account.schema';
import { HashService } from 'src/hash/hash.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Account.name) private readonly accountModel: Model<AccountDocument>,
        private readonly jwtService: JwtService,
        private readonly hashService: HashService,
    ) {}

    async validate(username: string, password: string) {
        const ret = await this.accountModel.findOne({ username }).lean();
        if (ret && this.hashService.compare(password, ret.password)) {
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
}