import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtservice;
    constructor(jwtservice: JwtService);
    login(credenciales: LoginAuthDto): {
        token: string;
    };
}
