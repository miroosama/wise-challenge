import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Epoch_OrderBy, GetEpochsQuery, OrderDirection } from '../../__generated__/graphql';
import Box from '@mui/system/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { EPOCHES_TYPE_TO_STRING_MAPPING } from '../../contants';
import Spinner from '../Spinner/Spinner';

interface ITableComponentProps {
    epochsData?: GetEpochsQuery;
    isLoading?: boolean;
    orderBy?: Epoch_OrderBy,
    orderDirection?: OrderDirection,
    handleSetSorting: (orderByArgs: Epoch_OrderBy, orderDirection: OrderDirection) => void;
}

const TableComponent: FC<ITableComponentProps> = ({epochsData, isLoading, orderBy, orderDirection, handleSetSorting}) => {

    const onSetSorting = (objKey: string, orderDirectionArgs?: OrderDirection) => () => {
        handleSetSorting(objKey as Epoch_OrderBy, orderDirectionArgs === OrderDirection.Asc ? OrderDirection.Desc : OrderDirection.Asc);
    };

    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {Object.keys(EPOCHES_TYPE_TO_STRING_MAPPING).map((objKey) =>
                            <TableCell key={objKey}>
                                <TableSortLabel
                                    active={orderBy === objKey}
                                    direction={orderBy === objKey ? orderDirection : 'asc'}
                                    onClick={onSetSorting(objKey, orderDirection)}
                                >
                                    {EPOCHES_TYPE_TO_STRING_MAPPING[objKey]}
                                    {orderBy === objKey ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {orderDirection === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                {!isLoading ? epochsData?.epoches.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {Object.keys(EPOCHES_TYPE_TO_STRING_MAPPING).map((objKey) =>
                            <TableCell key={objKey} component="th" scope="row">
                                {row[objKey]}
                            </TableCell>
                        )}
                    </TableRow>
                )) : (
                    <TableRow>
                        <Spinner />
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;