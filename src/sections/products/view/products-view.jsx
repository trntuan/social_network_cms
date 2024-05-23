import { useEffect } from 'react';

// import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import useAppDispatch from 'src/hooks/useDispatch';
import useStoreSelector from 'src/hooks/useStoreSelector';

import { getTeamsList } from 'src/providers/redux/teams/Thunk';

import ProductCard from '../product-card';
// import ProductCartWidget from '../product-cart-widget';
// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';


// ----------------------------------------------------------------------

export default function ProductsView() {
  const dispatch = useAppDispatch()
  const { teamsState } = useStoreSelector()

  const { teams } = teamsState;

  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  useEffect(() => {
    dispatch(getTeamsList())
  }, [dispatch])

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Quản lý nhóm
      </Typography>

      {/* <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack> */}

      <Grid container spacing={3}>
        {teams.map((team) => (
          <Grid key={team.team_team_id} xs={12} sm={6} md={3}>
            <ProductCard team={team} />
          </Grid>
        ))}
      </Grid>
{/* 
      <ProductCartWidget /> */}
    </Container>
  );
}
