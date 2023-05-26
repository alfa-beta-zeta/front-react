import React from 'react';
import { Typography, Link } from '@mui/material';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(16)}px;
  text-align: center;

  & > .MuiTypography-root {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <Typography variant="body2" component="p">
                &copy; {new Date().getFullYear()} αβ Zeta project. All rights reserved.
            </Typography>
        </FooterWrapper>
    );
};

export default Footer;
