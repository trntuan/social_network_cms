import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Tab, Box, Tabs, Container, IconButton, Typography } from '@mui/material';

import useAppDispatch from 'src/hooks/useDispatch';
import useStoreSelector from 'src/hooks/useStoreSelector';

import { getUserPost, getUserTeams, getUserDetail, getUserFriends } from 'src/providers/redux/users/Thunk';

import UserFriends from '../user-friend';
import UserProfile from '../user-profile';
import UserCardHero from '../user-card-hero';
import UserRenderTeams from '../user-render-teams';

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

function CustomTabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const UserDetailView = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [value, setValue] = React.useState(0);
  const dispatch = useAppDispatch();
  const { userState } = useStoreSelector();

  const { userDetail, posts, teams, friends } = userState;

  useEffect(() => {
    dispatch(
      getUserDetail({
        id: userId,
      })
    );
    dispatch(getUserPost({
      user_id: userId,
      page: 4,
      pageSize: 30
    }))
    dispatch(getUserTeams({
      user_id: userId
    }))
    dispatch(getUserFriends({
      user_id: userId
    }))
  }, [dispatch, userId]);

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container>
      <Typography display="flex" alignItems="center" variant="h4" sx={{ mb: 5 }}>
        <IconButton
          size="large"
          onClick={() => {
            navigate(-1);
          }}
        >
          <EpBack />
        </IconButton>
        Thông tin
      </Typography>

      <UserCardHero
        userInfo={userDetail}
        renderTabs={
          <Tabs
            value={value}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Hồ sơ" {...a11yProps(0)} />
            <Tab label="Teams" {...a11yProps(1)} />
            <Tab label="Bạn bè" {...a11yProps(2)} />
          </Tabs>
        }
      />

      <CustomTabPanel value={value} index={0}>
        <UserProfile userInfo={userDetail} posts={posts} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UserRenderTeams teams={teams} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UserFriends members={friends} />
      </CustomTabPanel>
    </Container>
  );
};

export default UserDetailView;
