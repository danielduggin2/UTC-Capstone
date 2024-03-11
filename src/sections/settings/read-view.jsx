import { faEllipsis, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function ReadPatientView({ setEditState }) {
    return (
        <>
            
            <Stack direction="row" justifyContent="space-between" >
                <Typography variant="h6">
                    Physicians
                </Typography>
                <Button sx={{p:'1px',px:1}}>Invite Physician</Button>
            </Stack>
            <Stack spacing={1} mt={2}>
                <Stack direction="row" sx={{backgroundColor:'#F5F5F5',borderRadius:'10px', p:1}} justifyContent='space-between' alignItems='center'>
                    <Typography variant="subtitle1">Eric Randolph</Typography>
                    <IconButton>
                        <Box sx={{width:'18px',height:'18px',display:'flex',alignContent:'center',justifyContent:'center',m:'-5px'}}>
                        <FontAwesomeIcon icon={faEllipsisVertical} size="xs"></FontAwesomeIcon>
                        </Box>
                    </IconButton>
                </Stack>
                <Stack direction="row" sx={{backgroundColor:'#F5F5F5',borderRadius:'10px', p:1}} justifyContent='space-between' alignItems='center'>
                    <Typography variant="subtitle1">Eric Randolph</Typography>
                    <IconButton>
                        <Box sx={{width:'18px',height:'18px',display:'flex',alignContent:'center',justifyContent:'center',m:'-5px'}}>
                        <FontAwesomeIcon icon={faEllipsisVertical} size="xs"></FontAwesomeIcon>
                        </Box>
                    </IconButton>
                </Stack>
            </Stack>
        </>
    );
}
