import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Quản lý bài Viết </title>
      </Helmet>

      <BlogView />
    </>
  );
}
