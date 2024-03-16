import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import Cookies from 'js-cookie';

export default function PatientsView() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showForm, setShowForm] = useState(false); // Add state to manage form visibility
    const [patients, setPatients] = useState([])
    const handleSort = (event, id) => {
        const isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = patients.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const handleNewPatientClick = () => {
        setShowForm(true); // Show the form when the button is clicked
    };

    const handleFormComplete = () => {
        setShowForm(false); // Hide the form when completed
        // Additional logic if needed
    };

    const dataFiltered = applyFilter({
        inputData: patients,
        comparator: getComparator(order, orderBy),
        filterName,
    });

    function getPatients(){
        const cookieValue = Cookies.get('JwtToken')
        const requestOptions = {
            method: 'GET',
            headers:{'Authorization': `Bearer ${cookieValue}`}
        }
        fetch(`https://localhost:7031/api/patients`,requestOptions)
        .then(response => response.json())
        .then((data) => {
            data.forEach(patient => {
                const dateObj = new Date(patient.birthdate)
                patient.birthdate = dateObj
            })
            setPatients(data);
        })
    }

    useEffect(()=> {
        getPatients();
    },[]);
    const notFound = !dataFiltered.length && !!filterName;

    return (
        <Container>
            {showForm ? (
                <PatientForm onComplete={handleFormComplete} />
            ) : (
                <>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={5}
                    >
                        <Typography variant="h4">Patients</Typography>
                        <Button
                            variant="contained"
                            color="inherit"
                            startIcon={<Iconify icon="eva:plus-fill" />}
                            onClick={handleNewPatientClick} // Attach click handler to show the form
                        >
                            New Patient
                        </Button>
                    </Stack>

                    <Card>
                        <UserTableToolbar
                            numSelected={selected.length}
                            filterName={filterName}
                            onFilterName={handleFilterByName}
                        />

                        <Scrollbar>
                            <TableContainer sx={{ overflow: 'unset' }}>
                                <Table sx={{ minWidth: 800 }}>
                                    <UserTableHead
                                        order={order}
                                        orderBy={orderBy}
                                        rowCount={patients.length}
                                        numSelected={selected.length}
                                        onRequestSort={handleSort}
                                        onSelectAllClick={handleSelectAllClick}
                                        headLabel={[
                                            { id: 'name', label: 'Name' },
                                            { id: 'injury', label: 'Injury' },
                                            { id: 'phone', label: 'Phone' },
                                            { id: 'birthdate', label: 'Birthdate' },
                                            { id: 'status', label: 'Status' },
                                            { id: '' },
                                        ]}
                                    />
                                    <TableBody>
                                        {dataFiltered
                                            .slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .map((row) => (
                                                <UserTableRow
                                                    key={row.id}
                                                    injury={row.injury}
                                                    birthdate={row.birthdate}
                                                    phone={row.phone}
                                                    name={row.name}
                                                    role='null'
                                                    status='null'
                                                    company='null'
                                                    avatarUrl={row.avatarUrl}
                                                    isVerified='null'
                                                    selected={selected.indexOf(row.name) !== -1}
                                                    handleClick={(event) =>
                                                        handleClick(event, row.name)
                                                    }
                                                />
                                            ))}

                                        <TableEmptyRows
                                            height={77}
                                            emptyRows={emptyRows(page, rowsPerPage, patients.length)}
                                        />

                                        {notFound && <TableNoData query={filterName} />}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Scrollbar>

                        <TablePagination
                            page={page}
                            component="div"
                            count={patients.length}
                            rowsPerPage={rowsPerPage}
                            onPageChange={handleChangePage}
                            rowsPerPageOptions={[5, 10, 25]}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Card>
                </>
            )}
        </Container>
    );
}

function PatientForm({ onComplete }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [injury, setInjury] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Additional form submission logic
        onComplete(); // Call the completion callback when the form is submitted
    };

    PatientForm.propTypes = {
        onComplete: PropTypes.func.isRequired,
    };

    return (
        <Container>
            <h1>New Patient Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Injury"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={injury}
                    onChange={(e) => setInjury(e.target.value)}
                />
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        label="Gender"
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                    label="Postal Code"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <TextField
                    label="State"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <TextField
                    label="Work Phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={workPhone}
                    onChange={(e) => setWorkPhone(e.target.value)}
                />
                <TextField
                    label="Medical History"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="inherit"
                    startIcon={<Iconify icon="eva:plus-fill" />}
                    type="submit"
                >
                    Complete
                </Button>
            </form>
        </Container>
    );
}
