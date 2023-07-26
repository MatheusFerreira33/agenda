import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import {PrismaModule} from '../prisma/prisma.module';
import { AuthController } from "./auth.controllers";
import { AuthService } from "./auth.service";
import {CheckToken} from '../middlewares/users.middlewares';

@Module({
    imports:[JwtModule.register({secret:'pF4ptxHdmBru5BcQr92NT6LMsPGwqQNN'}), PrismaModule],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(CheckToken)
        .forRoutes({path:'auth/user', method: RequestMethod.GET},
        {path:'auth/user', method: RequestMethod.PATCH},
        {path:'auth/user', method: RequestMethod.DELETE});
    }
}