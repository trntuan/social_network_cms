// eslint-disable-next-line import/no-cycle
import { postApi } from "src/api/method";

class AuthService {
    // eslint-disable-next-line class-methods-use-this
    async login(queryParams) {
        const response = await postApi('auth/admin', queryParams);
        return response;
    }

    // eslint-disable-next-line class-methods-use-this
    async refresh(re_token) {
        const response = await postApi('auth/admin/refresh_token', {
            token: re_token
        });
        return response;
    }
}

export default new AuthService()