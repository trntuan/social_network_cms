import { postApi } from "src/api/method";

class AuthService {
    // eslint-disable-next-line class-methods-use-this
    async login(queryParams) {
        const response = await postApi('auth/admin', queryParams);
        return response;
    }
}

export default new AuthService()