import React from 'react';
import PropTypes from 'prop-types';

import { Box, Avatar, Typography } from '@mui/material';

import { fImage } from 'src/utils/format-image';

const BlogContent = ({ content, author }) => (
  <Box mt={5}>
    <Box display="flex" alignItems="center" gap={2} mb={5}>
      <Avatar alt={author.name} src={fImage(author.avatar)} sx={{ width: 56, height: 56 }} />
      <Typography variant="h5" gutterBottom>
        {author.name}
      </Typography>
    </Box>
    <Typography variant="subtitle1" gutterBottom>
      {content}
    </Typography>
  </Box>
);

BlogContent.propTypes = {
  content: PropTypes.any,
  author: PropTypes.object,
};

export default BlogContent;
