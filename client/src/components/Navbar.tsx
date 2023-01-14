import { AppBar, Box, Toolbar, IconButton, Button } from '@mui/material';
import { Pets, AccountBox } from '@mui/icons-material/';

import './Navbar.css';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 2 }}>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex' }}>
          <IconButton
            size='large'
            edge='start'
            sx={{ width: '5%' }}
            style={{ color: 'white' }}
            onClick={() => {
              window.location.href = '/';
            }}>
            <Pets />
          </IconButton>
          <>
            <Button
              onClick={() => {
                window.location.href = '/events';
              }}>
              <b className='navtext'>Events</b>
            </Button>
            <IconButton
              size='large'
              edge='end'
              sx={{ width: '5%', marginLeft: 'auto' }}
              style={{ color: 'white' }}
              onClick={() => {
                window.location.href = '/profile';
              }}>
              <AccountBox />
            </IconButton>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
