import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Stack, Tooltip, Typography } from '@mui/material';

export default function ProductInfor({ product }) {
  const fields = useMemo(
    () => [
      { label: 'Tên nhóm', value: product.team_name },
      { label: 'Mô tả', value: product.description },
      {
        label: 'Trưởng nhóm',
        value: product.teamMembers.find((p) => p.user_id === product.creator_user_id)?.user
          .display_name,
      },
      { label: 'Số lượng', value: product.teamMembers.length },
    ],
    [product]
  );

  return (
    <Stack spacing={2} sx={{ p: 3 }}>
      {fields.map((field) => (
        <Stack
          key={field.label}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sx: 'center' }}
          gap={{ xs: 1, md: 4 }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 0, textTransform: 'uppercase', width: '40%', flexShrink: 0 }}
          >
            {field.label}:
          </Typography>
          <Tooltip title={field.value}>
            <Typography variant="subtitle1" sx={{ mb: 0, textTransform: 'uppercase' }}>
              {field.value}
            </Typography>
          </Tooltip>
        </Stack>
      ))}
    </Stack>
  );
}

ProductInfor.propTypes = {
  product: PropTypes.object,
};
