import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Grid, Card, Container, IconButton, Typography } from '@mui/material';

import useAppDispatch from 'src/hooks/useDispatch';
import useStoreSelector from 'src/hooks/useStoreSelector';

import { getTeamDetail } from 'src/providers/redux/teams/Thunk';

import ProductInfor from '../product-info';
import ProductMember from '../product-members';
import ProductCardHero from '../product-cart-hero';

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
export default function ProductDetailView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { teamsState } = useStoreSelector();
  const { teamDetail } = teamsState;
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getTeamDetail(teamId));
  }, [dispatch, teamId]);

  return (
    teamDetail && (
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
          Chi tiết nhóm {teamDetail.team_name}
        </Typography>

        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <ProductCardHero product={teamDetail} />
            </Grid>
            <Grid item xs={12} sm={6} >
              <ProductInfor product={teamDetail} />
            </Grid>
          </Grid>
        </Card>
        <Box mt={5}>
          <ProductMember leaderId={teamDetail.creator_user_id} members={teamDetail.teamMembers} />
        </Box>
      </Container>
    )
  );
}
