import PropTypes from 'prop-types';

import { Box } from '@mui/material';

export default function ProductCardHero({ product }) {
  const renderImg = (
    <Box
      component="img"
      alt=""
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

  return (
    <Box sx={{ pt: '100%', position: 'relative' }}>
      {/* {team.status && renderStatus} */}

      {renderImg}
    </Box>
  );
}

ProductCardHero.propTypes = {
  product: PropTypes.object,
};
