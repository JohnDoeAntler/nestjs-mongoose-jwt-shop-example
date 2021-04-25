import { Injectable } from '@nestjs/common';
import { hash, compare, genSaltSync } from 'bcrypt';
import { hashSalt } from './constants';

@Injectable()
export class HashService {

    hash (str: string) {
        return hash(str, hashSalt);
    }

    compare(raw: string, hashed: string) {
        return compare(raw, hashed);
    }

}
