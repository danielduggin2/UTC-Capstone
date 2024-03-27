import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);

    const getUser = () => {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch('https://localhost:7031/api/getRiteLogin/loggedIn', requestOptions)
            .then((response) => {
                if (!response.ok) {
                    navigate('/login');
                }

                if (response.status === 401) {
                    navigate('/login');
                }
                return response.json();
            })
            .then((data) => {
                if (data.userId === null) {
                    navigate('/login');
                }
            });
    };
    // getUser();
    return (
        <>
            <Header onOpenNav={() => setOpenNav(true)} />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

                <Main>{children}</Main>
            </Box>
        </>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};
