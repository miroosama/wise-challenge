import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import styled from 'styled-components';
import { GET_EPOCHS } from '../../apollo/queries';
import Table from '../../components/Table/Table';

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-flow: column;
    padding: 24px 48px;

    padding: 24px 48px;
    box-sizing: border-box;

    div {
        box-sizing: border-box;
    }
`;

const Epochs: FC = () => {
    const { fetchMore, loading, data } = useQuery(
        GET_EPOCHS,
        { }
      );
    
    console.log(data)
    
    return (
        <Container>
            <h2>Epochs</h2>
            <Table epochsData={data} />
        </Container>
    );
}

export default Epochs;