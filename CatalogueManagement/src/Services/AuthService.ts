import {ApiDetails} from '../Constants/ApiDetails';
import Http from './HttpService';

class AuthService {
  public static async signIn(data: {email: string; password: string}) {
    const url = `${ApiDetails.SIGN_IN}`;
    const response = await Http.post(url, data);
    return response;
  }
}

export default AuthService;
