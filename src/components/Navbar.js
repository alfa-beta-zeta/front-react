import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Zeta
                    </Typography>
                    <Button color="inherit">Sign in</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
