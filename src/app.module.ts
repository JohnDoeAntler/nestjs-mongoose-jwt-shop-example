import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { MerchantsModule } from './merchants/merchants.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { SellablesModule } from './sellables/sellables.module';
import { MerchandisesModule } from './merchandises/merchandises.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderMerchandisesModule } from './order-merchandises/order-merchandises.module';
import { OrderAccessoriesModule } from './order-accessories/order-accessories.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { CommentsModule } from './comments/comments.module';
import { DiscountsModule } from './discounts/discounts.module';
import { DiscountMerchantsModule } from './discount-merchants/discount-merchants.module';
import { DiscountProductsModule } from './discount-products/discount-products.module';
import { DiscountSellablesModule } from './discount-sellables/discount-sellables.module';
import { CouponsModule } from './coupons/coupons.module';
import { CouponActivationsModule } from './coupon-activations/coupon-activations.module';
import { SpecialOffersModule } from './special-offers/special-offers.module';
import { MembershipsModule } from './memberships/memberships.module';
import { RequestTermsModule } from './request-terms/request-terms.module';
import { RequestsModule } from './requests/requests.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { HashModule } from './hash/hash.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  // mongodb
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/nest'),
    AccountsModule,
    CustomersModule,
    ProductsModule,
    MerchantsModule,
    AdministratorsModule,
    SellablesModule,
    MerchandisesModule,
    AccessoriesModule,
    OrdersModule,
    OrderMerchandisesModule,
    OrderAccessoriesModule,
    BookmarksModule,
    CommentsModule,
    DiscountsModule,
    DiscountMerchantsModule,
    DiscountProductsModule,
    DiscountSellablesModule,
    CouponsModule,
    CouponActivationsModule,
    SpecialOffersModule,
    MembershipsModule,
    RequestTermsModule,
    RequestsModule,
    AuthModule,
    HashModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
