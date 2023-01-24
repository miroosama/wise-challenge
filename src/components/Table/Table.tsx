import React, { FC } from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GetEpochsQuery } from '../../__generated__/graphql';

interface ITableComponentProps {
    epochsData?: GetEpochsQuery;
}

const TableComponent: FC<ITableComponentProps> = ({epochsData}) => {
    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Start Block</TableCell>
                        <TableCell>End Block</TableCell>
                        <TableCell>Signalled Tokens</TableCell>
                        <TableCell>Stake Deposited</TableCell>
                        <TableCell>Total Query Fees</TableCell>
                        <TableCell>Taxed Query Fees</TableCell>
                        <TableCell>Query Fees Collected</TableCell>
                        <TableCell>Curator Query Fees</TableCell>
                        <TableCell>Query Fee Rebates</TableCell>
                        <TableCell>Total Rewards</TableCell>
                        <TableCell>Total Indexer Rewards</TableCell>
                        <TableCell>Total Delegator Rewards</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {epochsData?.epoches.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.startBlock}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.endBlock}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.signalledTokens}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.stakeDeposited}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.totalQueryFees}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.taxedQueryFees}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.queryFeesCollected}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.curatorQueryFees}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.queryFeeRebates}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.totalRewards}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.totalIndexerRewards}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.totalDelegatorRewards}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;