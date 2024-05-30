import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import useAppDispatch from 'src/hooks/useDispatch';
import useStoreSelector from 'src/hooks/useStoreSelector';

import { getPostList } from 'src/providers/redux/posts/Thunk';

import PostCard from '../post-card';

// ----------------------------------------------------------------------

export default function BlogView() {
  const dispatch = useAppDispatch();
  const { postState } = useStoreSelector();
  const { posts } = postState;

  useEffect(() => {
    dispatch(
      getPostList({
        page: 4,
        pageSize: 30,
      })
    );
  }, [dispatch]);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Blog</Typography>
      </Stack>

      <Grid container spacing={3}>
        {Array.isArray(posts) &&
          posts.length > 0 &&
          posts.map((post, index) => <PostCard key={post.post_post_id} post={post} index={index} />)}
      </Grid>
    </Container>
  );
}
