import { Helmet } from 'react-helmet-async';

import { BlogDetailView } from 'src/sections/blog-detail/views';

// ----------------------------------------------------------------------

export default function TeamsPage() {
  return (
    <>
      <Helmet>
        <title> Chi tiết bài viết</title>
      </Helmet>

      <BlogDetailView />
    </>
  );
}