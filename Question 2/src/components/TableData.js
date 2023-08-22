import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './table.css';

const TableData = ({data}) => {
    
  return (
    <TableContainer component={Paper} className="train-table-container">
      <Table aria-label="train table" className="train-table">
        <TableHead>
          <TableRow>
            <TableCell>Train Name</TableCell>
            <TableCell>Train Number</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Seats Available (Sleeper)</TableCell>
            <TableCell>Seats Available (AC)</TableCell>
            <TableCell>Price (Sleeper)</TableCell>
            <TableCell>Price (AC)</TableCell>
            <TableCell>Delayed By (min)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((train, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {train.trainName}
              </TableCell>
              <TableCell>{train.trainNumber}</TableCell>
              <TableCell>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</TableCell>
              <TableCell>{train.seatsAvailable.sleeper}</TableCell>
              <TableCell>{train.seatsAvailable.AC}</TableCell>
              <TableCell>{train.price.sleeper}</TableCell>
              <TableCell>{train.price.AC}</TableCell>
              <TableCell>{train.delayedBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData;