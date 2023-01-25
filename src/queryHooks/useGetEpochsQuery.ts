import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { GET_EPOCHS } from '../apollo/queries';
import { ROWS_PER_PAGE_OPTION } from '../contants';
import { Epoch_OrderBy, OrderDirection } from '../__generated__/graphql';

const useGetEpochsQuery = () => {
    // Sorting states
    const [orderBy, setOrderBy] = useState(Epoch_OrderBy.StartBlock);
    const [orderDirection, setOrderDirection] = useState(OrderDirection.Asc);
    // Pagination states
    const [page, setPage] = useState(0);

    
    const { loading, data } = useQuery(
        GET_EPOCHS,
        { variables: { 
            orderBy,
            orderDirection,
            offset: page * ROWS_PER_PAGE_OPTION,
            limit: ROWS_PER_PAGE_OPTION
        } }
    );

    const handleSetSorting = useCallback((orderByArgs: Epoch_OrderBy, orderDirectionArgs: OrderDirection) => {
        setOrderBy(orderByArgs);
        setOrderDirection(orderDirectionArgs);
    }, []);

    const handleChangePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    return {
        data,
        isLoading: loading,
        orderBy,
        orderDirection,
        page,
        handleSetSorting,
        handleChangePage
    };
}

export default useGetEpochsQuery;