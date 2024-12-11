import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Fade } from '@mui/material';
import { useModal } from './ModalContext'; // Импорт контекста

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const { handleModalOpen } = useModal(); // Используем функцию открытия модального окна

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={handleMenuOpen}
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Web Bond_dev
        </Typography>
        <Box mr={3}>
          <Button color='inherit' variant='outlined' onClick={handleModalOpen}>
            Login
          </Button>
        </Box>
        <Button color='secondary' variant='contained' onClick={handleModalOpen}>
          Sign up
        </Button>
      </Toolbar>

      {/* Меню */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleMenuClose} component={Link} to='/'>
          Главная
        </MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to='/contact'>
          Контакты
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Header;