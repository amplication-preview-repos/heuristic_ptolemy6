import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthSessionModuleBase } from "./base/authSession.module.base";
import { AuthSessionService } from "./authSession.service";
import { AuthSessionController } from "./authSession.controller";
import { AuthSessionResolver } from "./authSession.resolver";

@Module({
  imports: [AuthSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthSessionController],
  providers: [AuthSessionService, AuthSessionResolver],
  exports: [AuthSessionService],
})
export class AuthSessionModule {}
