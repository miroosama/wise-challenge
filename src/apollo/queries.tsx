import { gql } from '../__generated__/gql';

export const GET_EPOCHS = gql(/* GraphQL */ `
query GetEpochs{
  epoches {
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