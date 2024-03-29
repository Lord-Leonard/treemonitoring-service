import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { ActivationController } from './activation/activation.controller';
import { ActivationService } from './activation/activation.service';
import { AdminController } from './admin/admin.controller';
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";
import { AppController } from "./controller/app.controller";
import { GeometryService } from './geometry/geometry.service';
import { LinkService } from "./link/link.service";
import { PasswordService } from './password/password.service';
import { PingModule } from "./ping/ping.module";
import { PingService } from "./ping/ping.service";
import { PlotsController } from './plots/plots.controller';
import { PlotsService } from './plots/plots.service';
import { PrismaService } from "./prisma/prisma.service";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";

@Module({
  imports: [
    AuthModule,
    UserModule,
    PingModule,
    ConfigModule.forRoot()
  ],
  controllers: [
    AppController,
    AdminController,
    ActivationController,
    PlotsController
  ],
  providers: [
    UserService,
    PrismaService,
    PingService,
    AuthService,
    JwtService,
    PasswordService,
    ActivationService,
    LinkService,
    PlotsService,
    GeometryService,
  ],
})
export class AppModule { }
