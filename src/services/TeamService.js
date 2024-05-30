//

import { getApi } from 'src/api/method';

class TeamService {
  // eslint-disable-next-line class-methods-use-this
  async getAllTeams(queryParams) {
    const response = await getApi('team/all', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getDetailTeam(queryParams) {
    const response = await getApi('team/detail', queryParams);
    return response;
  }

    // eslint-disable-next-line class-methods-use-this
    async getTeamPosts(queryParams) {
      const response = await getApi('post/all_posts', queryParams);
      return response;
    }
}

export default new TeamService();
