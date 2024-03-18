import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function UserTableRow({
    key,
    id,
    injury,
    birthdate,
    phone,
    selected,
    name,
    avatarUrl,
    company,
    role,
    isVerified,
    status,
    handleClick,
}) {
    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };
    console.log(birthdate.getDay());
    return (
        <>
            <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
                <TableCell padding="checkbox">
                    <Checkbox disableRipple checked={selected} onChange={handleClick} />
                </TableCell>

                <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={name} src={avatarUrl} />
                        <Typography variant="subtitle2" noWrap>
                            <Link to={`${id}`}>{name}</Link>
                        </Typography>
                    </Stack>
                </TableCell>

                <TableCell>{injury}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{`${birthdate.getMonth() + 1}/${birthdate.getDate()}/${birthdate.getFullYear()}`}</TableCell>
                {/* <TableCell>{role}</TableCell> */}

                {/* <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                {/* <TableCell>
          <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
        </TableCell> */}

                <TableCell>
                    <Label color={status === 'released' ? 'error' : 'success'}>{status}</Label>
                </TableCell>

                <TableCell align="right">
                    <IconButton onClick={handleOpenMenu}>
                        <Iconify icon="eva:more-vertical-fill" />
                    </IconButton>
                </TableCell>
            </TableRow>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: { width: 140 },
                }}
            >
                <MenuItem onClick={handleCloseMenu}>
                    <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                    Edit
                </MenuItem>

                <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                    <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </>
    );
}

UserTableRow.propTypes = {
    injury: PropTypes.any,
    birthdate: PropTypes.any,
    phone: PropTypes.any,
    avatarUrl: PropTypes.any,
    company: PropTypes.any,
    handleClick: PropTypes.func,
    isVerified: PropTypes.any,
    name: PropTypes.any,
    role: PropTypes.any,
    selected: PropTypes.any,
    status: PropTypes.string,
};
