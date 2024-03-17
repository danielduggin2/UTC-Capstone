import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { account } from 'src/_mock/account';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
    // {
    //     label: 'Home',
    //     icon: 'eva:home-fill',
    // },
    // {
    //   label: 'Profile',
    //   icon: 'eva:person-fill',
    // },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
        link: '/settings'
    },
    {
        label: 'Log Out',
        icon: 'eva:settings-2-fill',
        link: '/login'
    },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const [open, setOpen] = useState(null);
    const [userData, setUserData] = useState({});
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };
    const navigate = useNavigate();
  
    const menuClick = (link) => {
        if (link == '/login') {
            Cookies.remove('JwtToken');
        } 
        navigate(link)
    
    }

    const handleClose = () => {
        setOpen(null);
    };
    const getUser = () => {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch('https://localhost:7031/api/getRiteLogin', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUserData(data)
        });
    }
    useEffect(()=>{
        getUser();
    },[])
    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    width: 40,
                    height: 40,
                    background: (theme) => alpha(theme.palette.grey[500], 0.08),
                    ...(open && {
                        background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    }),
                }}
            >
                <Avatar
                    src={account.photoURL}
                    alt={`${userData.firstName} ${userData.lastName}`}
                    sx={{
                        width: 36,
                        height: 36,
                        border: (theme) => `solid 2px ${theme.palette.background.default}`,
                    }}
                >
                    {userData.firstName} {userData.lastName}
                </Avatar>
            </IconButton>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1,
                        ml: 0.75,
                        width: 200,
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2 }}>
                    <Typography variant="subtitle2" noWrap>
                    {userData.firstName} {userData.lastName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {userData.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                {MENU_OPTIONS.map((option) => (
                    <MenuItem key={option.label} onClick={() => menuClick(option.link)}>
                        {option.label}
                    </MenuItem>
                ))}

                <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

                {/* <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleClose}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem> */}
            </Popover>
        </>
    );
}
