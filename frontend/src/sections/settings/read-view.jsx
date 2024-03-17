import { faEllipsis, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

export default function ReadPatientView({ setEditState, officeInfo }) {
    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    return (
        <>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">Physicians</Typography>
                <Button sx={{ p: '1px', px: 1 }}>Invite Physician</Button>
            </Stack>
            <Stack spacing={1} mt={2}>
                {officeInfo.physicians.map((phys, i) => (
                    <Stack
                        direction="row"
                        sx={{ backgroundColor: '#F5F5F5', borderRadius: '10px', p: 1 }}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="subtitle1">{phys.name}</Typography>
                        <IconButton onClick={handleOpenMenu}>
                            <Box
                                sx={{
                                    width: '18px',
                                    height: '18px',
                                    display: 'flex',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    m: '-5px',
                                }}
                            >
                                <FontAwesomeIcon icon={faEllipsisVertical} size="xs" />
                            </Box>
                        </IconButton>
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
                            <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>

                            <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                                Delete
                            </MenuItem>
                        </Popover>
                    </Stack>
                ))}
            </Stack>
        </>
    );
}
