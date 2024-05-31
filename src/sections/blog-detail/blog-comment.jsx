import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, Paper, Avatar, Divider, Typography } from '@mui/material';

import { fImage } from 'src/utils/format-image';
import { fMinute } from 'src/utils/format-time';

const BlogComment = ({ comments }) => (
  <Box mt={4}>
    <Typography variant="h3" gutterBottom>
      Bình luận
    </Typography>
    <Paper sx={{ padding: '40px 20px' }}>
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((comment) => (
          <Grid key={comment?.comments_comment_id} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt={comment?.user_display_name} src={fImage(comment?.user_avatar)} />
            </Grid>

            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: 'left' }}>{comment?.user_display_name}</h4>
              <p style={{ textAlign: 'left' }}>
               { comment?.comments_content }
              </p>
              <p style={{ textAlign: 'left', color: 'gray' }}>{fMinute(comment?.comments_created_date)}</p>
            </Grid>

            <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
          </Grid>
        ))
      ) : (
        <Typography variant="subtitle1" gutterBottom>
          Không có bình luận nào.
        </Typography>
      )}
    </Paper>
  </Box>
);

BlogComment.propTypes = {
  comments: PropTypes.array,
};
export default BlogComment;
