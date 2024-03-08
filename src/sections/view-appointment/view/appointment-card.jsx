import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const AppointmentCard = (props) => {
    const { appointment, onDetailsClick } = props;
    const { name, time, reason } = appointment;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1"><b>Time:</b> {time}</Typography>
                <Stack spacing={2}>
                    <Typography variant="body1"><b>Reason:</b> {reason}</Typography>
                    <Button variant="contained" color="primary" onClick={() => onDetailsClick(appointment)}>
                        See More Details
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

AppointmentCard.propTypes = {
    appointment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        reason: PropTypes.string.isRequired,
    }).isRequired,
    onDetailsClick: PropTypes.func.isRequired,
};

export default AppointmentCard
