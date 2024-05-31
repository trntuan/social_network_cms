import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Skeleton, Container, IconButton, Typography } from '@mui/material';

import useAppDispatch from 'src/hooks/useDispatch';
import useStoreSelector from 'src/hooks/useStoreSelector';

import { getPostDetail, getCommentDetail } from 'src/providers/redux/posts/Thunk';

import BlogContent from '../blog-content';
import BlogComment from '../blog-comment';
import BlogImageList from '../blog-images';

export function EpBack(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path fill="black" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
      <path
        fill="black"
        d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
      />
    </svg>
  );
}

const PostDetailView = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const dispatch = useAppDispatch();
  const { postState } = useStoreSelector();

  const { postDetail, isLoading, comments } = postState;

  console.log(comments);

  useEffect(() => {
    dispatch(
      getPostDetail({
        post_id: blogId,
      })
    );
    dispatch(
      getCommentDetail({
        post_id: blogId,
      })
    );
  }, [dispatch, blogId]);

  return (
    <Container>
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        variant="h4"
        sx={{ mb: 5 }}
      >
        <IconButton
          size="large"
          onClick={() => {
            navigate(-1);
          }}
        >
          <EpBack />
        </IconButton>
        Chi tiết bài viết
      </Typography>

      {/* Images blog detail render */}
      {isLoading ? (
        <Skeleton variant="rectangular" sx={{ width: '100%', height: 400 }} />
      ) : (
        <BlogImageList images={postDetail?.post_image_url} name={postDetail.post_content} />
      )}

      {/* Content blog render */}
      {!isLoading ? (
        <BlogContent
          content={postDetail?.post_content}
          author={{
            name: postDetail?.user_display_name,
            avatar: postDetail?.user_avatar,
          }}
        />
      ) : (
        <Box sx={{ pt: 0.5 }} mt={5}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      )}

      {/* Comment blog render */}
      <BlogComment comments={comments} />
    </Container>
  );
};

export default PostDetailView;
