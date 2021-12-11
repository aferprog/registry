import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/login/rolesEnam';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
