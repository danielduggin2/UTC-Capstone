import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const AppointmentCard = ({ appointment }) => {
    const { name, age, gender, time, reason } = appointment;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1">Age: {age}</Typography>
                <Typography variant="body1">Gender: {gender}</Typography>
                <Typography variant="body1">Time: {time}</Typography>
                <Typography variant="body1">Reason: {reason}</Typography>
                <Button variant="contained" color="primary">
                    See More Details
                </Button>
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
};

export default AppointmentCard
