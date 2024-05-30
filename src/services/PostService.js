//

import { getApi } from 'src/api/method';

class PostService {
  // eslint-disable-next-line class-methods-use-this
  async getAllPost(queryParams) {
    const response = await getApi('post/all_posts', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getDetailPost(queryParams) {
    const response = await getApi('post/detail', queryParams);
    return response;
  }

  // eslint-disable-next-line class-methods-use-this
  async getComments(queryParams) {
    const response = await getApi('post/comment_list', queryParams);
    return response;
  }
}

export default new PostService();
