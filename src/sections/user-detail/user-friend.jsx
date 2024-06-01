import { useState } from 'react';
import PropTypes from 'prop-types';

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

export default function UserFriends({ members }) {

  const [open, setOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpenMenu = (event, index) => {
    setOpen(event.currentTarget);
    setActiveIndex(index)
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <Box>
      <Grid container spacing={3} mt={2}>
        {Array.isArray(members) &&
          members.length > 0 &&
          members
            .map((member , index) => (
              <Grid key={member.user_id} item xs={12} sm={6} md={4}>
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
                        src={fImage(member?.avatar)}
                        sx={{ width: 56, height: 56 }}
                      />
                    }
                    action={
                      <IconButton aria-label="settings" onClick={(event) => handleOpenMenu(event, index)}>
                        <Iconify icon="eva:more-vertical-fill" />
                      </IconButton>
                    }
                    title={
                      <Typography variant="subtitle2" noWrap sx={{ wordWrap: 'break-word' }}>
                        {member?.display_name}
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
                  <Popover
                    open={!!open && activeIndex === index}
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

UserFriends.propTypes = {
  members: PropTypes.array,
};
