import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthSessionService } from "./authSession.service";
import { AuthSessionControllerBase } from "./base/authSession.controller.base";

@swagger.ApiTags("authSessions")
@common.Controller("authSessions")
export class AuthSessionController extends AuthSessionControllerBase {
  constructor(
    protected readonly service: AuthSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
