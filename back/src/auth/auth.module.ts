import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import {PrismaModule} from '../prisma/prisma.module';
import { AuthController } from "./auth.controllers";
import { AuthService } from "./auth.service";

@Module({
    imports:[JwtModule.register({secret:'pF4ptxHdmBru5BcQr92NT6LMsPGwqQNN'}), PrismaModule],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule{}