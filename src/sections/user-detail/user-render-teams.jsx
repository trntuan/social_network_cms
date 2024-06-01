import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid } from '@mui/material';

import UserTeamCard from './user-team-card';

// eslint-disable-next-line arrow-body-style
const UserRenderTeams = ({ teams }) => {
  return (
    <Grid container spacing={3}>
      {Array.isArray(teams) && teams.length > 0 ? (
        teams.map((team) => (
          <Grid item key={team.team_team_id} xs={12} sm={6} md={3}>
            <UserTeamCard team={team} />
          </Grid>
        ))
      ) : (
        <Box>Không có teams nào.</Box>
      )}
    </Grid>
  );
};

UserRenderTeams.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default UserRenderTeams;
