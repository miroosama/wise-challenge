import { gql } from '../__generated__/gql';

export const GET_EPOCHS = gql(/* GraphQL */ `
query GetEpochs ($orderBy: Epoch_orderBy, $orderDirection: OrderDirection, $limit: Int, $offset: Int,) {
  epoches (orderBy: $orderBy, orderDirection: $orderDirection, first: $limit, skip: $offset) {
    id
    startBlock
    endBlock
    signalledTokens
    stakeDeposited
    totalQueryFees
    taxedQueryFees
    queryFeesCollected
    curatorQueryFees
    queryFeeRebates
    totalRewards
    totalIndexerRewards
    totalDelegatorRewards
  }
}
`);