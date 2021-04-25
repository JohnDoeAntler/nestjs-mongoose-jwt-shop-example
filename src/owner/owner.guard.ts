import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Administrator } from 'src/accounts/schemas/administrator.schema';
import { Customer } from 'src/accounts/schemas/customer.schema';
import { Merchant } from 'src/accounts/schemas/merchant.schema';

@Injectable()
export class OwnerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest();

    if (!req.user) {
      return false;
    }

    if (req.user.role === Customer.name) {
      return req.body.customer === req.user._id;
    } else if (req.user.role === Merchant.name) {
      return req.body.merchant === req.user._id;
    } else if (req.user.role === Administrator.name) {
      return req.body.administrator === req.user._id;
    }
  }
}
