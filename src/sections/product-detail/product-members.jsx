import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

import {
  Box,
  Grid,
  Card,
  Avatar,
  Popover,
  MenuItem,
  CardHeader,
  Typography,
  IconButton,
} from '@mui/material';

import { fImage } from 'src/utils/format-image';

import Iconify from 'src/components/iconify';

export default function ProductMember({ leaderId, members }) {
  const userLeader = useMemo(
    () => members.find((member) => member.user_id === leaderId),
    [members, leaderId]
  );

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 0, textTransform: 'uppercase' }}>
        Thành viên
      </Typography>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={6} sm={6} md={4}>
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
            <CardHeader
              sx={{
                width: '100%',
              }}
              avatar={
                <Avatar
                  alt=""
                  src={fImage(userLeader?.user?.avatar)}
                  sx={{ width: 56, height: 56 }}
                />
              }
              title={
                <Typography variant="subtitle2" noWrap sx={{ wordWrap: 'break-word' }}>
                  {userLeader?.user?.display_name}
                </Typography>
              }
              subheader={
                <Typography
                  variant="subtitle2"
                  color="#546e7a"
                  noWrap
                  sx={{ wordWrap: 'break-word' }}
                >
                  {userLeader?.user?.location}
                </Typography>
              }
            />
            <Typography
              variant="subtitle2"
              sx={{ textTransform: 'uppercase' }}
              color="#4fc3f7"
              noWrap
              mt={1}
            >
              {userLeader?.role?.role_name}
            </Typography>
          </Card>
        </Grid>
        {Array.isArray(members) &&
          members.length > 0 &&
          members
            .filter((m) => m.user_id !== leaderId)
            .map((member) => (
              <Grid key={member.user_id} item xs={6} sm={6} md={4}>
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
                  <CardHeader
                    sx={{
                      width: '100%',
                    }}
                    avatar={
                      <Avatar
                        alt=""
                        src={fImage(member?.user?.avatar)}
                        sx={{ width: 56, height: 56 }}
                      />
                    }
                    action={
                      <IconButton aria-label="settings" onClick={handleOpenMenu}>
                        <Iconify icon="eva:more-vertical-fill" />
                      </IconButton>
                    }
                    title={
                      <Typography variant="subtitle2" noWrap sx={{ wordWrap: 'break-word' }}>
                        {member?.user?.display_name}
                      </Typography>
                    }
                    subheader={
                      <Typography
                        variant="subtitle2"
                        color="#546e7a"
                        noWrap
                        sx={{ wordWrap: 'break-word' }}
                      >
                        {member?.user?.location}
                      </Typography>
                    }
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: 'uppercase' }}
                    color="#4fc3f7"
                    noWrap
                    mt={1}
                  >
                    {member?.role?.role_name}
                  </Typography>

                  <Popover
                    open={!!open}
                    anchorEl={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      sx: { width: 140 },
                    }}
                  >
                    <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                      <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                      Xóa
                    </MenuItem>
                  </Popover>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

ProductMember.propTypes = {
  members: PropTypes.array,
  leaderId: PropTypes.number,
};
