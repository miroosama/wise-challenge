import CircularProgress from '@mui/material/CircularProgress';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
`;

const Spinner: FC = () => (
    <StyledSpinnerContainer>
        <CircularProgress />
    </StyledSpinnerContainer>
)

export default Spinner;