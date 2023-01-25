import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { GET_EPOCHS } from '../apollo/queries';
import { Epoch_OrderBy, GetEpochsQuery, OrderDirection } from '../__generated__/graphql';

type TUseGetEpochsQuery = () => {
    data: GetEpochsQuery | undefined;
    isLoading: boolean;
    orderBy?: Epoch_OrderBy,
    orderDirection?: OrderDirection,
}

const useGetEpochsQuery = () => {
    const [orderBy, setOrderBy] = useState<Epoch_OrderBy>(Epoch_OrderBy.StartBlock);
    const [orderDirection, setOrderDirection] = useState<OrderDirection>(OrderDirection.Asc);
    
    const { loading, data } = useQuery(
        GET_EPOCHS,
        { variables: { orderBy, orderDirection } }
    );

    const handleSetSorting = useCallback((orderByArgs: Epoch_OrderBy, orderDirectionArgs: OrderDirection) => {
        setOrderBy(orderByArgs);
        setOrderDirection(orderDirectionArgs);
    }, []);

    return {data, isLoading: loading, orderBy, orderDirection, handleSetSorting};
}

export default useGetEpochsQuery;