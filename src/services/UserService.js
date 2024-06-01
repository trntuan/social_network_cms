//

import { getApi } from 'src/api/method';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getAllUsers(queryParams) {
    const response = await getApi('user/user_list', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserDetail(queryParams) {
    const response = await getApi('user/user_detail', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserPost(queryParams) {
    const response = await getApi('post/all_posts', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserPostComment(queryParams) {
    const response = await getApi('post/comment_list', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserTeams(queryParams) {
    const response = await getApi('team/my_teams_user', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserFriends(queryParams) {
    const response = await getApi('user/friend_list', queryParams);
    return response;
  }
}

export default new UserService();
