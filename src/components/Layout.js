import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <Navbar />
            <Box flex={1} paddingTop={1}>
                <Container maxWidth="xl">
                    {children}
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
