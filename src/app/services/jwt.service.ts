import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class JwtServices {
  constructor() {}

  jwtTokenDecode(token: string) {
    try {
      const decodedToken = jwt_decode.jwtDecode(token);
      console.log('decodeToken', decodedToken);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
