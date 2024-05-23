import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';

// import { fImage } from 'src/utils/format-image';

// import Label from 'src/components/label';
// import { fCurrency } from 'src/utils/format-number';
// import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export function TablerUser(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
      />
    </svg>
  );
}

export default function ShopProductCard({ team }) {
  const navigate = useNavigate();
  // const renderStatus = (
  //   <Label
  //     variant="filled"
  //     color={(team.status === 'sale' && 'error') || 'info'}
  //     sx={{
  //       zIndex: 9,
  //       top: 16,
  //       right: 16,
  //       position: 'absolute',
  //       textTransform: 'uppercase',
  //     }}
  //   >
  //     {team.status}
  //   </Label>
  // );

  const renderImg = (
    <Box
      component="img"
      alt={team.team_team_name}
      src="https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg"
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = <Typography variant="subtitle1">{team.memberCount}</Typography>;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {team.status && renderStatus} */}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Tooltip title={team.team_team_name}>
          <Link
            color="inherit"
            underline="hover"
            variant="subtitle2"
            noWrap
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate(`/teams/${team?.team_team_id}`);
            }}
          >
            {team.team_team_name}
          </Link>
        </Tooltip>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={team.colors} /> */}

          <Box display="flex" alignItems="center" gap={1}>
            <TablerUser />
            {renderPrice}
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  team: PropTypes.object,
};
