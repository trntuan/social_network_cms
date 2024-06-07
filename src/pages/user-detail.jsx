import React from 'react';
import { Helmet } from 'react-helmet-async';

import { UserDetailView } from 'src/sections/user-detail/view';

const UserDetail = () => (
  <>
    <Helmet>
      <title> Quản lý user </title>
    </Helmet>

    <UserDetailView />
  </>
);

export default UserDetail;
