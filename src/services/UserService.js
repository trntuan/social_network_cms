//

import { getApi } from 'src/api/method';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getAllUsers(queryParams) {
    const response = await getApi('user/user_list', queryParams);
    return response;
  }
}

export default new UserService();
