import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { AdminNav } from '../pages/admin/nav-bar';

export const AdminLayout = () => {
  return (
    <>
      <Grid display="flex" flexDirection="row" height="92vh">
        <AdminNav />
        <Outlet />
      </Grid>
    </>
  );
};
