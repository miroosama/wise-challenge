/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/**
 * A state channel Allocation representing a single Indexer-SubgraphDeployment stake
 *
 */
export type Allocation = {
  __typename?: 'Allocation';
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<Indexer>;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['BigDecimal'];
  /** Timestamp this allocation was closed at */
  closedAt?: Maybe<Scalars['Int']>;
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['Bytes']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']>;
  /** Epoch this allocation was closed in */
  closedAtEpoch?: Maybe<Scalars['Int']>;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['Bytes'];
  /** Block number at which this allocation was created */
  createdAtBlockNumber: Scalars['Int'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['Bytes'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt'];
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: Indexer;
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt'];
  indexingRewardCutAtClose?: Maybe<Scalars['Int']>;
  indexingRewardCutAtStart: Scalars['Int'];
  indexingRewardEffectiveCutAtClose?: Maybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart: Scalars['BigDecimal'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt'];
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['Bytes']>;
  /** Pool in which this allocation was closed */
  poolClosedIn?: Maybe<Pool>;
  queryFeeCutAtClose?: Maybe<Scalars['Int']>;
  queryFeeCutAtStart: Scalars['Int'];
  queryFeeEffectiveCutAtClose?: Maybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart: Scalars['BigDecimal'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt'];
  /** Status of the allocation */
  status: AllocationStatus;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: SubgraphDeployment;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['BigDecimal'];
};

export enum AllocationStatus {
  Active = 'Active',
  Claimed = 'Claimed',
  Closed = 'Closed',
  Finalized = 'Finalized',
  Null = 'Null'
}

export type Allocation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeForIndexer?: InputMaybe<Scalars['String']>;
  activeForIndexer_?: InputMaybe<Indexer_Filter>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAtBlockHash?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAtBlockHash?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creator?: InputMaybe<Scalars['Bytes']>;
  creator_contains?: InputMaybe<Scalars['Bytes']>;
  creator_gt?: InputMaybe<Scalars['Bytes']>;
  creator_gte?: InputMaybe<Scalars['Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']>;
  creator_lte?: InputMaybe<Scalars['Bytes']>;
  creator_not?: InputMaybe<Scalars['Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardCutAtClose?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtClose?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCutAtClose_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCutAtStart?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCutAtStart_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poi?: InputMaybe<Scalars['Bytes']>;
  poi_contains?: InputMaybe<Scalars['Bytes']>;
  poi_gt?: InputMaybe<Scalars['Bytes']>;
  poi_gte?: InputMaybe<Scalars['Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poi_lt?: InputMaybe<Scalars['Bytes']>;
  poi_lte?: InputMaybe<Scalars['Bytes']>;
  poi_not?: InputMaybe<Scalars['Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['Bytes']>;
  poi_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  poolClosedIn?: InputMaybe<Scalars['String']>;
  poolClosedIn_?: InputMaybe<Pool_Filter>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  queryFeeCutAtClose?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtClose?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCutAtClose_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCutAtStart?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCutAtStart_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<AllocationStatus>;
  status_in?: InputMaybe<Array<AllocationStatus>>;
  status_not?: InputMaybe<AllocationStatus>;
  status_not_in?: InputMaybe<Array<AllocationStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Allocation_OrderBy {
  ActiveForIndexer = 'activeForIndexer',
  AllocatedTokens = 'allocatedTokens',
  AnnualizedReturn = 'annualizedReturn',
  ClosedAt = 'closedAt',
  ClosedAtBlockHash = 'closedAtBlockHash',
  ClosedAtBlockNumber = 'closedAtBlockNumber',
  ClosedAtEpoch = 'closedAtEpoch',
  CreatedAt = 'createdAt',
  CreatedAtBlockHash = 'createdAtBlockHash',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtEpoch = 'createdAtEpoch',
  Creator = 'creator',
  CuratorRewards = 'curatorRewards',
  DelegationFees = 'delegationFees',
  EffectiveAllocation = 'effectiveAllocation',
  Id = 'id',
  Indexer = 'indexer',
  IndexingDelegatorRewards = 'indexingDelegatorRewards',
  IndexingIndexerRewards = 'indexingIndexerRewards',
  IndexingRewardCutAtClose = 'indexingRewardCutAtClose',
  IndexingRewardCutAtStart = 'indexingRewardCutAtStart',
  IndexingRewardEffectiveCutAtClose = 'indexingRewardEffectiveCutAtClose',
  IndexingRewardEffectiveCutAtStart = 'indexingRewardEffectiveCutAtStart',
  IndexingRewards = 'indexingRewards',
  Poi = 'poi',
  PoolClosedIn = 'poolClosedIn',
  QueryFeeCutAtClose = 'queryFeeCutAtClose',
  QueryFeeCutAtStart = 'queryFeeCutAtStart',
  QueryFeeEffectiveCutAtClose = 'queryFeeEffectiveCutAtClose',
  QueryFeeEffectiveCutAtStart = 'queryFeeEffectiveCutAtStart',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  Status = 'status',
  SubgraphDeployment = 'subgraphDeployment',
  TotalReturn = 'totalReturn'
}

/**
 * Attestation of a dispute
 *
 */
export type Attestation = {
  __typename?: 'Attestation';
  /** NOT IMPLEMENTED - Gas used by the attested query */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /** Concatenation of the requestCID and responseCID */
  id: Scalars['ID'];
  /** R of the indexers signature */
  r: Scalars['String'];
  /** RequestCID */
  requestCID: Scalars['String'];
  /** ResponseCID */
  responseCID: Scalars['String'];
  /** NOT IMPLEMENTED - Bytes of attested query */
  responseNumBytes?: Maybe<Scalars['BigInt']>;
  /** S of the indexers signature */
  s: Scalars['String'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: SubgraphDeployment;
  /** V of the indexers signature */
  v: Scalars['Int'];
};

export type Attestation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  r?: InputMaybe<Scalars['String']>;
  r_contains?: InputMaybe<Scalars['String']>;
  r_contains_nocase?: InputMaybe<Scalars['String']>;
  r_ends_with?: InputMaybe<Scalars['String']>;
  r_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_gt?: InputMaybe<Scalars['String']>;
  r_gte?: InputMaybe<Scalars['String']>;
  r_in?: InputMaybe<Array<Scalars['String']>>;
  r_lt?: InputMaybe<Scalars['String']>;
  r_lte?: InputMaybe<Scalars['String']>;
  r_not?: InputMaybe<Scalars['String']>;
  r_not_contains?: InputMaybe<Scalars['String']>;
  r_not_contains_nocase?: InputMaybe<Scalars['String']>;
  r_not_ends_with?: InputMaybe<Scalars['String']>;
  r_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_in?: InputMaybe<Array<Scalars['String']>>;
  r_not_starts_with?: InputMaybe<Scalars['String']>;
  r_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_starts_with?: InputMaybe<Scalars['String']>;
  r_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID?: InputMaybe<Scalars['String']>;
  requestCID_contains?: InputMaybe<Scalars['String']>;
  requestCID_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_gt?: InputMaybe<Scalars['String']>;
  requestCID_gte?: InputMaybe<Scalars['String']>;
  requestCID_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_lt?: InputMaybe<Scalars['String']>;
  requestCID_lte?: InputMaybe<Scalars['String']>;
  requestCID_not?: InputMaybe<Scalars['String']>;
  requestCID_not_contains?: InputMaybe<Scalars['String']>;
  requestCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_not_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID?: InputMaybe<Scalars['String']>;
  responseCID_contains?: InputMaybe<Scalars['String']>;
  responseCID_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_gt?: InputMaybe<Scalars['String']>;
  responseCID_gte?: InputMaybe<Scalars['String']>;
  responseCID_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_lt?: InputMaybe<Scalars['String']>;
  responseCID_lte?: InputMaybe<Scalars['String']>;
  responseCID_not?: InputMaybe<Scalars['String']>;
  responseCID_not_contains?: InputMaybe<Scalars['String']>;
  responseCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_not_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseNumBytes?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes_lt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  s?: InputMaybe<Scalars['String']>;
  s_contains?: InputMaybe<Scalars['String']>;
  s_contains_nocase?: InputMaybe<Scalars['String']>;
  s_ends_with?: InputMaybe<Scalars['String']>;
  s_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_gt?: InputMaybe<Scalars['String']>;
  s_gte?: InputMaybe<Scalars['String']>;
  s_in?: InputMaybe<Array<Scalars['String']>>;
  s_lt?: InputMaybe<Scalars['String']>;
  s_lte?: InputMaybe<Scalars['String']>;
  s_not?: InputMaybe<Scalars['String']>;
  s_not_contains?: InputMaybe<Scalars['String']>;
  s_not_contains_nocase?: InputMaybe<Scalars['String']>;
  s_not_ends_with?: InputMaybe<Scalars['String']>;
  s_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_in?: InputMaybe<Array<Scalars['String']>>;
  s_not_starts_with?: InputMaybe<Scalars['String']>;
  s_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_starts_with?: InputMaybe<Scalars['String']>;
  s_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  v?: InputMaybe<Scalars['Int']>;
  v_gt?: InputMaybe<Scalars['Int']>;
  v_gte?: InputMaybe<Scalars['Int']>;
  v_in?: InputMaybe<Array<Scalars['Int']>>;
  v_lt?: InputMaybe<Scalars['Int']>;
  v_lte?: InputMaybe<Scalars['Int']>;
  v_not?: InputMaybe<Scalars['Int']>;
  v_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Attestation_OrderBy {
  GasUsed = 'gasUsed',
  Id = 'id',
  R = 'r',
  RequestCid = 'requestCID',
  ResponseCid = 'responseCID',
  ResponseNumBytes = 'responseNumBytes',
  S = 's',
  SubgraphDeployment = 'subgraphDeployment',
  V = 'v'
}

/**
 * Authorized functions for the Manager
 *
 */
export type AuthorizedFunction = {
  __typename?: 'AuthorizedFunction';
  /** Function signature (string) */
  id: Scalars['ID'];
  /** Token lock Manager */
  manager: TokenManager;
  /** Hash of the function signature */
  sigHash: Scalars['Bytes'];
  /** The contract address that is authorized to have this function called on itself */
  target: Scalars['Bytes'];
};

export type AuthorizedFunction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<TokenManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sigHash?: InputMaybe<Scalars['Bytes']>;
  sigHash_contains?: InputMaybe<Scalars['Bytes']>;
  sigHash_gt?: InputMaybe<Scalars['Bytes']>;
  sigHash_gte?: InputMaybe<Scalars['Bytes']>;
  sigHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sigHash_lt?: InputMaybe<Scalars['Bytes']>;
  sigHash_lte?: InputMaybe<Scalars['Bytes']>;
  sigHash_not?: InputMaybe<Scalars['Bytes']>;
  sigHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  sigHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum AuthorizedFunction_OrderBy {
  Id = 'id',
  Manager = 'manager',
  SigHash = 'sigHash',
  Target = 'target'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * Curator with all Signals and metrics
 *
 */
export type Curator = {
  __typename?: 'Curator';
  /** Graph account of this curator */
  account: GraphAccount;
  /** Amount of active name signals and signals for this user. signalCount + nameSignalCount */
  activeCombinedSignalCount: Scalars['Int'];
  /** Amount of active name signals for this user */
  activeNameSignalCount: Scalars['Int'];
  /** Amount of active signals for this user */
  activeSignalCount: Scalars['Int'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['BigDecimal'];
  /** Total amount of name signals and signals created by this user. signalCount + nameSignalCount */
  combinedSignalCount: Scalars['Int'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Total amount of name signals created by this user */
  nameSignalCount: Scalars['Int'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** Total amount of signals created by this user */
  signalCount: Scalars['Int'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['BigDecimal'];
  /** Subgraphs the curator is curating */
  signals: Array<Signal>;
  /** totalNameSignalAverageCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['BigDecimal'];
  /** totalSignalAverageCostBasis / totalSignal */
  totalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['BigDecimal'];
  /** Total curator cost basis of all shares of name pools purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['BigDecimal'];
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['BigDecimal'];
  /** CURRENT summed signal for all bonding curves */
  totalSignal: Scalars['BigDecimal'];
  /** Total curator cost basis of all version signal shares purchased on all bonding curves. Includes those purchased through GNS name pools */
  totalSignalAverageCostBasis: Scalars['BigDecimal'];
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
};


/**
 * Curator with all Signals and metrics
 *
 */
export type CuratorNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NameSignal_Filter>;
};


/**
 * Curator with all Signals and metrics
 *
 */
export type CuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Signal_Filter>;
};

export type Curator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeCombinedSignalCount?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  combinedSignalCount?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignals_?: InputMaybe<NameSignal_Filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalCount?: InputMaybe<Scalars['Int']>;
  signalCount_gt?: InputMaybe<Scalars['Int']>;
  signalCount_gte?: InputMaybe<Scalars['Int']>;
  signalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  signalCount_lt?: InputMaybe<Scalars['Int']>;
  signalCount_lte?: InputMaybe<Scalars['Int']>;
  signalCount_not?: InputMaybe<Scalars['Int']>;
  signalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalingEfficiency?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalingEfficiency_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['BigDecimal']>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signals_?: InputMaybe<Signal_Filter>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignal?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Curator_OrderBy {
  Account = 'account',
  ActiveCombinedSignalCount = 'activeCombinedSignalCount',
  ActiveNameSignalCount = 'activeNameSignalCount',
  ActiveSignalCount = 'activeSignalCount',
  AnnualizedReturn = 'annualizedReturn',
  CombinedSignalCount = 'combinedSignalCount',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  Id = 'id',
  NameSignalCount = 'nameSignalCount',
  NameSignals = 'nameSignals',
  RealizedRewards = 'realizedRewards',
  SignalCount = 'signalCount',
  SignalingEfficiency = 'signalingEfficiency',
  Signals = 'signals',
  TotalAverageCostBasisPerNameSignal = 'totalAverageCostBasisPerNameSignal',
  TotalAverageCostBasisPerSignal = 'totalAverageCostBasisPerSignal',
  TotalNameSignal = 'totalNameSignal',
  TotalNameSignalAverageCostBasis = 'totalNameSignalAverageCostBasis',
  TotalNameSignalledTokens = 'totalNameSignalledTokens',
  TotalNameUnsignalledTokens = 'totalNameUnsignalledTokens',
  TotalReturn = 'totalReturn',
  TotalSignal = 'totalSignal',
  TotalSignalAverageCostBasis = 'totalSignalAverageCostBasis',
  TotalSignalledTokens = 'totalSignalledTokens',
  TotalUnsignalledTokens = 'totalUnsignalledTokens',
  TotalWithdrawnTokens = 'totalWithdrawnTokens'
}

export type CurrentSubgraphDeploymentRelation = {
  __typename?: 'CurrentSubgraphDeploymentRelation';
  /** Indicates whether this relation is active. This means that the deployment is still the current deployment for the named Subgraph */
  active: Scalars['Boolean'];
  deployment: SubgraphDeployment;
  /** Auxiliary entity used to batch update Subgraph entities when signalling on the deployment changes. ID replicates the deployment ID and adds a counter, to make it easy to reproduce. */
  id: Scalars['ID'];
  subgraph: Subgraph;
};

export type CurrentSubgraphDeploymentRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  deployment?: InputMaybe<Scalars['String']>;
  deployment_?: InputMaybe<SubgraphDeployment_Filter>;
  deployment_contains?: InputMaybe<Scalars['String']>;
  deployment_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_ends_with?: InputMaybe<Scalars['String']>;
  deployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_gt?: InputMaybe<Scalars['String']>;
  deployment_gte?: InputMaybe<Scalars['String']>;
  deployment_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_lt?: InputMaybe<Scalars['String']>;
  deployment_lte?: InputMaybe<Scalars['String']>;
  deployment_not?: InputMaybe<Scalars['String']>;
  deployment_not_contains?: InputMaybe<Scalars['String']>;
  deployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_not_starts_with?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_starts_with?: InputMaybe<Scalars['String']>;
  deployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CurrentSubgraphDeploymentRelation_OrderBy {
  Active = 'active',
  Deployment = 'deployment',
  Id = 'id',
  Subgraph = 'subgraph'
}

/**
 * Delegator stake for a single Indexer
 *
 */
export type DelegatedStake = {
  __typename?: 'DelegatedStake';
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** Delegator */
  delegator: Delegator;
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: Indexer;
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['BigDecimal'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** CUMULATIVE tokens delegated */
  stakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  unstakedTokens: Scalars['BigInt'];
};

export type DelegatedStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  personalExchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  personalExchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DelegatedStake_OrderBy {
  CreatedAt = 'createdAt',
  Delegator = 'delegator',
  Id = 'id',
  Indexer = 'indexer',
  LastDelegatedAt = 'lastDelegatedAt',
  LastUndelegatedAt = 'lastUndelegatedAt',
  LockedTokens = 'lockedTokens',
  LockedUntil = 'lockedUntil',
  PersonalExchangeRate = 'personalExchangeRate',
  RealizedRewards = 'realizedRewards',
  ShareAmount = 'shareAmount',
  StakedTokens = 'stakedTokens',
  UnstakedTokens = 'unstakedTokens'
}

/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type Delegator = {
  __typename?: 'Delegator';
  /** Graph account of the delegator */
  account: GraphAccount;
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Time created at */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Delegator address */
  id: Scalars['ID'];
  /** Stakes of this delegator */
  stakes: Array<DelegatedStake>;
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** Total realized rewards on all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['BigDecimal'];
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
};


/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type DelegatorStakesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DelegatedStake_Filter>;
};

export type Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakes_?: InputMaybe<DelegatedStake_Filter>;
  totalRealizedRewards?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Delegator_OrderBy {
  Account = 'account',
  ActiveStakesCount = 'activeStakesCount',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  Id = 'id',
  Stakes = 'stakes',
  StakesCount = 'stakesCount',
  TotalRealizedRewards = 'totalRealizedRewards',
  TotalStakedTokens = 'totalStakedTokens',
  TotalUnstakedTokens = 'totalUnstakedTokens'
}

/**
 * Dispute of a query. Includes single query, conflicting attestation, and indexing disputes
 *
 */
export type Dispute = {
  __typename?: 'Dispute';
  /** Allocation ID. Only for Indexing Disputes */
  allocation?: Maybe<Allocation>;
  /** Attestation. Only for single query and conflicting attestations */
  attestation?: Maybe<Attestation>;
  /** Time dispute was closed at */
  closedAt: Scalars['Int'];
  /** Time dispute was created */
  createdAt: Scalars['Int'];
  /** Fisherman deposit */
  deposit: Scalars['BigInt'];
  /** Fisherman address */
  fisherman: GraphAccount;
  /** Dispute ID */
  id: Scalars['ID'];
  /** Indexer disputed */
  indexer: GraphAccount;
  /** Linked dispute of other Indexer. Only for conflicting attestation */
  linkedDispute?: Maybe<Dispute>;
  /** Status of the dispute. Accepted means the Indexer was slashed */
  status: DisputeStatus;
  /** Subgraph deployment being disputed */
  subgraphDeployment: SubgraphDeployment;
  /** Amount of the slashed tokens that was burned */
  tokensBurned: Scalars['BigDecimal'];
  /** Amount of the slashed tokens that was payed as reward to the fisherman */
  tokensRewarded: Scalars['BigInt'];
  /** Total amount of tokens slashed on the dispute */
  tokensSlashed: Scalars['BigDecimal'];
  /** Type of dispute */
  type: DisputeType;
};

export enum DisputeStatus {
  Accepted = 'Accepted',
  Draw = 'Draw',
  Rejected = 'Rejected',
  Undecided = 'Undecided'
}

export enum DisputeType {
  Conflicting = 'Conflicting',
  Indexing = 'Indexing',
  SingleQuery = 'SingleQuery'
}

export type Dispute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['String']>;
  allocation_?: InputMaybe<Allocation_Filter>;
  allocation_contains?: InputMaybe<Scalars['String']>;
  allocation_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_ends_with?: InputMaybe<Scalars['String']>;
  allocation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_gt?: InputMaybe<Scalars['String']>;
  allocation_gte?: InputMaybe<Scalars['String']>;
  allocation_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_lt?: InputMaybe<Scalars['String']>;
  allocation_lte?: InputMaybe<Scalars['String']>;
  allocation_not?: InputMaybe<Scalars['String']>;
  allocation_not_contains?: InputMaybe<Scalars['String']>;
  allocation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_not_starts_with?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_starts_with?: InputMaybe<Scalars['String']>;
  allocation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation?: InputMaybe<Scalars['String']>;
  attestation_?: InputMaybe<Attestation_Filter>;
  attestation_contains?: InputMaybe<Scalars['String']>;
  attestation_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_ends_with?: InputMaybe<Scalars['String']>;
  attestation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_gt?: InputMaybe<Scalars['String']>;
  attestation_gte?: InputMaybe<Scalars['String']>;
  attestation_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_lt?: InputMaybe<Scalars['String']>;
  attestation_lte?: InputMaybe<Scalars['String']>;
  attestation_not?: InputMaybe<Scalars['String']>;
  attestation_not_contains?: InputMaybe<Scalars['String']>;
  attestation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_not_starts_with?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_starts_with?: InputMaybe<Scalars['String']>;
  attestation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fisherman?: InputMaybe<Scalars['String']>;
  fisherman_?: InputMaybe<GraphAccount_Filter>;
  fisherman_contains?: InputMaybe<Scalars['String']>;
  fisherman_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_gt?: InputMaybe<Scalars['String']>;
  fisherman_gte?: InputMaybe<Scalars['String']>;
  fisherman_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_lt?: InputMaybe<Scalars['String']>;
  fisherman_lte?: InputMaybe<Scalars['String']>;
  fisherman_not?: InputMaybe<Scalars['String']>;
  fisherman_not_contains?: InputMaybe<Scalars['String']>;
  fisherman_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_not_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<GraphAccount_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute?: InputMaybe<Scalars['String']>;
  linkedDispute_?: InputMaybe<Dispute_Filter>;
  linkedDispute_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_gt?: InputMaybe<Scalars['String']>;
  linkedDispute_gte?: InputMaybe<Scalars['String']>;
  linkedDispute_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_lt?: InputMaybe<Scalars['String']>;
  linkedDispute_lte?: InputMaybe<Scalars['String']>;
  linkedDispute_not?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DisputeStatus>;
  status_in?: InputMaybe<Array<DisputeStatus>>;
  status_not?: InputMaybe<DisputeStatus>;
  status_not_in?: InputMaybe<Array<DisputeStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokensBurned?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  tokensBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensRewarded?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRewarded_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSlashed?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokensSlashed_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_not?: InputMaybe<Scalars['BigDecimal']>;
  tokensSlashed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  type?: InputMaybe<DisputeType>;
  type_in?: InputMaybe<Array<DisputeType>>;
  type_not?: InputMaybe<DisputeType>;
  type_not_in?: InputMaybe<Array<DisputeType>>;
};

export enum Dispute_OrderBy {
  Allocation = 'allocation',
  Attestation = 'attestation',
  ClosedAt = 'closedAt',
  CreatedAt = 'createdAt',
  Deposit = 'deposit',
  Fisherman = 'fisherman',
  Id = 'id',
  Indexer = 'indexer',
  LinkedDispute = 'linkedDispute',
  Status = 'status',
  SubgraphDeployment = 'subgraphDeployment',
  TokensBurned = 'tokensBurned',
  TokensRewarded = 'tokensRewarded',
  TokensSlashed = 'tokensSlashed',
  Type = 'type'
}

/**
 * Epoch aggregate data for network statistics on signaling, rewards, and query fees
 *
 */
export type Epoch = {
  __typename?: 'Epoch';
  /** Amount of query fees generated that are going to curators during this epoch */
  curatorQueryFees: Scalars['BigInt'];
  /** End block of the epoch */
  endBlock: Scalars['Int'];
  /** Epoch number */
  id: Scalars['ID'];
  /** Rebate amount claimed from the protocol through cobbs douglas during this epoch (Doesn't correlate to the queryFeesCollected for this epoch since there's a 7 day period before claiming) */
  queryFeeRebates: Scalars['BigInt'];
  /** Amount of query fees generated that are going to the rebate pool for indexers during this epoch */
  queryFeesCollected: Scalars['BigInt'];
  /** Signaled tokens during this epoch */
  signalledTokens: Scalars['BigInt'];
  /** Stake deposited during this epoch */
  stakeDeposited: Scalars['BigInt'];
  /** Start block of the epoch */
  startBlock: Scalars['Int'];
  /** Amount of query fees generated that were burnt by the 1% protocol tax during this epoch */
  taxedQueryFees: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by delegators */
  totalDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by indexers */
  totalIndexerRewards: Scalars['BigInt'];
  /** Total amount of query fees generated during this epoch (Includes everything) */
  totalQueryFees: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch. Includes both delegator and indexer rewards */
  totalRewards: Scalars['BigInt'];
};

export type Epoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  curatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock?: InputMaybe<Scalars['Int']>;
  endBlock_gt?: InputMaybe<Scalars['Int']>;
  endBlock_gte?: InputMaybe<Scalars['Int']>;
  endBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock_lt?: InputMaybe<Scalars['Int']>;
  endBlock_lte?: InputMaybe<Scalars['Int']>;
  endBlock_not?: InputMaybe<Scalars['Int']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock?: InputMaybe<Scalars['Int']>;
  startBlock_gt?: InputMaybe<Scalars['Int']>;
  startBlock_gte?: InputMaybe<Scalars['Int']>;
  startBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  startBlock_lt?: InputMaybe<Scalars['Int']>;
  startBlock_lte?: InputMaybe<Scalars['Int']>;
  startBlock_not?: InputMaybe<Scalars['Int']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  taxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Epoch_OrderBy {
  CuratorQueryFees = 'curatorQueryFees',
  EndBlock = 'endBlock',
  Id = 'id',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  SignalledTokens = 'signalledTokens',
  StakeDeposited = 'stakeDeposited',
  StartBlock = 'startBlock',
  TaxedQueryFees = 'taxedQueryFees',
  TotalDelegatorRewards = 'totalDelegatorRewards',
  TotalIndexerRewards = 'totalIndexerRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalRewards = 'totalRewards'
}

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccount = {
  __typename?: 'GraphAccount';
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Disputes this graph account has created */
  createdDisputes: Array<Dispute>;
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<Curator>;
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<GraphAccountName>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<Delegator>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']>;
  /** Disputes against this graph account */
  disputesAgainst: Array<Dispute>;
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Graph account ID */
  id: Scalars['ID'];
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<Indexer>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['Bytes']>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<NameSignalTransaction>;
  /** All names this graph account has claimed from all name systems */
  names: Array<GraphAccountName>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<GraphAccount>;
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total query fees the subgraphs created by this account have accumulated in GRT */
  subgraphQueryFees: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<Subgraph>;
  tokenLockWallets: Array<TokenLockWallet>;
  /** Website URL */
  website?: Maybe<Scalars['String']>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountCreatedDisputesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Dispute_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountDisputesAgainstArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Dispute_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountNameSignalTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NameSignalTransaction_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountNamesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GraphAccountName_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountOperatorOfArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountSubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Subgraph_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type GraphAccountTokenLockWalletsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenLockWallet_Filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 *
 */
export type GraphAccountName = {
  __typename?: 'GraphAccountName';
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<GraphAccount>;
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name from the system */
  name: Scalars['String'];
  /** Name system for this name */
  nameSystem: NameSystem;
};

export type GraphAccountName_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  graphAccount?: InputMaybe<Scalars['String']>;
  graphAccount_?: InputMaybe<GraphAccount_Filter>;
  graphAccount_contains?: InputMaybe<Scalars['String']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_gt?: InputMaybe<Scalars['String']>;
  graphAccount_gte?: InputMaybe<Scalars['String']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_lt?: InputMaybe<Scalars['String']>;
  graphAccount_lte?: InputMaybe<Scalars['String']>;
  graphAccount_not?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameSystem?: InputMaybe<NameSystem>;
  nameSystem_in?: InputMaybe<Array<NameSystem>>;
  nameSystem_not?: InputMaybe<NameSystem>;
  nameSystem_not_in?: InputMaybe<Array<NameSystem>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GraphAccountName_OrderBy {
  GraphAccount = 'graphAccount',
  Id = 'id',
  Name = 'name',
  NameSystem = 'nameSystem'
}

export type GraphAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdDisputes_?: InputMaybe<Dispute_Filter>;
  curationApproval?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName?: InputMaybe<Scalars['String']>;
  defaultName_?: InputMaybe<GraphAccountName_Filter>;
  defaultName_contains?: InputMaybe<Scalars['String']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_gt?: InputMaybe<Scalars['String']>;
  defaultName_gte?: InputMaybe<Scalars['String']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_lt?: InputMaybe<Scalars['String']>;
  defaultName_lte?: InputMaybe<Scalars['String']>;
  defaultName_not?: InputMaybe<Scalars['String']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  disputesAgainst_?: InputMaybe<Dispute_Filter>;
  gnsApproval?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  isOrganization?: InputMaybe<Scalars['Boolean']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nameSignalTransactions_?: InputMaybe<NameSignalTransaction_Filter>;
  names_?: InputMaybe<GraphAccountName_Filter>;
  operatorOf_?: InputMaybe<GraphAccount_Filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<GraphAccount_Filter>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphs_?: InputMaybe<Subgraph_Filter>;
  tokenLockWallets?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_?: InputMaybe<TokenLockWallet_Filter>;
  tokenLockWallets_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GraphAccount_OrderBy {
  Balance = 'balance',
  CodeRepository = 'codeRepository',
  CreatedAt = 'createdAt',
  CreatedDisputes = 'createdDisputes',
  CurationApproval = 'curationApproval',
  Curator = 'curator',
  DefaultDisplayName = 'defaultDisplayName',
  DefaultName = 'defaultName',
  Delegator = 'delegator',
  Description = 'description',
  DeveloperCreatedAt = 'developerCreatedAt',
  DisplayName = 'displayName',
  DisputesAgainst = 'disputesAgainst',
  GnsApproval = 'gnsApproval',
  Id = 'id',
  Image = 'image',
  Indexer = 'indexer',
  IsOrganization = 'isOrganization',
  MetadataHash = 'metadataHash',
  NameSignalTransactions = 'nameSignalTransactions',
  Names = 'names',
  OperatorOf = 'operatorOf',
  Operators = 'operators',
  StakingApproval = 'stakingApproval',
  SubgraphQueryFees = 'subgraphQueryFees',
  Subgraphs = 'subgraphs',
  TokenLockWallets = 'tokenLockWallets',
  Website = 'website'
}

/**
 * Graph Network global parameters and contract addresses
 *
 */
export type GraphNetwork = {
  __typename?: 'GraphNetwork';
  /** NOT IMPLEMENTED - Price of one GRT in ETH */
  GRTinETH?: Maybe<Scalars['BigDecimal']>;
  /** NOT IMPLEMENTED - Price of one GRT in USD */
  GRTinUSD: Scalars['BigDecimal'];
  /** Total amount of curators historically */
  activeCuratorCount: Scalars['Int'];
  /** Total active delegations. Those delegations that still have GRT staked towards an indexer */
  activeDelegationCount: Scalars['Int'];
  /** Total active delegators. Those that still have at least one active delegation. */
  activeDelegatorCount: Scalars['Int'];
  /** Amount of active Subgraph entities */
  activeSubgraphCount: Scalars['Int'];
  /** Dispute arbitrator */
  arbitrator: Scalars['Bytes'];
  /** Asset holder for the protocol */
  assetHolders?: Maybe<Array<Scalars['Bytes']>>;
  /** Epochs to wait before fees can be claimed in rebate pool */
  channelDisputeEpochs: Scalars['Int'];
  /** Controller address */
  controller: Scalars['Bytes'];
  /** Curation address */
  curation: Scalars['Bytes'];
  /** Curation implementations. Last in the array is current */
  curationImplementations: Array<Scalars['Bytes']>;
  /** Percentage of fees going to curators. In parts per million */
  curationPercentage: Scalars['Int'];
  /** The fee charged when a curator withdraws signal. In parts per million */
  curationTaxPercentage: Scalars['Int'];
  /** Total amount of curators historically */
  curatorCount: Scalars['Int'];
  /** Current epoch the protocol is in */
  currentEpoch: Scalars['Int'];
  /** Block number for L1. Only implemented for L2 deployments to properly reflect the L1 block used for timings */
  currentL1BlockNumber?: Maybe<Scalars['BigInt']>;
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Total amount of delegations historically */
  delegationCount: Scalars['Int'];
  /** Minimum time an Indexer must use for resetting their Delegation parameters */
  delegationParametersCooldown: Scalars['Int'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** Tax that delegators pay to deposit. In Parts per million */
  delegationTaxPercentage: Scalars['Int'];
  /** Time in epochs a delegator needs to wait to withdraw delegated stake */
  delegationUnbondingPeriod: Scalars['Int'];
  /** Total amount of delegators historically */
  delegatorCount: Scalars['Int'];
  /** Dispute manager address */
  disputeManager: Scalars['Bytes'];
  /** Total epochs */
  epochCount: Scalars['Int'];
  /** Epoch Length in blocks */
  epochLength: Scalars['Int'];
  /** Epoch manager address */
  epochManager: Scalars['Bytes'];
  /** Epoch Manager implementations. Last in the array is current */
  epochManagerImplementations: Array<Scalars['Bytes']>;
  /** Reward to Fisherman on successful disputes. In parts per million */
  fishermanRewardPercentage: Scalars['Int'];
  /** GNS address */
  gns: Scalars['Bytes'];
  /** Governor of the controller (i.e. the whole protocol) */
  governor: Scalars['Bytes'];
  /** Graph token address */
  graphToken: Scalars['Bytes'];
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  indexingSlashingPercentage: Scalars['Int'];
  /** True if the protocol is partially paused */
  isPartialPaused: Scalars['Boolean'];
  /** True if the protocol is paused */
  isPaused: Scalars['Boolean'];
  /** Block when epoch length was last updated */
  lastLengthUpdateBlock: Scalars['Int'];
  /** Epoch when epoch length was last updated */
  lastLengthUpdateEpoch: Scalars['Int'];
  /** Epoch that was last run */
  lastRunEpoch: Scalars['Int'];
  /** Epochs to wait before delegators can settle */
  maxAllocationEpochs: Scalars['Int'];
  /** Minimum amount of tokens needed to start curating */
  minimumCurationDeposit: Scalars['BigInt'];
  /** Minimum deposit to create a dispute */
  minimumDisputeDeposit: Scalars['BigInt'];
  /** Minimum GRT an indexer must stake */
  minimumIndexerStake: Scalars['BigInt'];
  /** The issuance rate of GRT per block. To get annual rate do (networkGRTIssuance * 10^-18)^(blocksPerYear) */
  networkGRTIssuance: Scalars['BigInt'];
  /** Percentage of the GNS migration tax payed by the subgraph owner */
  ownerTaxPercentage: Scalars['Int'];
  /** Pause guardian address */
  pauseGuardian: Scalars['Bytes'];
  /** Percentage of fees burn as protocol fee. In parts per million */
  protocolFeePercentage: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for query disputes. In parts per million */
  querySlashingPercentage: Scalars['Int'];
  /** Alpha in the cobbs douglas formula */
  rebateRatio: Scalars['BigDecimal'];
  /** Rewards manager address */
  rewardsManager: Scalars['Bytes'];
  /** Rewards Manager implementations. Last in the array is current */
  rewardsManagerImplementations: Array<Scalars['Bytes']>;
  /** Service registry address */
  serviceRegistry: Scalars['Bytes'];
  /** Contracts that have been approved to be a slasher */
  slashers?: Maybe<Array<Scalars['Bytes']>>;
  /** [DEPRECATED] Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  slashingPercentage: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Staking address */
  staking: Scalars['Bytes'];
  /** Graph token implementations. Last in the array is current */
  stakingImplementations: Array<Scalars['Bytes']>;
  /** Address of the availability oracle */
  subgraphAvailabilityOracle: Scalars['Bytes'];
  /** Total amount of Subgraph entities */
  subgraphCount: Scalars['Int'];
  /** Total amount of SubgraphDeployment entities */
  subgraphDeploymentCount: Scalars['Int'];
  /** Time in blocks needed to wait to unstake */
  thawingPeriod: Scalars['Int'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** Total amount of GRT burned */
  totalGRTBurned: Scalars['BigInt'];
  /** Total amount of GRT deposited to the L1 gateway. Note that the actual amount claimed in L2 might be lower due to tickets not redeemed. */
  totalGRTDeposited: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT deposited to the L1 gateway and redeemed in L2. */
  totalGRTDepositedConfirmed: Scalars['BigInt'];
  /** Total amount of GRT minted */
  totalGRTMinted: Scalars['BigInt'];
  /** Total amount of GRT withdrawn from the L2 gateway. Note that the actual amount claimed in L1 might be lower due to outbound transactions not finalized. */
  totalGRTWithdrawn: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT withdrawn from the L2 gateway and claimed in L1. */
  totalGRTWithdrawnConfirmed: Scalars['BigInt'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** Graph Token supply */
  totalSupply: Scalars['BigInt'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** Total GRT currently curating via the Auto-Migrate function */
  totalTokensSignalledAutoMigrate: Scalars['BigDecimal'];
  /** Total GRT currently curating to a specific version */
  totalTokensSignalledDirectly: Scalars['BigDecimal'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** Total unclaimed rebates. Includes unclaimed rebates, and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
};

export type GraphNetwork_Filter = {
  GRTinETH?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_not?: InputMaybe<Scalars['BigDecimal']>;
  GRTinETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinUSD?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  GRTinUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  GRTinUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeCuratorCount?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount_lt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  assetHolders_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  channelDisputeEpochs?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs_lt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  controller?: InputMaybe<Scalars['Bytes']>;
  controller_contains?: InputMaybe<Scalars['Bytes']>;
  controller_gt?: InputMaybe<Scalars['Bytes']>;
  controller_gte?: InputMaybe<Scalars['Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controller_lt?: InputMaybe<Scalars['Bytes']>;
  controller_lte?: InputMaybe<Scalars['Bytes']>;
  controller_not?: InputMaybe<Scalars['Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curation?: InputMaybe<Scalars['Bytes']>;
  curationImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  curationImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  curationPercentage?: InputMaybe<Scalars['Int']>;
  curationPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationPercentage_not?: InputMaybe<Scalars['Int']>;
  curationPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curation_contains?: InputMaybe<Scalars['Bytes']>;
  curation_gt?: InputMaybe<Scalars['Bytes']>;
  curation_gte?: InputMaybe<Scalars['Bytes']>;
  curation_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curation_lt?: InputMaybe<Scalars['Bytes']>;
  curation_lte?: InputMaybe<Scalars['Bytes']>;
  curation_not?: InputMaybe<Scalars['Bytes']>;
  curation_not_contains?: InputMaybe<Scalars['Bytes']>;
  curation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch?: InputMaybe<Scalars['Int']>;
  currentEpoch_gt?: InputMaybe<Scalars['Int']>;
  currentEpoch_gte?: InputMaybe<Scalars['Int']>;
  currentEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch_lt?: InputMaybe<Scalars['Int']>;
  currentEpoch_lte?: InputMaybe<Scalars['Int']>;
  currentEpoch_not?: InputMaybe<Scalars['Int']>;
  currentEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentL1BlockNumber?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount?: InputMaybe<Scalars['Int']>;
  delegationCount_gt?: InputMaybe<Scalars['Int']>;
  delegationCount_gte?: InputMaybe<Scalars['Int']>;
  delegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount_lt?: InputMaybe<Scalars['Int']>;
  delegationCount_lte?: InputMaybe<Scalars['Int']>;
  delegationCount_not?: InputMaybe<Scalars['Int']>;
  delegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod_lt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  disputeManager?: InputMaybe<Scalars['Bytes']>;
  disputeManager_contains?: InputMaybe<Scalars['Bytes']>;
  disputeManager_gt?: InputMaybe<Scalars['Bytes']>;
  disputeManager_gte?: InputMaybe<Scalars['Bytes']>;
  disputeManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeManager_lt?: InputMaybe<Scalars['Bytes']>;
  disputeManager_lte?: InputMaybe<Scalars['Bytes']>;
  disputeManager_not?: InputMaybe<Scalars['Bytes']>;
  disputeManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  disputeManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_gt?: InputMaybe<Scalars['Int']>;
  epochCount_gte?: InputMaybe<Scalars['Int']>;
  epochCount_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount_lt?: InputMaybe<Scalars['Int']>;
  epochCount_lte?: InputMaybe<Scalars['Int']>;
  epochCount_not?: InputMaybe<Scalars['Int']>;
  epochCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_not?: InputMaybe<Scalars['Int']>;
  epochLength_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochManager?: InputMaybe<Scalars['Bytes']>;
  epochManagerImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManager_contains?: InputMaybe<Scalars['Bytes']>;
  epochManager_gt?: InputMaybe<Scalars['Bytes']>;
  epochManager_gte?: InputMaybe<Scalars['Bytes']>;
  epochManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  epochManager_lt?: InputMaybe<Scalars['Bytes']>;
  epochManager_lte?: InputMaybe<Scalars['Bytes']>;
  epochManager_not?: InputMaybe<Scalars['Bytes']>;
  epochManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  epochManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fishermanRewardPercentage?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  fishermanRewardPercentage_lt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  gns?: InputMaybe<Scalars['Bytes']>;
  gns_contains?: InputMaybe<Scalars['Bytes']>;
  gns_gt?: InputMaybe<Scalars['Bytes']>;
  gns_gte?: InputMaybe<Scalars['Bytes']>;
  gns_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gns_lt?: InputMaybe<Scalars['Bytes']>;
  gns_lte?: InputMaybe<Scalars['Bytes']>;
  gns_not?: InputMaybe<Scalars['Bytes']>;
  gns_not_contains?: InputMaybe<Scalars['Bytes']>;
  gns_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governor?: InputMaybe<Scalars['Bytes']>;
  governor_contains?: InputMaybe<Scalars['Bytes']>;
  governor_gt?: InputMaybe<Scalars['Bytes']>;
  governor_gte?: InputMaybe<Scalars['Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governor_lt?: InputMaybe<Scalars['Bytes']>;
  governor_lte?: InputMaybe<Scalars['Bytes']>;
  governor_not?: InputMaybe<Scalars['Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['Bytes']>;
  governor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  graphToken?: InputMaybe<Scalars['Bytes']>;
  graphToken_contains?: InputMaybe<Scalars['Bytes']>;
  graphToken_gt?: InputMaybe<Scalars['Bytes']>;
  graphToken_gte?: InputMaybe<Scalars['Bytes']>;
  graphToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  graphToken_lt?: InputMaybe<Scalars['Bytes']>;
  graphToken_lte?: InputMaybe<Scalars['Bytes']>;
  graphToken_not?: InputMaybe<Scalars['Bytes']>;
  graphToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  graphToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  isPartialPaused?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lastLengthUpdateBlock?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs_lt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumCurationDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumCurationDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake_lt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance_lt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownerTaxPercentage?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pauseGuardian?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_contains?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_gt?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_gte?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pauseGuardian_lt?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_lte?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_not?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_not_contains?: InputMaybe<Scalars['Bytes']>;
  pauseGuardian_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  protocolFeePercentage?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage_lt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rebateRatio?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rebateRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  rebateRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardsManager?: InputMaybe<Scalars['Bytes']>;
  rewardsManagerImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManager_contains?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_gt?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_gte?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardsManager_lt?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_lte?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_not?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardsManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  serviceRegistry?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_contains?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_gt?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_gte?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_in?: InputMaybe<Array<Scalars['Bytes']>>;
  serviceRegistry_lt?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_lte?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_not?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_not_contains?: InputMaybe<Scalars['Bytes']>;
  serviceRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  slashers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  slashingPercentage?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  staking?: InputMaybe<Scalars['Bytes']>;
  stakingImplementations?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  staking_contains?: InputMaybe<Scalars['Bytes']>;
  staking_gt?: InputMaybe<Scalars['Bytes']>;
  staking_gte?: InputMaybe<Scalars['Bytes']>;
  staking_in?: InputMaybe<Array<Scalars['Bytes']>>;
  staking_lt?: InputMaybe<Scalars['Bytes']>;
  staking_lte?: InputMaybe<Scalars['Bytes']>;
  staking_not?: InputMaybe<Scalars['Bytes']>;
  staking_not_contains?: InputMaybe<Scalars['Bytes']>;
  staking_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraphAvailabilityOracle?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_contains?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_gt?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_gte?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraphAvailabilityOracle_lt?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_lte?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_not?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_not_contains?: InputMaybe<Scalars['Bytes']>;
  subgraphAvailabilityOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod_lt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalledAutoMigrate?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledAutoMigrate_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledAutoMigrate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledDirectly?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalledDirectly_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTokensSignalledDirectly_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GraphNetwork_OrderBy {
  GrTinEth = 'GRTinETH',
  GrTinUsd = 'GRTinUSD',
  ActiveCuratorCount = 'activeCuratorCount',
  ActiveDelegationCount = 'activeDelegationCount',
  ActiveDelegatorCount = 'activeDelegatorCount',
  ActiveSubgraphCount = 'activeSubgraphCount',
  Arbitrator = 'arbitrator',
  AssetHolders = 'assetHolders',
  ChannelDisputeEpochs = 'channelDisputeEpochs',
  Controller = 'controller',
  Curation = 'curation',
  CurationImplementations = 'curationImplementations',
  CurationPercentage = 'curationPercentage',
  CurationTaxPercentage = 'curationTaxPercentage',
  CuratorCount = 'curatorCount',
  CurrentEpoch = 'currentEpoch',
  CurrentL1BlockNumber = 'currentL1BlockNumber',
  DefaultReserveRatio = 'defaultReserveRatio',
  DelegationCount = 'delegationCount',
  DelegationParametersCooldown = 'delegationParametersCooldown',
  DelegationRatio = 'delegationRatio',
  DelegationTaxPercentage = 'delegationTaxPercentage',
  DelegationUnbondingPeriod = 'delegationUnbondingPeriod',
  DelegatorCount = 'delegatorCount',
  DisputeManager = 'disputeManager',
  EpochCount = 'epochCount',
  EpochLength = 'epochLength',
  EpochManager = 'epochManager',
  EpochManagerImplementations = 'epochManagerImplementations',
  FishermanRewardPercentage = 'fishermanRewardPercentage',
  Gns = 'gns',
  Governor = 'governor',
  GraphToken = 'graphToken',
  Id = 'id',
  IndexerCount = 'indexerCount',
  IndexingSlashingPercentage = 'indexingSlashingPercentage',
  IsPartialPaused = 'isPartialPaused',
  IsPaused = 'isPaused',
  LastLengthUpdateBlock = 'lastLengthUpdateBlock',
  LastLengthUpdateEpoch = 'lastLengthUpdateEpoch',
  LastRunEpoch = 'lastRunEpoch',
  MaxAllocationEpochs = 'maxAllocationEpochs',
  MinimumCurationDeposit = 'minimumCurationDeposit',
  MinimumDisputeDeposit = 'minimumDisputeDeposit',
  MinimumIndexerStake = 'minimumIndexerStake',
  NetworkGrtIssuance = 'networkGRTIssuance',
  OwnerTaxPercentage = 'ownerTaxPercentage',
  PauseGuardian = 'pauseGuardian',
  ProtocolFeePercentage = 'protocolFeePercentage',
  QuerySlashingPercentage = 'querySlashingPercentage',
  RebateRatio = 'rebateRatio',
  RewardsManager = 'rewardsManager',
  RewardsManagerImplementations = 'rewardsManagerImplementations',
  ServiceRegistry = 'serviceRegistry',
  Slashers = 'slashers',
  SlashingPercentage = 'slashingPercentage',
  StakedIndexersCount = 'stakedIndexersCount',
  Staking = 'staking',
  StakingImplementations = 'stakingImplementations',
  SubgraphAvailabilityOracle = 'subgraphAvailabilityOracle',
  SubgraphCount = 'subgraphCount',
  SubgraphDeploymentCount = 'subgraphDeploymentCount',
  ThawingPeriod = 'thawingPeriod',
  TotalCuratorQueryFees = 'totalCuratorQueryFees',
  TotalDelegatedTokens = 'totalDelegatedTokens',
  TotalDelegatorQueryFeeRebates = 'totalDelegatorQueryFeeRebates',
  TotalGrtBurned = 'totalGRTBurned',
  TotalGrtDeposited = 'totalGRTDeposited',
  TotalGrtDepositedConfirmed = 'totalGRTDepositedConfirmed',
  TotalGrtMinted = 'totalGRTMinted',
  TotalGrtWithdrawn = 'totalGRTWithdrawn',
  TotalGrtWithdrawnConfirmed = 'totalGRTWithdrawnConfirmed',
  TotalIndexerQueryFeeRebates = 'totalIndexerQueryFeeRebates',
  TotalIndexerQueryFeesCollected = 'totalIndexerQueryFeesCollected',
  TotalIndexingDelegatorRewards = 'totalIndexingDelegatorRewards',
  TotalIndexingIndexerRewards = 'totalIndexingIndexerRewards',
  TotalIndexingRewards = 'totalIndexingRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalSupply = 'totalSupply',
  TotalTaxedQueryFees = 'totalTaxedQueryFees',
  TotalTokensAllocated = 'totalTokensAllocated',
  TotalTokensClaimable = 'totalTokensClaimable',
  TotalTokensSignalled = 'totalTokensSignalled',
  TotalTokensSignalledAutoMigrate = 'totalTokensSignalledAutoMigrate',
  TotalTokensSignalledDirectly = 'totalTokensSignalledDirectly',
  TotalTokensStaked = 'totalTokensStaked',
  TotalUnclaimedQueryFeeRebates = 'totalUnclaimedQueryFeeRebates',
  TotalUnstakedTokensLocked = 'totalUnstakedTokensLocked'
}

/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type Indexer = {
  __typename?: 'Indexer';
  /** Graph account of this indexer */
  account: GraphAccount;
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt'];
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<Allocation>;
  /** NOT IMPLEMENTED - Annualized rate of return for the indexer */
  annualizedReturn: Scalars['BigDecimal'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['BigDecimal'];
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['BigDecimal'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<DelegatedStake>;
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['BigDecimal'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['BigDecimal'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['BigDecimal'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['BigDecimal'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt'];
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Staking efficiency of the indexer */
  stakingEfficiency: Scalars['BigDecimal'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt'];
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<Allocation>;
  /** NOT IMPLEMENTED - Total return this indexer has earned */
  totalReturn: Scalars['BigDecimal'];
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt'];
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Allocation_Filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexerDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DelegatedStake_Filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type IndexerTotalAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Allocation_Filter>;
};

export type Indexer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocationCount?: InputMaybe<Scalars['Int']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationCount_lt?: InputMaybe<Scalars['Int']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']>;
  allocationCount_not?: InputMaybe<Scalars['Int']>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_?: InputMaybe<Allocation_Filter>;
  annualizedReturn?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegators_?: InputMaybe<DelegatedStake_Filter>;
  forcedClosures?: InputMaybe<Scalars['Int']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']>>;
  geoHash?: InputMaybe<Scalars['String']>;
  geoHash_contains?: InputMaybe<Scalars['String']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_gt?: InputMaybe<Scalars['String']>;
  geoHash_gte?: InputMaybe<Scalars['String']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_lt?: InputMaybe<Scalars['String']>;
  geoHash_lte?: InputMaybe<Scalars['String']>;
  geoHash_not?: InputMaybe<Scalars['String']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  overDelegationDilution?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  overDelegationDilution_lt?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['BigDecimal']>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ownStakeRatio?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ownStakeRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['BigDecimal']>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingEfficiency?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_gt?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_gte?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakingEfficiency_lt?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_lte?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_not?: InputMaybe<Scalars['BigDecimal']>;
  stakingEfficiency_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocations_?: InputMaybe<Allocation_Filter>;
  totalReturn?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Indexer_OrderBy {
  Account = 'account',
  AllocatedTokens = 'allocatedTokens',
  AllocationCount = 'allocationCount',
  Allocations = 'allocations',
  AnnualizedReturn = 'annualizedReturn',
  AvailableStake = 'availableStake',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  DelegatedCapacity = 'delegatedCapacity',
  DelegatedStakeRatio = 'delegatedStakeRatio',
  DelegatedTokens = 'delegatedTokens',
  DelegationExchangeRate = 'delegationExchangeRate',
  DelegatorIndexingRewards = 'delegatorIndexingRewards',
  DelegatorParameterCooldown = 'delegatorParameterCooldown',
  DelegatorQueryFees = 'delegatorQueryFees',
  DelegatorShares = 'delegatorShares',
  Delegators = 'delegators',
  ForcedClosures = 'forcedClosures',
  GeoHash = 'geoHash',
  Id = 'id',
  IndexerIndexingRewards = 'indexerIndexingRewards',
  IndexerRewardsOwnGenerationRatio = 'indexerRewardsOwnGenerationRatio',
  IndexingRewardCut = 'indexingRewardCut',
  IndexingRewardEffectiveCut = 'indexingRewardEffectiveCut',
  LastDelegationParameterUpdate = 'lastDelegationParameterUpdate',
  LockedTokens = 'lockedTokens',
  OverDelegationDilution = 'overDelegationDilution',
  OwnStakeRatio = 'ownStakeRatio',
  QueryFeeCut = 'queryFeeCut',
  QueryFeeEffectiveCut = 'queryFeeEffectiveCut',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  RewardsEarned = 'rewardsEarned',
  StakedTokens = 'stakedTokens',
  StakingEfficiency = 'stakingEfficiency',
  TokenCapacity = 'tokenCapacity',
  TokensLockedUntil = 'tokensLockedUntil',
  TotalAllocationCount = 'totalAllocationCount',
  TotalAllocations = 'totalAllocations',
  TotalReturn = 'totalReturn',
  UnstakedTokens = 'unstakedTokens',
  Url = 'url'
}

/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type NameSignal = {
  __typename?: 'NameSignal';
  /** [DEPRECATED] Curator average cost basis for this name signal on this subgraph. New field for further versions will be nameSignalAverageCostBasis */
  averageCostBasis: Scalars['BigDecimal'];
  /** [DEPRECATED] nameSignalAverageCostBasis / nameSignal. New field for further versions will be nameSignalAverageCostBasisPerSignal */
  averageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Eth address of the curator */
  curator: Curator;
  entityVersion: Scalars['Int'];
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  linkedEntity?: Maybe<NameSignal>;
  /** Shares of the name pool (GNS) that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Curator average cost basis for this name signal on this subgraph */
  nameSignalAverageCostBasis: Scalars['BigDecimal'];
  /** nameSignalAverageCostBasis / nameSignal */
  nameSignalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Actual signal shares that the name pool minted with the GRT provided by the curator */
  signal: Scalars['BigDecimal'];
  /** Curator average cost basis for the version signal on this subgraph name pool */
  signalAverageCostBasis: Scalars['BigDecimal'];
  /** signalAverageCostBasis / signal */
  signalAverageCostBasisPerSignal: Scalars['BigDecimal'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraph: Subgraph;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
};

/**
 * Auxiliary entity to be able to batch update NameSignal entities
 *
 */
export type NameSignalSubgraphRelation = {
  __typename?: 'NameSignalSubgraphRelation';
  /** Subgraph ID + index */
  id: Scalars['ID'];
  nameSignal: NameSignal;
  subgraph: Subgraph;
};

export type NameSignalSubgraphRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['String']>;
  nameSignal_?: InputMaybe<NameSignal_Filter>;
  nameSignal_contains?: InputMaybe<Scalars['String']>;
  nameSignal_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_gt?: InputMaybe<Scalars['String']>;
  nameSignal_gte?: InputMaybe<Scalars['String']>;
  nameSignal_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_lt?: InputMaybe<Scalars['String']>;
  nameSignal_lte?: InputMaybe<Scalars['String']>;
  nameSignal_not?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_not_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum NameSignalSubgraphRelation_OrderBy {
  Id = 'id',
  NameSignal = 'nameSignal',
  Subgraph = 'subgraph'
}

/**
 * All relevant data for a Name Signal Transaction in The Graph Network
 *
 */
export type NameSignalTransaction = Transaction & {
  __typename?: 'NameSignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  signer: GraphAccount;
  /** Subgraph where name signal was updated */
  subgraph: Subgraph;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: TransactionType;
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
};

export type NameSignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not?: InputMaybe<TransactionType>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  versionSignal?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum NameSignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  NameSignal = 'nameSignal',
  Signer = 'signer',
  Subgraph = 'subgraph',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  VersionSignal = 'versionSignal'
}

export type NameSignal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  averageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<NameSignal_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  nameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalAverageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  signalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signal_gt?: InputMaybe<Scalars['BigDecimal']>;
  signal_gte?: InputMaybe<Scalars['BigDecimal']>;
  signal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signal_lt?: InputMaybe<Scalars['BigDecimal']>;
  signal_lte?: InputMaybe<Scalars['BigDecimal']>;
  signal_not?: InputMaybe<Scalars['BigDecimal']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum NameSignal_OrderBy {
  AverageCostBasis = 'averageCostBasis',
  AverageCostBasisPerSignal = 'averageCostBasisPerSignal',
  Curator = 'curator',
  EntityVersion = 'entityVersion',
  Id = 'id',
  LastNameSignalChange = 'lastNameSignalChange',
  LinkedEntity = 'linkedEntity',
  NameSignal = 'nameSignal',
  NameSignalAverageCostBasis = 'nameSignalAverageCostBasis',
  NameSignalAverageCostBasisPerSignal = 'nameSignalAverageCostBasisPerSignal',
  RealizedRewards = 'realizedRewards',
  Signal = 'signal',
  SignalAverageCostBasis = 'signalAverageCostBasis',
  SignalAverageCostBasisPerSignal = 'signalAverageCostBasisPerSignal',
  SignalledTokens = 'signalledTokens',
  Subgraph = 'subgraph',
  UnsignalledTokens = 'unsignalledTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

export enum NameSystem {
  Ens = 'ENS'
}

export type Network = {
  __typename?: 'Network';
  deployments: Array<SubgraphDeployment>;
  id: Scalars['ID'];
};


export type NetworkDeploymentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphDeployment_Filter>;
};

export type Network_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deployments_?: InputMaybe<SubgraphDeployment_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Network_OrderBy {
  Deployments = 'deployments',
  Id = 'id'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type Pool = {
  __typename?: 'Pool';
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of cobbs douglas function  */
  claimedFees: Scalars['BigInt'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<Allocation>;
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt'];
  /** Epoch number of the pool */
  id: Scalars['ID'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt'];
};


/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type PoolClosedAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Allocation_Filter>;
};

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['BigInt']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocation_lt?: InputMaybe<Scalars['BigInt']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']>;
  allocation_not?: InputMaybe<Scalars['BigInt']>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedAllocations_?: InputMaybe<Allocation_Filter>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Pool_OrderBy {
  Allocation = 'allocation',
  ClaimedFees = 'claimedFees',
  ClosedAllocations = 'closedAllocations',
  CuratorRewards = 'curatorRewards',
  Id = 'id',
  TotalQueryFees = 'totalQueryFees'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  allocation?: Maybe<Allocation>;
  allocations: Array<Allocation>;
  attestation?: Maybe<Attestation>;
  attestations: Array<Attestation>;
  authorizedFunction?: Maybe<AuthorizedFunction>;
  authorizedFunctions: Array<AuthorizedFunction>;
  curator?: Maybe<Curator>;
  curatorSearch: Array<Curator>;
  curators: Array<Curator>;
  currentSubgraphDeploymentRelation?: Maybe<CurrentSubgraphDeploymentRelation>;
  currentSubgraphDeploymentRelations: Array<CurrentSubgraphDeploymentRelation>;
  delegatedStake?: Maybe<DelegatedStake>;
  delegatedStakes: Array<DelegatedStake>;
  delegator?: Maybe<Delegator>;
  delegatorSearch: Array<Delegator>;
  delegators: Array<Delegator>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  epoch?: Maybe<Epoch>;
  epoches: Array<Epoch>;
  graphAccount?: Maybe<GraphAccount>;
  graphAccountName?: Maybe<GraphAccountName>;
  graphAccountNames: Array<GraphAccountName>;
  graphAccounts: Array<GraphAccount>;
  graphNetwork?: Maybe<GraphNetwork>;
  graphNetworks: Array<GraphNetwork>;
  indexer?: Maybe<Indexer>;
  indexers: Array<Indexer>;
  nameSignal?: Maybe<NameSignal>;
  nameSignalSubgraphRelation?: Maybe<NameSignalSubgraphRelation>;
  nameSignalSubgraphRelations: Array<NameSignalSubgraphRelation>;
  nameSignalTransaction?: Maybe<NameSignalTransaction>;
  nameSignalTransactions: Array<NameSignalTransaction>;
  nameSignals: Array<NameSignal>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  signal?: Maybe<Signal>;
  signalTransaction?: Maybe<SignalTransaction>;
  signalTransactions: Array<SignalTransaction>;
  signals: Array<Signal>;
  subgraph?: Maybe<Subgraph>;
  subgraphCategories: Array<SubgraphCategory>;
  subgraphCategory?: Maybe<SubgraphCategory>;
  subgraphCategoryRelation?: Maybe<SubgraphCategoryRelation>;
  subgraphCategoryRelations: Array<SubgraphCategoryRelation>;
  subgraphDeployment?: Maybe<SubgraphDeployment>;
  subgraphDeployments: Array<SubgraphDeployment>;
  subgraphSearch: Array<Subgraph>;
  subgraphVersion?: Maybe<SubgraphVersion>;
  subgraphVersions: Array<SubgraphVersion>;
  subgraphs: Array<Subgraph>;
  tokenLockWallet?: Maybe<TokenLockWallet>;
  tokenLockWallets: Array<TokenLockWallet>;
  tokenManager?: Maybe<TokenManager>;
  tokenManagers: Array<TokenManager>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAllocationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAllocationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allocation_Filter>;
};


export type QueryAttestationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAttestationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Attestation_Filter>;
};


export type QueryAuthorizedFunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuthorizedFunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuthorizedFunction_Filter>;
};


export type QueryCuratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryCuratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Curator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Curator_Filter>;
};


export type QueryCurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentSubgraphDeploymentRelation_Filter>;
};


export type QueryDelegatedStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatedStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedStake_Filter>;
};


export type QueryDelegatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatorSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryDelegatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegator_Filter>;
};


export type QueryDisputeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDisputesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispute_Filter>;
};


export type QueryEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Epoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Epoch_Filter>;
};


export type QueryGraphAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGraphAccountNameArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGraphAccountNamesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphAccountName_Filter>;
};


export type QueryGraphAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphAccount_Filter>;
};


export type QueryGraphNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGraphNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphNetwork_Filter>;
};


export type QueryIndexerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIndexersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Indexer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Indexer_Filter>;
};


export type QueryNameSignalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignalSubgraphRelation_Filter>;
};


export type QueryNameSignalTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNameSignalTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignalTransaction_Filter>;
};


export type QueryNameSignalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignal_Filter>;
};


export type QueryNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Network_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QuerySignalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySignalTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySignalTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SignalTransaction_Filter>;
};


export type QuerySignalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Signal_Filter>;
};


export type QuerySubgraphArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubgraphCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphCategory_Filter>;
};


export type QuerySubgraphCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubgraphCategoryRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphCategoryRelation_Filter>;
};


export type QuerySubgraphDeploymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubgraphDeploymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphDeployment_Filter>;
};


export type QuerySubgraphSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QuerySubgraphVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubgraphVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphVersion_Filter>;
};


export type QuerySubgraphsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Subgraph_Filter>;
};


export type QueryTokenLockWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenLockWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenLockWallet_Filter>;
};


export type QueryTokenManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenManager_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

/**
 * TokenLockWallet Revocability Enum
 *
 */
export enum Revocability {
  Disabled = 'Disabled',
  Enabled = 'Enabled',
  NotSet = 'NotSet'
}

/**
 * Curator Signal for a single SubgraphDeployment
 *
 */
export type Signal = {
  __typename?: 'Signal';
  /** Curator average cost basis for this signal on this subgraph */
  averageCostBasis: Scalars['BigDecimal'];
  /** averageCostBasis / signal */
  averageCostBasisPerSignal: Scalars['BigDecimal'];
  /** Timetamp when this entity was created */
  createdAt: Scalars['Int'];
  /** Block number where this entity was created */
  createdAtBlock: Scalars['Int'];
  /** Eth address of the curator */
  curator: Curator;
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Timetamp when this entity was last updated */
  lastUpdatedAt: Scalars['Int'];
  /** Block number where this entity was last updated */
  lastUpdatedAtBlock: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraphDeployment: SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
};

/**
 * All relevant data for a Signal Transaction in The Graph Network
 *
 */
export type SignalTransaction = Transaction & {
  __typename?: 'SignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  signer: GraphAccount;
  /** Subgraph where signal was updated */
  subgraphDeployment: SubgraphDeployment;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: TransactionType;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type SignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not?: InputMaybe<TransactionType>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signal = 'signal',
  Signer = 'signer',
  SubgraphDeployment = 'subgraphDeployment',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  WithdrawalFees = 'withdrawalFees'
}

export type Signal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  averageCostBasis?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['BigDecimal']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAtBlock?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Signal_OrderBy {
  AverageCostBasis = 'averageCostBasis',
  AverageCostBasisPerSignal = 'averageCostBasisPerSignal',
  CreatedAt = 'createdAt',
  CreatedAtBlock = 'createdAtBlock',
  Curator = 'curator',
  Id = 'id',
  LastSignalChange = 'lastSignalChange',
  LastUpdatedAt = 'lastUpdatedAt',
  LastUpdatedAtBlock = 'lastUpdatedAtBlock',
  RealizedRewards = 'realizedRewards',
  Signal = 'signal',
  SignalledTokens = 'signalledTokens',
  SubgraphDeployment = 'subgraphDeployment',
  UnsignalledTokens = 'unsignalledTokens'
}

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type Subgraph = {
  __typename?: 'Subgraph';
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Categories that the subgraph belongs to. Modelled with a relation to allow for many-to-many relationship querying */
  categories: Array<SubgraphCategoryRelation>;
  /** Location of the code for this project */
  codeRepository?: Maybe<Scalars['String']>;
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['Bytes']>;
  /** CURRENT amount of tokens signalled on this subgraph latest version. Mirrors the total amount signalled towards the current deployment. */
  currentSignalledTokens: Scalars['BigInt'];
  /** Current version. Null if the subgraph is deprecated */
  currentVersion?: Maybe<SubgraphVersion>;
  currentVersionRelationEntity?: Maybe<CurrentSubgraphDeploymentRelation>;
  /** Short description of the subgraph */
  description?: Maybe<Scalars['String']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']>;
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Image in string format */
  image?: Maybe<Scalars['String']>;
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** Subgraph metadata ipfs hash */
  ipfsMetadataHash?: Maybe<Scalars['String']>;
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<Subgraph>;
  /** Subgraph metadata */
  metadataHash: Scalars['Bytes'];
  /** Whether the subgraph has been claimed/migrated. Can only be false for subgraphs created with V1 contracts that have not been claimed/migrated */
  migrated: Scalars['Boolean'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Total amount of NameSignal entities */
  nameSignalCount: Scalars['Int'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<NameSignal>;
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID?: Maybe<Scalars['String']>;
  /** NFT Image representation */
  nftImage?: Maybe<Scalars['String']>;
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation or for version 1 entities (since they use the old id) */
  oldID?: Maybe<Scalars['String']>;
  /** Graph account that owns this subgraph */
  owner: GraphAccount;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<SubgraphVersion>;
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Current amount of version signal managed by the name pool */
  signalAmount: Scalars['BigInt'];
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** List of all the subgraph versions included the current one */
  versions: Array<SubgraphVersion>;
  /** Projects website */
  website?: Maybe<Scalars['String']>;
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphCategoryRelation_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NameSignal_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphPastVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphVersion_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type SubgraphVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphVersion_Filter>;
};

export type SubgraphCategory = {
  __typename?: 'SubgraphCategory';
  id: Scalars['ID'];
  subgraphs: Array<SubgraphCategoryRelation>;
};


export type SubgraphCategorySubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphCategoryRelation_Filter>;
};

export type SubgraphCategoryRelation = {
  __typename?: 'SubgraphCategoryRelation';
  category: SubgraphCategory;
  id: Scalars['ID'];
  subgraph: Subgraph;
};

export type SubgraphCategoryRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  category?: InputMaybe<Scalars['String']>;
  category_?: InputMaybe<SubgraphCategory_Filter>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_contains_nocase?: InputMaybe<Scalars['String']>;
  category_ends_with?: InputMaybe<Scalars['String']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<Scalars['String']>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']>;
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<Scalars['String']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_starts_with?: InputMaybe<Scalars['String']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SubgraphCategoryRelation_OrderBy {
  Category = 'category',
  Id = 'id',
  Subgraph = 'subgraph'
}

export type SubgraphCategory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraphs_?: InputMaybe<SubgraphCategoryRelation_Filter>;
};

export enum SubgraphCategory_OrderBy {
  Id = 'id',
  Subgraphs = 'subgraphs'
}

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeployment = {
  __typename?: 'SubgraphDeployment';
  /** Amount of active Subgraph entities that are currently using this deployment. Deprecated subgraph entities are not counted */
  activeSubgraphCount: Scalars['Int'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<Signal>;
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** Amount of Subgraph entities that were currently using this deployment when they got deprecated */
  deprecatedSubgraphCount: Scalars['Int'];
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<Allocation>;
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** IPFS hash of the subgraph manifest */
  ipfsHash: Scalars['String'];
  /** Manifest file for this subgraph deployment */
  manifest?: Maybe<Scalars['String']>;
  /** Network where the contracts that the subgraph indexes are located */
  network?: Maybe<Network>;
  /** The original Subgraph that was deployed through GNS. Can be null if never created through GNS. Used for filtering in the Explorer */
  originalName?: Maybe<Scalars['String']>;
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['BigDecimal'];
  /** Total query fee rebates earned from the protocol, through the cobbs douglas formula. Does not include delegation fees */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Schema file for this subgraph deployment */
  schema?: Maybe<Scalars['String']>;
  /** IPFS hash of the schema file */
  schemaIpfsHash?: Maybe<Scalars['String']>;
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** Total amount of Subgraph entities that used this deployment at some point. subgraphCount >= activeSubgraphCount + deprecatedSubgraphCount */
  subgraphCount: Scalars['Int'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** The versions this subgraph deployment relates to */
  versions: Array<SubgraphVersion>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentCuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Signal_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentIndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Allocation_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type SubgraphDeploymentVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubgraphVersion_Filter>;
};

export type SubgraphDeployment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorSignals_?: InputMaybe<Signal_Filter>;
  deniedAt?: InputMaybe<Scalars['Int']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt_lt?: InputMaybe<Scalars['Int']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']>;
  deniedAt_not?: InputMaybe<Scalars['Int']>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerAllocations_?: InputMaybe<Allocation_Filter>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest?: InputMaybe<Scalars['String']>;
  manifest_contains?: InputMaybe<Scalars['String']>;
  manifest_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_ends_with?: InputMaybe<Scalars['String']>;
  manifest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_gt?: InputMaybe<Scalars['String']>;
  manifest_gte?: InputMaybe<Scalars['String']>;
  manifest_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_lt?: InputMaybe<Scalars['String']>;
  manifest_lte?: InputMaybe<Scalars['String']>;
  manifest_not?: InputMaybe<Scalars['String']>;
  manifest_not_contains?: InputMaybe<Scalars['String']>;
  manifest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_not_starts_with?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_starts_with?: InputMaybe<Scalars['String']>;
  manifest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_?: InputMaybe<Network_Filter>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  originalName_contains?: InputMaybe<Scalars['String']>;
  originalName_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_ends_with?: InputMaybe<Scalars['String']>;
  originalName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_gt?: InputMaybe<Scalars['String']>;
  originalName_gte?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_lt?: InputMaybe<Scalars['String']>;
  originalName_lte?: InputMaybe<Scalars['String']>;
  originalName_not?: InputMaybe<Scalars['String']>;
  originalName_not_contains?: InputMaybe<Scalars['String']>;
  originalName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_not_starts_with?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_starts_with?: InputMaybe<Scalars['String']>;
  originalName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricePerShare?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pricePerShare_lt?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['BigDecimal']>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  schema?: InputMaybe<Scalars['String']>;
  schemaIpfsHash?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_lt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_contains?: InputMaybe<Scalars['String']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_ends_with?: InputMaybe<Scalars['String']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schema_gt?: InputMaybe<Scalars['String']>;
  schema_gte?: InputMaybe<Scalars['String']>;
  schema_in?: InputMaybe<Array<Scalars['String']>>;
  schema_lt?: InputMaybe<Scalars['String']>;
  schema_lte?: InputMaybe<Scalars['String']>;
  schema_not?: InputMaybe<Scalars['String']>;
  schema_not_contains?: InputMaybe<Scalars['String']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schema_not_in?: InputMaybe<Array<Scalars['String']>>;
  schema_not_starts_with?: InputMaybe<Scalars['String']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_starts_with?: InputMaybe<Scalars['String']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<SubgraphVersion_Filter>;
};

export enum SubgraphDeployment_OrderBy {
  ActiveSubgraphCount = 'activeSubgraphCount',
  CreatedAt = 'createdAt',
  CuratorFeeRewards = 'curatorFeeRewards',
  CuratorSignals = 'curatorSignals',
  DeniedAt = 'deniedAt',
  DeprecatedSubgraphCount = 'deprecatedSubgraphCount',
  Id = 'id',
  IndexerAllocations = 'indexerAllocations',
  IndexingDelegatorRewardAmount = 'indexingDelegatorRewardAmount',
  IndexingIndexerRewardAmount = 'indexingIndexerRewardAmount',
  IndexingRewardAmount = 'indexingRewardAmount',
  IpfsHash = 'ipfsHash',
  Manifest = 'manifest',
  Network = 'network',
  OriginalName = 'originalName',
  PricePerShare = 'pricePerShare',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesAmount = 'queryFeesAmount',
  ReserveRatio = 'reserveRatio',
  Schema = 'schema',
  SchemaIpfsHash = 'schemaIpfsHash',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  StakedTokens = 'stakedTokens',
  SubgraphCount = 'subgraphCount',
  UnsignalledTokens = 'unsignalledTokens',
  Versions = 'versions'
}

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 *
 */
export type SubgraphVersion = {
  __typename?: 'SubgraphVersion';
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Short description of the version */
  description?: Maybe<Scalars['String']>;
  entityVersion: Scalars['Int'];
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  /** Semantic versioning label */
  label?: Maybe<Scalars['String']>;
  linkedEntity?: Maybe<SubgraphVersion>;
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['Bytes']>;
  /** Subgraph of this version */
  subgraph: Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
};

export type SubgraphVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<SubgraphVersion_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum SubgraphVersion_OrderBy {
  CreatedAt = 'createdAt',
  Description = 'description',
  EntityVersion = 'entityVersion',
  Id = 'id',
  Label = 'label',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Subgraph = 'subgraph',
  SubgraphDeployment = 'subgraphDeployment',
  Version = 'version'
}

export type Subgraph_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  categories_?: InputMaybe<SubgraphCategoryRelation_Filter>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorAddress?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creatorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currentSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVersion?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_?: InputMaybe<CurrentSubgraphDeploymentRelation_Filter>;
  currentVersionRelationEntity_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_lt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_?: InputMaybe<SubgraphVersion_Filter>;
  currentVersion_contains?: InputMaybe<Scalars['String']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_gt?: InputMaybe<Scalars['String']>;
  currentVersion_gte?: InputMaybe<Scalars['String']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_lt?: InputMaybe<Scalars['String']>;
  currentVersion_lte?: InputMaybe<Scalars['String']>;
  currentVersion_not?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  ipfsMetadataHash?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Subgraph_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  migrated?: InputMaybe<Scalars['Boolean']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated_not?: InputMaybe<Scalars['Boolean']>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignals_?: InputMaybe<NameSignal_Filter>;
  nftID?: InputMaybe<Scalars['String']>;
  nftID_contains?: InputMaybe<Scalars['String']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_ends_with?: InputMaybe<Scalars['String']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_gt?: InputMaybe<Scalars['String']>;
  nftID_gte?: InputMaybe<Scalars['String']>;
  nftID_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_lt?: InputMaybe<Scalars['String']>;
  nftID_lte?: InputMaybe<Scalars['String']>;
  nftID_not?: InputMaybe<Scalars['String']>;
  nftID_not_contains?: InputMaybe<Scalars['String']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_starts_with?: InputMaybe<Scalars['String']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage?: InputMaybe<Scalars['String']>;
  nftImage_contains?: InputMaybe<Scalars['String']>;
  nftImage_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_gt?: InputMaybe<Scalars['String']>;
  nftImage_gte?: InputMaybe<Scalars['String']>;
  nftImage_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_lt?: InputMaybe<Scalars['String']>;
  nftImage_lte?: InputMaybe<Scalars['String']>;
  nftImage_not?: InputMaybe<Scalars['String']>;
  nftImage_not_contains?: InputMaybe<Scalars['String']>;
  nftImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_not_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID?: InputMaybe<Scalars['String']>;
  oldID_contains?: InputMaybe<Scalars['String']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_ends_with?: InputMaybe<Scalars['String']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_gt?: InputMaybe<Scalars['String']>;
  oldID_gte?: InputMaybe<Scalars['String']>;
  oldID_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_lt?: InputMaybe<Scalars['String']>;
  oldID_lte?: InputMaybe<Scalars['String']>;
  oldID_not?: InputMaybe<Scalars['String']>;
  oldID_not_contains?: InputMaybe<Scalars['String']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_starts_with?: InputMaybe<Scalars['String']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<GraphAccount_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pastVersions_?: InputMaybe<SubgraphVersion_Filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  versionCount?: InputMaybe<Scalars['BigInt']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<SubgraphVersion_Filter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Subgraph_OrderBy {
  Active = 'active',
  Categories = 'categories',
  CodeRepository = 'codeRepository',
  CreatedAt = 'createdAt',
  CreatorAddress = 'creatorAddress',
  CurrentSignalledTokens = 'currentSignalledTokens',
  CurrentVersion = 'currentVersion',
  CurrentVersionRelationEntity = 'currentVersionRelationEntity',
  Description = 'description',
  DisplayName = 'displayName',
  EntityVersion = 'entityVersion',
  Id = 'id',
  Image = 'image',
  Initializing = 'initializing',
  IpfsMetadataHash = 'ipfsMetadataHash',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Migrated = 'migrated',
  NameSignalAmount = 'nameSignalAmount',
  NameSignalCount = 'nameSignalCount',
  NameSignals = 'nameSignals',
  NftId = 'nftID',
  NftImage = 'nftImage',
  OldId = 'oldID',
  Owner = 'owner',
  PastVersions = 'pastVersions',
  ReserveRatio = 'reserveRatio',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  SubgraphNumber = 'subgraphNumber',
  UnsignalledTokens = 'unsignalledTokens',
  UpdatedAt = 'updatedAt',
  VersionCount = 'versionCount',
  Versions = 'versions',
  Website = 'website',
  WithdrawableTokens = 'withdrawableTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  allocation?: Maybe<Allocation>;
  allocations: Array<Allocation>;
  attestation?: Maybe<Attestation>;
  attestations: Array<Attestation>;
  authorizedFunction?: Maybe<AuthorizedFunction>;
  authorizedFunctions: Array<AuthorizedFunction>;
  curator?: Maybe<Curator>;
  curators: Array<Curator>;
  currentSubgraphDeploymentRelation?: Maybe<CurrentSubgraphDeploymentRelation>;
  currentSubgraphDeploymentRelations: Array<CurrentSubgraphDeploymentRelation>;
  delegatedStake?: Maybe<DelegatedStake>;
  delegatedStakes: Array<DelegatedStake>;
  delegator?: Maybe<Delegator>;
  delegators: Array<Delegator>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  epoch?: Maybe<Epoch>;
  epoches: Array<Epoch>;
  graphAccount?: Maybe<GraphAccount>;
  graphAccountName?: Maybe<GraphAccountName>;
  graphAccountNames: Array<GraphAccountName>;
  graphAccounts: Array<GraphAccount>;
  graphNetwork?: Maybe<GraphNetwork>;
  graphNetworks: Array<GraphNetwork>;
  indexer?: Maybe<Indexer>;
  indexers: Array<Indexer>;
  nameSignal?: Maybe<NameSignal>;
  nameSignalSubgraphRelation?: Maybe<NameSignalSubgraphRelation>;
  nameSignalSubgraphRelations: Array<NameSignalSubgraphRelation>;
  nameSignalTransaction?: Maybe<NameSignalTransaction>;
  nameSignalTransactions: Array<NameSignalTransaction>;
  nameSignals: Array<NameSignal>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  signal?: Maybe<Signal>;
  signalTransaction?: Maybe<SignalTransaction>;
  signalTransactions: Array<SignalTransaction>;
  signals: Array<Signal>;
  subgraph?: Maybe<Subgraph>;
  subgraphCategories: Array<SubgraphCategory>;
  subgraphCategory?: Maybe<SubgraphCategory>;
  subgraphCategoryRelation?: Maybe<SubgraphCategoryRelation>;
  subgraphCategoryRelations: Array<SubgraphCategoryRelation>;
  subgraphDeployment?: Maybe<SubgraphDeployment>;
  subgraphDeployments: Array<SubgraphDeployment>;
  subgraphVersion?: Maybe<SubgraphVersion>;
  subgraphVersions: Array<SubgraphVersion>;
  subgraphs: Array<Subgraph>;
  tokenLockWallet?: Maybe<TokenLockWallet>;
  tokenLockWallets: Array<TokenLockWallet>;
  tokenManager?: Maybe<TokenManager>;
  tokenManagers: Array<TokenManager>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAllocationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAllocationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Allocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allocation_Filter>;
};


export type SubscriptionAttestationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAttestationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Attestation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Attestation_Filter>;
};


export type SubscriptionAuthorizedFunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuthorizedFunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuthorizedFunction_Filter>;
};


export type SubscriptionCuratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Curator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Curator_Filter>;
};


export type SubscriptionCurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentSubgraphDeploymentRelation_Filter>;
};


export type SubscriptionDelegatedStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatedStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedStake_Filter>;
};


export type SubscriptionDelegatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegator_Filter>;
};


export type SubscriptionDisputeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDisputesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispute_Filter>;
};


export type SubscriptionEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Epoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Epoch_Filter>;
};


export type SubscriptionGraphAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGraphAccountNameArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGraphAccountNamesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphAccountName_Filter>;
};


export type SubscriptionGraphAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphAccount_Filter>;
};


export type SubscriptionGraphNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGraphNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GraphNetwork_Filter>;
};


export type SubscriptionIndexerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIndexersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Indexer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Indexer_Filter>;
};


export type SubscriptionNameSignalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignalSubgraphRelation_Filter>;
};


export type SubscriptionNameSignalTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNameSignalTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignalTransaction_Filter>;
};


export type SubscriptionNameSignalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSignal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NameSignal_Filter>;
};


export type SubscriptionNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Network_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionSignalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSignalTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSignalTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SignalTransaction_Filter>;
};


export type SubscriptionSignalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Signal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Signal_Filter>;
};


export type SubscriptionSubgraphArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubgraphCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphCategory_Filter>;
};


export type SubscriptionSubgraphCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubgraphCategoryRelationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphCategoryRelation_Filter>;
};


export type SubscriptionSubgraphDeploymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubgraphDeploymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphDeployment_Filter>;
};


export type SubscriptionSubgraphVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubgraphVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SubgraphVersion_Filter>;
};


export type SubscriptionSubgraphsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Subgraph_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Subgraph_Filter>;
};


export type SubscriptionTokenLockWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenLockWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenLockWallet_Filter>;
};


export type SubscriptionTokenManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenManager_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

/**
 * Token Lock Wallets which hold locked GRT
 *
 */
export type TokenLockWallet = {
  __typename?: 'TokenLockWallet';
  /** Address of the beneficiary of locked tokens */
  beneficiary: Scalars['Bytes'];
  /** The block this wlalet was created */
  blockNumberCreated: Scalars['BigInt'];
  /** End time of the release schedule */
  endTime: Scalars['BigInt'];
  /** The address of the token lock wallet */
  id: Scalars['ID'];
  /** The hash of the initializer */
  initHash: Scalars['Bytes'];
  /** Amount of tokens to be managed by the lock contract */
  managedAmount: Scalars['BigInt'];
  /** The Manager address */
  manager: Scalars['Bytes'];
  /** Number of periods between start time and end time */
  periods: Scalars['BigInt'];
  /** Time when the releases start */
  releaseStartTime: Scalars['BigInt'];
  /** Whether or not the contract is revocable */
  revocable?: Maybe<Revocability>;
  /** Start time of the release schedule */
  startTime: Scalars['BigInt'];
  /** The token being used (GRT) */
  token: Scalars['Bytes'];
  /** True if the beneficiary has approved addresses that the manager has approved */
  tokenDestinationsApproved: Scalars['Boolean'];
  /** The amount of tokens that have been resleased */
  tokensReleased: Scalars['BigInt'];
  /** The amount of tokens that have been revoked */
  tokensRevoked: Scalars['BigInt'];
  /** The amount of tokens that have been withdrawn */
  tokensWithdrawn: Scalars['BigInt'];
  /** The creation tx hash of the wallet */
  txHash: Scalars['Bytes'];
  /** Time the cliff vests, 0 if no cliff */
  vestingCliffTime: Scalars['BigInt'];
};

export type TokenLockWallet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumberCreated?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  initHash?: InputMaybe<Scalars['Bytes']>;
  initHash_contains?: InputMaybe<Scalars['Bytes']>;
  initHash_gt?: InputMaybe<Scalars['Bytes']>;
  initHash_gte?: InputMaybe<Scalars['Bytes']>;
  initHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initHash_lt?: InputMaybe<Scalars['Bytes']>;
  initHash_lte?: InputMaybe<Scalars['Bytes']>;
  initHash_not?: InputMaybe<Scalars['Bytes']>;
  initHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  initHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  managedAmount?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  managedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_gt?: InputMaybe<Scalars['Bytes']>;
  manager_gte?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_lt?: InputMaybe<Scalars['Bytes']>;
  manager_lte?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revocable?: InputMaybe<Revocability>;
  revocable_in?: InputMaybe<Array<Revocability>>;
  revocable_not?: InputMaybe<Revocability>;
  revocable_not_in?: InputMaybe<Array<Revocability>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  tokenDestinationsApproved?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokenDestinationsApproved_not?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokensReleased?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensReleased_lt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vestingCliffTime?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime_lt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenLockWallet_OrderBy {
  Beneficiary = 'beneficiary',
  BlockNumberCreated = 'blockNumberCreated',
  EndTime = 'endTime',
  Id = 'id',
  InitHash = 'initHash',
  ManagedAmount = 'managedAmount',
  Manager = 'manager',
  Periods = 'periods',
  ReleaseStartTime = 'releaseStartTime',
  Revocable = 'revocable',
  StartTime = 'startTime',
  Token = 'token',
  TokenDestinationsApproved = 'tokenDestinationsApproved',
  TokensReleased = 'tokensReleased',
  TokensRevoked = 'tokensRevoked',
  TokensWithdrawn = 'tokensWithdrawn',
  TxHash = 'txHash',
  VestingCliffTime = 'vestingCliffTime'
}

/**
 * The Token manager data
 *
 */
export type TokenManager = {
  __typename?: 'TokenManager';
  /** List of function call authorizations */
  authorizedFunctions?: Maybe<Array<AuthorizedFunction>>;
  /** Token manager address */
  id: Scalars['ID'];
  /** Master copy address */
  masterCopy: Scalars['Bytes'];
  /** List of addresses that are allowed to pull funds */
  tokenDestinations?: Maybe<Array<Scalars['Bytes']>>;
  /** Token lock count of contracts created */
  tokenLockCount: Scalars['BigInt'];
  /** Tokens stored in manger through deposit or withdraw */
  tokens: Scalars['BigInt'];
};


/**
 * The Token manager data
 *
 */
export type TokenManagerAuthorizedFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorizedFunction_Filter>;
};

export type TokenManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  authorizedFunctions_?: InputMaybe<AuthorizedFunction_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterCopy?: InputMaybe<Scalars['Bytes']>;
  masterCopy_contains?: InputMaybe<Scalars['Bytes']>;
  masterCopy_gt?: InputMaybe<Scalars['Bytes']>;
  masterCopy_gte?: InputMaybe<Scalars['Bytes']>;
  masterCopy_in?: InputMaybe<Array<Scalars['Bytes']>>;
  masterCopy_lt?: InputMaybe<Scalars['Bytes']>;
  masterCopy_lte?: InputMaybe<Scalars['Bytes']>;
  masterCopy_not?: InputMaybe<Scalars['Bytes']>;
  masterCopy_not_contains?: InputMaybe<Scalars['Bytes']>;
  masterCopy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenDestinations_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenLockCount?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLockCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenManager_OrderBy {
  AuthorizedFunctions = 'authorizedFunctions',
  Id = 'id',
  MasterCopy = 'masterCopy',
  TokenDestinations = 'tokenDestinations',
  TokenLockCount = 'tokenLockCount',
  Tokens = 'tokens'
}

/**
 * A generic transaction in The Graph Network
 *
 */
export type Transaction = {
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Signer of the transaction */
  signer: GraphAccount;
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Type of Graph Network transaction */
  type: TransactionType;
};

export enum TransactionType {
  BurnNSignal = 'BurnNSignal',
  BurnSignal = 'BurnSignal',
  MintNSignal = 'MintNSignal',
  MintSignal = 'MintSignal',
  Stake = 'Stake',
  Unstake = 'Unstake'
}

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not?: InputMaybe<TransactionType>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signer = 'signer',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetEpochsQueryVariables = Exact<{
  orderBy?: InputMaybe<Epoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetEpochsQuery = { __typename?: 'Query', epoches: Array<{ __typename?: 'Epoch', id: string, startBlock: number, endBlock: number, signalledTokens: any, stakeDeposited: any, totalQueryFees: any, taxedQueryFees: any, queryFeesCollected: any, curatorQueryFees: any, queryFeeRebates: any, totalRewards: any, totalIndexerRewards: any, totalDelegatorRewards: any }> };


export const GetEpochsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEpochs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Epoch_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epoches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startBlock"}},{"kind":"Field","name":{"kind":"Name","value":"endBlock"}},{"kind":"Field","name":{"kind":"Name","value":"signalledTokens"}},{"kind":"Field","name":{"kind":"Name","value":"stakeDeposited"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueryFees"}},{"kind":"Field","name":{"kind":"Name","value":"taxedQueryFees"}},{"kind":"Field","name":{"kind":"Name","value":"queryFeesCollected"}},{"kind":"Field","name":{"kind":"Name","value":"curatorQueryFees"}},{"kind":"Field","name":{"kind":"Name","value":"queryFeeRebates"}},{"kind":"Field","name":{"kind":"Name","value":"totalRewards"}},{"kind":"Field","name":{"kind":"Name","value":"totalIndexerRewards"}},{"kind":"Field","name":{"kind":"Name","value":"totalDelegatorRewards"}}]}}]}}]} as unknown as DocumentNode<GetEpochsQuery, GetEpochsQueryVariables>;