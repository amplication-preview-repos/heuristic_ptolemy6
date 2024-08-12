import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthSessionServiceBase } from "./base/authSession.service.base";

@Injectable()
export class AuthSessionService extends AuthSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
