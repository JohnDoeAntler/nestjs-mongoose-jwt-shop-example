import { Module } from '@nestjs/common';
import { RequestTermsService } from './request-terms.service';
import { RequestTermsController } from './request-terms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestTerm, RequestTermSchema } from './schemas/request-term.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RequestTerm.name, schema: RequestTermSchema }])],
  controllers: [RequestTermsController],
  providers: [RequestTermsService]
})
export class RequestTermsModule {}
