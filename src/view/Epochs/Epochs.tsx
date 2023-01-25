import React, { FC } from 'react';
import Table from '../../components/Table/Table';
import useGetEpochsQuery from '../../queryHooks/useGetEpochsQuery';
import { Container } from './styled';

const Epochs: FC = () => {
    const { data, isLoading, orderBy, orderDirection, handleSetSorting } = useGetEpochsQuery();
    
    return (
        <Container>
            <h2>Epochs</h2>
            <Table epochsData={data} isLoading={isLoading} orderBy={orderBy} orderDirection={orderDirection} handleSetSorting={handleSetSorting} />
        </Container>
    );
}

export default Epochs;