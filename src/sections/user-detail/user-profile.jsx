import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card, Grid, Typography } from '@mui/material';

import UserCardPost from './user-card-post';

const UserProfile = ({ userInfo, posts }) => {
  const renderTotalFriend = (
    <Card
      spacing={2}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px 0',
      }}
    >
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }} noWrap>
        {userInfo?.friendCount}
      </Typography>

      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }} noWrap>
        Bạn bè
      </Typography>
    </Card>
  );

  const renderCardAbout = (
    <Card
      spacing={2}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        marginTop: '40px',
      }}
    >
      <Typography variant="h6" sx={{ textTransform: 'uppercase' }} noWrap>
        Giới thiệu
      </Typography>
      <Box display="flex" alignItems="center" mt={5} gap={2}>
        <Typography variant="subtitle2" noWrap>
          Tên:
        </Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }} noWrap>
          {userInfo?.user_display_name}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={2} gap={2}>
        <Typography variant="subtitle2" noWrap>
          Email:
        </Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 600 }} noWrap>
          {userInfo?.user_email}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={2} gap={2}>
        <Typography variant="subtitle2" noWrap>
          Địa điểm:
        </Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 600 }} noWrap>
          {userInfo?.user_location}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={2} gap={2}>
        <Typography variant="subtitle2" noWrap>
          Sở thích:
        </Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', fontWeight: 600 }} noWrap>
          {userInfo?.user_interests}
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        {renderTotalFriend}
        {renderCardAbout}
      </Grid>

      <Grid item xs={12} md={8}>

        {Array.isArray(posts) && posts.length > 0 && posts.map(post => (
            <UserCardPost key={post?.post_post_id} post={post} />
        ))}        
      </Grid>
    </Grid>
  );
};

UserProfile.propTypes = {
  userInfo: PropTypes.object.isRequired,
  posts: PropTypes.array
};

export default UserProfile;
