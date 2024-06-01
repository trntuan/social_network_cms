import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Card,
  Grid,
  Link,
  Avatar,
  CardMedia,
  CardHeader,
  Typography,
  CardContent,
} from '@mui/material';

import { fImage } from 'src/utils/format-image';
import { fDate, fMinute } from 'src/utils/format-time';

const UserCardPost = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card  sx={{
        margin: '16px 0'
    }}>
      <CardHeader
        avatar={<Avatar alt={post?.user_display_name} src={fImage(post?.user_avatar)} />}
        title={post?.user_display_name}
        subheader={fDate(post?.post_created_date)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post?.post_content}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ borderRadius: '12px', cursor: 'pointer' }}
        height="380"
        image={fImage(post?.post_image_url[0]) || 'https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg'}
        alt="Paella dish"
        onClick={() => {
            navigate(`/blog/${post?.post_post_id}`);
        }}
      />
      <CardContent>
        {/* <Box display="flex" alignItems="center" mb={2}>
          <IconButton aria-label="add to favorites">Demo2</IconButton>
        </Box> */}
        <Grid container spacing={1} alignItems="center">
          {Array.isArray(post?.comments) &&
            post?.comments.length > 0 &&
            post?.comments?.map((comment, index) => (
              <Grid item xs={12} key={index}>
                <Box display="flex" alignItems="center">
                  <Avatar alt={comment?.user_display_name} src={fImage(post?.user_avatar)} />
                  <Box ml={2}>
                    <Typography variant="body2" component="p">
                      <Link
                        onClick={() => {
                          navigate(`/user/${comment?.user_user_id}`);
                        }}
                        sx={{
                          cursor: 'pointer',
                        }}
                        underline="hover"
                      >
                        {comment?.user_display_name}
                      </Link>{' '}
                      {comment?.comments_content}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {fMinute(comment?.comments_created_date)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CardContent>
      {/* <CardContent>
        <IconButton aria-label="share">Demo3</IconButton>
      </CardContent> */}
    </Card>
  );
};

UserCardPost.propTypes = {
  post: PropTypes.object,
};

export default UserCardPost;
