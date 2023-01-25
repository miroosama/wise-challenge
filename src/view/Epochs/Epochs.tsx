import React, { FC } from 'react';
import Table from '../../components/Table/Table';
import { ROWS_PER_PAGE_OPTION } from '../../contants';
import useGetEpochsQuery from '../../queryHooks/useGetEpochsQuery';
import { Container, StyledTablePagination } from './styled';

const Epochs: FC = () => {
    const { 
        data,
        isLoading,
        orderBy,
        orderDirection,
        page,
        handleSetSorting,
        handleChangePage
    } = useGetEpochsQuery();

    return (
        <Container>
            <h2>Epochs</h2>
            <Table 
                epochsData={data}
                isLoading={isLoading}
                orderBy={orderBy}
                orderDirection={orderDirection}
                handleSetSorting={handleSetSorting}
            />
            <StyledTablePagination
                rowsPerPageOptions={[ROWS_PER_PAGE_OPTION]}
                count={-1}
                rowsPerPage={ROWS_PER_PAGE_OPTION}
                page={page}
                onPageChange={(_e, page) => {handleChangePage(page)}}
            />
        </Container>
    );
}

export default Epochs;