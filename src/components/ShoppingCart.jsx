import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function ShoppingCart({ itemLine, cost }) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Brand</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Units</TableCell>
                        <TableCell align="right">Partial amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itemLine.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.brand}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.units}</TableCell>
                            <TableCell align="right">{row.partialAmount}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>Total amount: {cost}</TableCell>
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    );
}
