import { Injectable } from "@nestjs/common";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { ConfigService } from "@nestjs/config";
import { Auth0User } from "./base/User";
import { IAuthStrategy } from "../IAuthStrategy";
import { UserInfo } from "../UserInfo";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase implements IAuthStrategy {
  constructor(
    protected readonly configService: ConfigService,
    protected readonly userService: UserService
  ) {
    super(configService, userService);
  }

  async validate(payload: { user: Auth0User }): Promise<UserInfo> {
    const validatedUser = await this.validateBase(payload);
    // If the entity is valid, return it
    if (validatedUser) {
      return validatedUser;
    }

    // Otherwise, make a new entity and return it
    const userFields = payload.user;
    const defaultData = {
      email: userFields.email,
      password: "admin",
      roles: ["user"],
      username: "admin",
    };

    const newUser = await this.userService.create({
      data: defaultData,
    });

    return { ...newUser, roles: newUser?.roles as string[] };
  }
}
