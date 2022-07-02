import { gql } from '@apollo/client';
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
  bigint: any;
  float8: any;
  numeric: any;
  timestamptz: any;
};

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "bid" */
export type Bid = {
  __typename?: 'bid';
  assetBuy: Scalars['bigint'];
  assetSell: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['Int'];
  id: Scalars['String'];
  owner: Scalars['String'];
  price: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  volume: Scalars['float8'];
  volumeAsa2: Scalars['bigint'];
};

/** aggregated selection of "bid" */
export type Bid_Aggregate = {
  __typename?: 'bid_aggregate';
  aggregate?: Maybe<Bid_Aggregate_Fields>;
  nodes: Array<Bid>;
};

/** aggregate fields of "bid" */
export type Bid_Aggregate_Fields = {
  __typename?: 'bid_aggregate_fields';
  avg?: Maybe<Bid_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bid_Max_Fields>;
  min?: Maybe<Bid_Min_Fields>;
  stddev?: Maybe<Bid_Stddev_Fields>;
  stddev_pop?: Maybe<Bid_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bid_Stddev_Samp_Fields>;
  sum?: Maybe<Bid_Sum_Fields>;
  var_pop?: Maybe<Bid_Var_Pop_Fields>;
  var_samp?: Maybe<Bid_Var_Samp_Fields>;
  variance?: Maybe<Bid_Variance_Fields>;
};


/** aggregate fields of "bid" */
export type Bid_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bid_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Bid_Avg_Fields = {
  __typename?: 'bid_avg_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
export type Bid_Bool_Exp = {
  _and?: InputMaybe<Array<Bid_Bool_Exp>>;
  _not?: InputMaybe<Bid_Bool_Exp>;
  _or?: InputMaybe<Array<Bid_Bool_Exp>>;
  assetBuy?: InputMaybe<Bigint_Comparison_Exp>;
  assetSell?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  volume?: InputMaybe<Float8_Comparison_Exp>;
  volumeAsa2?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "bid" */
export enum Bid_Constraint {
  /** unique or primary key constraint on columns "id" */
  BidPkey = 'bid_pkey'
}

/** input type for incrementing numeric columns in table "bid" */
export type Bid_Inc_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  volume?: InputMaybe<Scalars['float8']>;
  volumeAsa2?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "bid" */
export type Bid_Insert_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  volume?: InputMaybe<Scalars['float8']>;
  volumeAsa2?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Bid_Max_Fields = {
  __typename?: 'bid_max_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['float8']>;
  volumeAsa2?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Bid_Min_Fields = {
  __typename?: 'bid_min_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['float8']>;
  volumeAsa2?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "bid" */
export type Bid_Mutation_Response = {
  __typename?: 'bid_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bid>;
};

/** on_conflict condition type for table "bid" */
export type Bid_On_Conflict = {
  constraint: Bid_Constraint;
  update_columns?: Array<Bid_Update_Column>;
  where?: InputMaybe<Bid_Bool_Exp>;
};

/** Ordering options when selecting data from "bid". */
export type Bid_Order_By = {
  assetBuy?: InputMaybe<Order_By>;
  assetSell?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
  volumeAsa2?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bid */
export type Bid_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "bid" */
export enum Bid_Select_Column {
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume',
  /** column name */
  VolumeAsa2 = 'volumeAsa2'
}

/** input type for updating data in table "bid" */
export type Bid_Set_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  volume?: InputMaybe<Scalars['float8']>;
  volumeAsa2?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Bid_Stddev_Fields = {
  __typename?: 'bid_stddev_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Bid_Stddev_Pop_Fields = {
  __typename?: 'bid_stddev_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Bid_Stddev_Samp_Fields = {
  __typename?: 'bid_stddev_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Bid_Sum_Fields = {
  __typename?: 'bid_sum_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  volume?: Maybe<Scalars['float8']>;
  volumeAsa2?: Maybe<Scalars['bigint']>;
};

/** update columns of table "bid" */
export enum Bid_Update_Column {
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume',
  /** column name */
  VolumeAsa2 = 'volumeAsa2'
}

/** aggregate var_pop on columns */
export type Bid_Var_Pop_Fields = {
  __typename?: 'bid_var_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Bid_Var_Samp_Fields = {
  __typename?: 'bid_var_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Bid_Variance_Fields = {
  __typename?: 'bid_variance_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volumeAsa2?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "bids" */
export type Bids = {
  __typename?: 'bids';
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  owner: Scalars['String'];
  price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "bids" */
export type Bids_Aggregate = {
  __typename?: 'bids_aggregate';
  aggregate?: Maybe<Bids_Aggregate_Fields>;
  nodes: Array<Bids>;
};

/** aggregate fields of "bids" */
export type Bids_Aggregate_Fields = {
  __typename?: 'bids_aggregate_fields';
  avg?: Maybe<Bids_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bids_Max_Fields>;
  min?: Maybe<Bids_Min_Fields>;
  stddev?: Maybe<Bids_Stddev_Fields>;
  stddev_pop?: Maybe<Bids_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bids_Stddev_Samp_Fields>;
  sum?: Maybe<Bids_Sum_Fields>;
  var_pop?: Maybe<Bids_Var_Pop_Fields>;
  var_samp?: Maybe<Bids_Var_Samp_Fields>;
  variance?: Maybe<Bids_Variance_Fields>;
};


/** aggregate fields of "bids" */
export type Bids_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bids_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Bids_Avg_Fields = {
  __typename?: 'bids_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bids". All fields are combined with a logical 'AND'. */
export type Bids_Bool_Exp = {
  _and?: InputMaybe<Array<Bids_Bool_Exp>>;
  _not?: InputMaybe<Bids_Bool_Exp>;
  _or?: InputMaybe<Array<Bids_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bids" */
export enum Bids_Constraint {
  /** unique or primary key constraint on columns "id" */
  BidsPkey = 'bids_pkey'
}

/** input type for incrementing numeric columns in table "bids" */
export type Bids_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "bids" */
export type Bids_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bids_Max_Fields = {
  __typename?: 'bids_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Bids_Min_Fields = {
  __typename?: 'bids_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "bids" */
export type Bids_Mutation_Response = {
  __typename?: 'bids_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bids>;
};

/** on_conflict condition type for table "bids" */
export type Bids_On_Conflict = {
  constraint: Bids_Constraint;
  update_columns?: Array<Bids_Update_Column>;
  where?: InputMaybe<Bids_Bool_Exp>;
};

/** Ordering options when selecting data from "bids". */
export type Bids_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bids */
export type Bids_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "bids" */
export enum Bids_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "bids" */
export type Bids_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Bids_Stddev_Fields = {
  __typename?: 'bids_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Bids_Stddev_Pop_Fields = {
  __typename?: 'bids_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Bids_Stddev_Samp_Fields = {
  __typename?: 'bids_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Bids_Sum_Fields = {
  __typename?: 'bids_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "bids" */
export enum Bids_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Bids_Var_Pop_Fields = {
  __typename?: 'bids_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Bids_Var_Samp_Fields = {
  __typename?: 'bids_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Bids_Variance_Fields = {
  __typename?: 'bids_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bigint_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _cast?: InputMaybe<Bigint_Cast_Exp>;
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "environment" */
export type Environment = {
  __typename?: 'environment';
  created_at: Scalars['timestamptz'];
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "environment" */
export type Environment_Aggregate = {
  __typename?: 'environment_aggregate';
  aggregate?: Maybe<Environment_Aggregate_Fields>;
  nodes: Array<Environment>;
};

/** aggregate fields of "environment" */
export type Environment_Aggregate_Fields = {
  __typename?: 'environment_aggregate_fields';
  avg?: Maybe<Environment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Environment_Max_Fields>;
  min?: Maybe<Environment_Min_Fields>;
  stddev?: Maybe<Environment_Stddev_Fields>;
  stddev_pop?: Maybe<Environment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Environment_Stddev_Samp_Fields>;
  sum?: Maybe<Environment_Sum_Fields>;
  var_pop?: Maybe<Environment_Var_Pop_Fields>;
  var_samp?: Maybe<Environment_Var_Samp_Fields>;
  variance?: Maybe<Environment_Variance_Fields>;
};


/** aggregate fields of "environment" */
export type Environment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Environment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Environment_Avg_Fields = {
  __typename?: 'environment_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "environment". All fields are combined with a logical 'AND'. */
export type Environment_Bool_Exp = {
  _and?: InputMaybe<Array<Environment_Bool_Exp>>;
  _not?: InputMaybe<Environment_Bool_Exp>;
  _or?: InputMaybe<Array<Environment_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "environment" */
export enum Environment_Constraint {
  /** unique or primary key constraint on columns "hash", "name" */
  EnvironmentNameHashKey = 'environment_name_hash_key',
  /** unique or primary key constraint on columns "id" */
  EnvironmentPkey = 'environment_pkey'
}

/** input type for incrementing numeric columns in table "environment" */
export type Environment_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "environment" */
export type Environment_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Environment_Max_Fields = {
  __typename?: 'environment_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Environment_Min_Fields = {
  __typename?: 'environment_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "environment" */
export type Environment_Mutation_Response = {
  __typename?: 'environment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Environment>;
};

/** on_conflict condition type for table "environment" */
export type Environment_On_Conflict = {
  constraint: Environment_Constraint;
  update_columns?: Array<Environment_Update_Column>;
  where?: InputMaybe<Environment_Bool_Exp>;
};

/** Ordering options when selecting data from "environment". */
export type Environment_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: environment */
export type Environment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "environment" */
export enum Environment_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "environment" */
export type Environment_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Environment_Stddev_Fields = {
  __typename?: 'environment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Environment_Stddev_Pop_Fields = {
  __typename?: 'environment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Environment_Stddev_Samp_Fields = {
  __typename?: 'environment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Environment_Sum_Fields = {
  __typename?: 'environment_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "environment" */
export enum Environment_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Environment_Var_Pop_Fields = {
  __typename?: 'environment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Environment_Var_Samp_Fields = {
  __typename?: 'environment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Environment_Variance_Fields = {
  __typename?: 'environment_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "escrow" */
export type Escrow = {
  __typename?: 'escrow';
  address: Scalars['String'];
  assetBuy: Scalars['bigint'];
  assetSell: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['Int'];
  lsig: Scalars['String'];
  multiplier: Scalars['bigint'];
  price: Scalars['bigint'];
  seller: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  ver: Scalars['String'];
};

/** aggregated selection of "escrow" */
export type Escrow_Aggregate = {
  __typename?: 'escrow_aggregate';
  aggregate?: Maybe<Escrow_Aggregate_Fields>;
  nodes: Array<Escrow>;
};

/** aggregate fields of "escrow" */
export type Escrow_Aggregate_Fields = {
  __typename?: 'escrow_aggregate_fields';
  avg?: Maybe<Escrow_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Escrow_Max_Fields>;
  min?: Maybe<Escrow_Min_Fields>;
  stddev?: Maybe<Escrow_Stddev_Fields>;
  stddev_pop?: Maybe<Escrow_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Escrow_Stddev_Samp_Fields>;
  sum?: Maybe<Escrow_Sum_Fields>;
  var_pop?: Maybe<Escrow_Var_Pop_Fields>;
  var_samp?: Maybe<Escrow_Var_Samp_Fields>;
  variance?: Maybe<Escrow_Variance_Fields>;
};


/** aggregate fields of "escrow" */
export type Escrow_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Escrow_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Escrow_Avg_Fields = {
  __typename?: 'escrow_avg_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "escrow". All fields are combined with a logical 'AND'. */
export type Escrow_Bool_Exp = {
  _and?: InputMaybe<Array<Escrow_Bool_Exp>>;
  _not?: InputMaybe<Escrow_Bool_Exp>;
  _or?: InputMaybe<Array<Escrow_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  assetBuy?: InputMaybe<Bigint_Comparison_Exp>;
  assetSell?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<Int_Comparison_Exp>;
  lsig?: InputMaybe<String_Comparison_Exp>;
  multiplier?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  seller?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  ver?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "escrow" */
export enum Escrow_Constraint {
  /** unique or primary key constraint on columns "address" */
  EscrowPkey = 'escrow_pkey'
}

/** input type for incrementing numeric columns in table "escrow" */
export type Escrow_Inc_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['Int']>;
  multiplier?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "escrow" */
export type Escrow_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  lsig?: InputMaybe<Scalars['String']>;
  multiplier?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['bigint']>;
  seller?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  ver?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Escrow_Max_Fields = {
  __typename?: 'escrow_max_fields';
  address?: Maybe<Scalars['String']>;
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  lsig?: Maybe<Scalars['String']>;
  multiplier?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['bigint']>;
  seller?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  ver?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Escrow_Min_Fields = {
  __typename?: 'escrow_min_fields';
  address?: Maybe<Scalars['String']>;
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  lsig?: Maybe<Scalars['String']>;
  multiplier?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['bigint']>;
  seller?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  ver?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "escrow" */
export type Escrow_Mutation_Response = {
  __typename?: 'escrow_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Escrow>;
};

/** on_conflict condition type for table "escrow" */
export type Escrow_On_Conflict = {
  constraint: Escrow_Constraint;
  update_columns?: Array<Escrow_Update_Column>;
  where?: InputMaybe<Escrow_Bool_Exp>;
};

/** Ordering options when selecting data from "escrow". */
export type Escrow_Order_By = {
  address?: InputMaybe<Order_By>;
  assetBuy?: InputMaybe<Order_By>;
  assetSell?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  lsig?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  seller?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  ver?: InputMaybe<Order_By>;
};

/** primary key columns input for table: escrow */
export type Escrow_Pk_Columns_Input = {
  address: Scalars['String'];
};

/** select columns of table "escrow" */
export enum Escrow_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Lsig = 'lsig',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  Price = 'price',
  /** column name */
  Seller = 'seller',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Ver = 'ver'
}

/** input type for updating data in table "escrow" */
export type Escrow_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  lsig?: InputMaybe<Scalars['String']>;
  multiplier?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['bigint']>;
  seller?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  ver?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Escrow_Stddev_Fields = {
  __typename?: 'escrow_stddev_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Escrow_Stddev_Pop_Fields = {
  __typename?: 'escrow_stddev_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Escrow_Stddev_Samp_Fields = {
  __typename?: 'escrow_stddev_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Escrow_Sum_Fields = {
  __typename?: 'escrow_sum_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['bigint']>;
};

/** update columns of table "escrow" */
export enum Escrow_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Lsig = 'lsig',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  Price = 'price',
  /** column name */
  Seller = 'seller',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Ver = 'ver'
}

/** aggregate var_pop on columns */
export type Escrow_Var_Pop_Fields = {
  __typename?: 'escrow_var_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Escrow_Var_Samp_Fields = {
  __typename?: 'escrow_var_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Escrow_Variance_Fields = {
  __typename?: 'escrow_variance_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Float8_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _cast?: InputMaybe<Float8_Cast_Exp>;
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "indexer" */
export type Indexer = {
  __typename?: 'indexer';
  created_at: Scalars['timestamptz'];
  env: Scalars['Int'];
  id: Scalars['Int'];
  instance: Scalars['String'];
  round: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "indexer" */
export type Indexer_Aggregate = {
  __typename?: 'indexer_aggregate';
  aggregate?: Maybe<Indexer_Aggregate_Fields>;
  nodes: Array<Indexer>;
};

/** aggregate fields of "indexer" */
export type Indexer_Aggregate_Fields = {
  __typename?: 'indexer_aggregate_fields';
  avg?: Maybe<Indexer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Indexer_Max_Fields>;
  min?: Maybe<Indexer_Min_Fields>;
  stddev?: Maybe<Indexer_Stddev_Fields>;
  stddev_pop?: Maybe<Indexer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Indexer_Stddev_Samp_Fields>;
  sum?: Maybe<Indexer_Sum_Fields>;
  var_pop?: Maybe<Indexer_Var_Pop_Fields>;
  var_samp?: Maybe<Indexer_Var_Samp_Fields>;
  variance?: Maybe<Indexer_Variance_Fields>;
};


/** aggregate fields of "indexer" */
export type Indexer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Indexer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Indexer_Avg_Fields = {
  __typename?: 'indexer_avg_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "indexer". All fields are combined with a logical 'AND'. */
export type Indexer_Bool_Exp = {
  _and?: InputMaybe<Array<Indexer_Bool_Exp>>;
  _not?: InputMaybe<Indexer_Bool_Exp>;
  _or?: InputMaybe<Array<Indexer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  instance?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "indexer" */
export enum Indexer_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexerPkey = 'indexer_pkey'
}

/** input type for incrementing numeric columns in table "indexer" */
export type Indexer_Inc_Input = {
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "indexer" */
export type Indexer_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Indexer_Max_Fields = {
  __typename?: 'indexer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Indexer_Min_Fields = {
  __typename?: 'indexer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "indexer" */
export type Indexer_Mutation_Response = {
  __typename?: 'indexer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Indexer>;
};

/** on_conflict condition type for table "indexer" */
export type Indexer_On_Conflict = {
  constraint: Indexer_Constraint;
  update_columns?: Array<Indexer_Update_Column>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};

/** Ordering options when selecting data from "indexer". */
export type Indexer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: indexer */
export type Indexer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "indexer" */
export enum Indexer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Instance = 'instance',
  /** column name */
  Round = 'round',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "indexer" */
export type Indexer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Indexer_Stddev_Fields = {
  __typename?: 'indexer_stddev_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Indexer_Stddev_Pop_Fields = {
  __typename?: 'indexer_stddev_pop_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Indexer_Stddev_Samp_Fields = {
  __typename?: 'indexer_stddev_samp_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Indexer_Sum_Fields = {
  __typename?: 'indexer_sum_fields';
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
};

/** update columns of table "indexer" */
export enum Indexer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Instance = 'instance',
  /** column name */
  Round = 'round',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Indexer_Var_Pop_Fields = {
  __typename?: 'indexer_var_pop_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Indexer_Var_Samp_Fields = {
  __typename?: 'indexer_var_samp_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Indexer_Variance_Fields = {
  __typename?: 'indexer_variance_fields';
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bid" */
  delete_bid?: Maybe<Bid_Mutation_Response>;
  /** delete single row from the table: "bid" */
  delete_bid_by_pk?: Maybe<Bid>;
  /** delete data from the table: "bids" */
  delete_bids?: Maybe<Bids_Mutation_Response>;
  /** delete single row from the table: "bids" */
  delete_bids_by_pk?: Maybe<Bids>;
  /** delete data from the table: "environment" */
  delete_environment?: Maybe<Environment_Mutation_Response>;
  /** delete single row from the table: "environment" */
  delete_environment_by_pk?: Maybe<Environment>;
  /** delete data from the table: "escrow" */
  delete_escrow?: Maybe<Escrow_Mutation_Response>;
  /** delete single row from the table: "escrow" */
  delete_escrow_by_pk?: Maybe<Escrow>;
  /** delete data from the table: "indexer" */
  delete_indexer?: Maybe<Indexer_Mutation_Response>;
  /** delete single row from the table: "indexer" */
  delete_indexer_by_pk?: Maybe<Indexer>;
  /** delete data from the table: "offer" */
  delete_offer?: Maybe<Offer_Mutation_Response>;
  /** delete single row from the table: "offer" */
  delete_offer_by_pk?: Maybe<Offer>;
  /** delete data from the table: "offers" */
  delete_offers?: Maybe<Offers_Mutation_Response>;
  /** delete single row from the table: "offers" */
  delete_offers_by_pk?: Maybe<Offers>;
  /** delete data from the table: "trade" */
  delete_trade?: Maybe<Trade_Mutation_Response>;
  /** delete single row from the table: "trade" */
  delete_trade_by_pk?: Maybe<Trade>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** insert data into the table: "bid" */
  insert_bid?: Maybe<Bid_Mutation_Response>;
  /** insert a single row into the table: "bid" */
  insert_bid_one?: Maybe<Bid>;
  /** insert data into the table: "bids" */
  insert_bids?: Maybe<Bids_Mutation_Response>;
  /** insert a single row into the table: "bids" */
  insert_bids_one?: Maybe<Bids>;
  /** insert data into the table: "environment" */
  insert_environment?: Maybe<Environment_Mutation_Response>;
  /** insert a single row into the table: "environment" */
  insert_environment_one?: Maybe<Environment>;
  /** insert data into the table: "escrow" */
  insert_escrow?: Maybe<Escrow_Mutation_Response>;
  /** insert a single row into the table: "escrow" */
  insert_escrow_one?: Maybe<Escrow>;
  /** insert data into the table: "indexer" */
  insert_indexer?: Maybe<Indexer_Mutation_Response>;
  /** insert a single row into the table: "indexer" */
  insert_indexer_one?: Maybe<Indexer>;
  /** insert data into the table: "offer" */
  insert_offer?: Maybe<Offer_Mutation_Response>;
  /** insert a single row into the table: "offer" */
  insert_offer_one?: Maybe<Offer>;
  /** insert data into the table: "offers" */
  insert_offers?: Maybe<Offers_Mutation_Response>;
  /** insert a single row into the table: "offers" */
  insert_offers_one?: Maybe<Offers>;
  /** insert data into the table: "trade" */
  insert_trade?: Maybe<Trade_Mutation_Response>;
  /** insert a single row into the table: "trade" */
  insert_trade_one?: Maybe<Trade>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** update data of the table: "bid" */
  update_bid?: Maybe<Bid_Mutation_Response>;
  /** update single row of the table: "bid" */
  update_bid_by_pk?: Maybe<Bid>;
  /** update data of the table: "bids" */
  update_bids?: Maybe<Bids_Mutation_Response>;
  /** update single row of the table: "bids" */
  update_bids_by_pk?: Maybe<Bids>;
  /** update data of the table: "environment" */
  update_environment?: Maybe<Environment_Mutation_Response>;
  /** update single row of the table: "environment" */
  update_environment_by_pk?: Maybe<Environment>;
  /** update data of the table: "escrow" */
  update_escrow?: Maybe<Escrow_Mutation_Response>;
  /** update single row of the table: "escrow" */
  update_escrow_by_pk?: Maybe<Escrow>;
  /** update data of the table: "indexer" */
  update_indexer?: Maybe<Indexer_Mutation_Response>;
  /** update single row of the table: "indexer" */
  update_indexer_by_pk?: Maybe<Indexer>;
  /** update data of the table: "offer" */
  update_offer?: Maybe<Offer_Mutation_Response>;
  /** update single row of the table: "offer" */
  update_offer_by_pk?: Maybe<Offer>;
  /** update data of the table: "offers" */
  update_offers?: Maybe<Offers_Mutation_Response>;
  /** update single row of the table: "offers" */
  update_offers_by_pk?: Maybe<Offers>;
  /** update data of the table: "trade" */
  update_trade?: Maybe<Trade_Mutation_Response>;
  /** update single row of the table: "trade" */
  update_trade_by_pk?: Maybe<Trade>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
};


/** mutation root */
export type Mutation_RootDelete_BidArgs = {
  where: Bid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bid_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BidsArgs = {
  where: Bids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bids_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EnvironmentArgs = {
  where: Environment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Environment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EscrowArgs = {
  where: Escrow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Escrow_By_PkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_IndexerArgs = {
  where: Indexer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Indexer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OfferArgs = {
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offer_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OffersArgs = {
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offers_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TradeArgs = {
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trade_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_BidArgs = {
  objects: Array<Bid_Insert_Input>;
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bid_OneArgs = {
  object: Bid_Insert_Input;
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BidsArgs = {
  objects: Array<Bids_Insert_Input>;
  on_conflict?: InputMaybe<Bids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bids_OneArgs = {
  object: Bids_Insert_Input;
  on_conflict?: InputMaybe<Bids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EnvironmentArgs = {
  objects: Array<Environment_Insert_Input>;
  on_conflict?: InputMaybe<Environment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Environment_OneArgs = {
  object: Environment_Insert_Input;
  on_conflict?: InputMaybe<Environment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EscrowArgs = {
  objects: Array<Escrow_Insert_Input>;
  on_conflict?: InputMaybe<Escrow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Escrow_OneArgs = {
  object: Escrow_Insert_Input;
  on_conflict?: InputMaybe<Escrow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IndexerArgs = {
  objects: Array<Indexer_Insert_Input>;
  on_conflict?: InputMaybe<Indexer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Indexer_OneArgs = {
  object: Indexer_Insert_Input;
  on_conflict?: InputMaybe<Indexer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OfferArgs = {
  objects: Array<Offer_Insert_Input>;
  on_conflict?: InputMaybe<Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offer_OneArgs = {
  object: Offer_Insert_Input;
  on_conflict?: InputMaybe<Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OffersArgs = {
  objects: Array<Offers_Insert_Input>;
  on_conflict?: InputMaybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offers_OneArgs = {
  object: Offers_Insert_Input;
  on_conflict?: InputMaybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TradeArgs = {
  objects: Array<Trade_Insert_Input>;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_OneArgs = {
  object: Trade_Insert_Input;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BidArgs = {
  _inc?: InputMaybe<Bid_Inc_Input>;
  _set?: InputMaybe<Bid_Set_Input>;
  where: Bid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bid_By_PkArgs = {
  _inc?: InputMaybe<Bid_Inc_Input>;
  _set?: InputMaybe<Bid_Set_Input>;
  pk_columns: Bid_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BidsArgs = {
  _inc?: InputMaybe<Bids_Inc_Input>;
  _set?: InputMaybe<Bids_Set_Input>;
  where: Bids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bids_By_PkArgs = {
  _inc?: InputMaybe<Bids_Inc_Input>;
  _set?: InputMaybe<Bids_Set_Input>;
  pk_columns: Bids_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EnvironmentArgs = {
  _inc?: InputMaybe<Environment_Inc_Input>;
  _set?: InputMaybe<Environment_Set_Input>;
  where: Environment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Environment_By_PkArgs = {
  _inc?: InputMaybe<Environment_Inc_Input>;
  _set?: InputMaybe<Environment_Set_Input>;
  pk_columns: Environment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EscrowArgs = {
  _inc?: InputMaybe<Escrow_Inc_Input>;
  _set?: InputMaybe<Escrow_Set_Input>;
  where: Escrow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Escrow_By_PkArgs = {
  _inc?: InputMaybe<Escrow_Inc_Input>;
  _set?: InputMaybe<Escrow_Set_Input>;
  pk_columns: Escrow_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_IndexerArgs = {
  _inc?: InputMaybe<Indexer_Inc_Input>;
  _set?: InputMaybe<Indexer_Set_Input>;
  where: Indexer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Indexer_By_PkArgs = {
  _inc?: InputMaybe<Indexer_Inc_Input>;
  _set?: InputMaybe<Indexer_Set_Input>;
  pk_columns: Indexer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OfferArgs = {
  _inc?: InputMaybe<Offer_Inc_Input>;
  _set?: InputMaybe<Offer_Set_Input>;
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offer_By_PkArgs = {
  _inc?: InputMaybe<Offer_Inc_Input>;
  _set?: InputMaybe<Offer_Set_Input>;
  pk_columns: Offer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OffersArgs = {
  _inc?: InputMaybe<Offers_Inc_Input>;
  _set?: InputMaybe<Offers_Set_Input>;
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offers_By_PkArgs = {
  _inc?: InputMaybe<Offers_Inc_Input>;
  _set?: InputMaybe<Offers_Set_Input>;
  pk_columns: Offers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TradeArgs = {
  _inc?: InputMaybe<Trade_Inc_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_By_PkArgs = {
  _inc?: InputMaybe<Trade_Inc_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  pk_columns: Trade_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};

export type Numeric_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _cast?: InputMaybe<Numeric_Cast_Exp>;
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "offer" */
export type Offer = {
  __typename?: 'offer';
  assetBuy: Scalars['bigint'];
  assetSell: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['Int'];
  id: Scalars['String'];
  owner: Scalars['String'];
  price: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  volume: Scalars['bigint'];
};

/** aggregated selection of "offer" */
export type Offer_Aggregate = {
  __typename?: 'offer_aggregate';
  aggregate?: Maybe<Offer_Aggregate_Fields>;
  nodes: Array<Offer>;
};

/** aggregate fields of "offer" */
export type Offer_Aggregate_Fields = {
  __typename?: 'offer_aggregate_fields';
  avg?: Maybe<Offer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Offer_Max_Fields>;
  min?: Maybe<Offer_Min_Fields>;
  stddev?: Maybe<Offer_Stddev_Fields>;
  stddev_pop?: Maybe<Offer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offer_Stddev_Samp_Fields>;
  sum?: Maybe<Offer_Sum_Fields>;
  var_pop?: Maybe<Offer_Var_Pop_Fields>;
  var_samp?: Maybe<Offer_Var_Samp_Fields>;
  variance?: Maybe<Offer_Variance_Fields>;
};


/** aggregate fields of "offer" */
export type Offer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Offer_Avg_Fields = {
  __typename?: 'offer_avg_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "offer". All fields are combined with a logical 'AND'. */
export type Offer_Bool_Exp = {
  _and?: InputMaybe<Array<Offer_Bool_Exp>>;
  _not?: InputMaybe<Offer_Bool_Exp>;
  _or?: InputMaybe<Array<Offer_Bool_Exp>>;
  assetBuy?: InputMaybe<Bigint_Comparison_Exp>;
  assetSell?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  volume?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "offer" */
export enum Offer_Constraint {
  /** unique or primary key constraint on columns "env", "id" */
  OfferIdEnvKey = 'offer_id_env_key',
  /** unique or primary key constraint on columns "id" */
  OfferPkey = 'offer_pkey'
}

/** input type for incrementing numeric columns in table "offer" */
export type Offer_Inc_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  volume?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "offer" */
export type Offer_Insert_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  volume?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Offer_Max_Fields = {
  __typename?: 'offer_max_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Offer_Min_Fields = {
  __typename?: 'offer_min_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "offer" */
export type Offer_Mutation_Response = {
  __typename?: 'offer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Offer>;
};

/** on_conflict condition type for table "offer" */
export type Offer_On_Conflict = {
  constraint: Offer_Constraint;
  update_columns?: Array<Offer_Update_Column>;
  where?: InputMaybe<Offer_Bool_Exp>;
};

/** Ordering options when selecting data from "offer". */
export type Offer_Order_By = {
  assetBuy?: InputMaybe<Order_By>;
  assetSell?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** primary key columns input for table: offer */
export type Offer_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "offer" */
export enum Offer_Select_Column {
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume'
}

/** input type for updating data in table "offer" */
export type Offer_Set_Input = {
  assetBuy?: InputMaybe<Scalars['bigint']>;
  assetSell?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  volume?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Offer_Stddev_Fields = {
  __typename?: 'offer_stddev_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Offer_Stddev_Pop_Fields = {
  __typename?: 'offer_stddev_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Offer_Stddev_Samp_Fields = {
  __typename?: 'offer_stddev_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Offer_Sum_Fields = {
  __typename?: 'offer_sum_fields';
  assetBuy?: Maybe<Scalars['bigint']>;
  assetSell?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  volume?: Maybe<Scalars['bigint']>;
};

/** update columns of table "offer" */
export enum Offer_Update_Column {
  /** column name */
  AssetBuy = 'assetBuy',
  /** column name */
  AssetSell = 'assetSell',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume'
}

/** aggregate var_pop on columns */
export type Offer_Var_Pop_Fields = {
  __typename?: 'offer_var_pop_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Offer_Var_Samp_Fields = {
  __typename?: 'offer_var_samp_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Offer_Variance_Fields = {
  __typename?: 'offer_variance_fields';
  assetBuy?: Maybe<Scalars['Float']>;
  assetSell?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "offers" */
export type Offers = {
  __typename?: 'offers';
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  owner: Scalars['String'];
  price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "offers" */
export type Offers_Aggregate = {
  __typename?: 'offers_aggregate';
  aggregate?: Maybe<Offers_Aggregate_Fields>;
  nodes: Array<Offers>;
};

/** aggregate fields of "offers" */
export type Offers_Aggregate_Fields = {
  __typename?: 'offers_aggregate_fields';
  avg?: Maybe<Offers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Offers_Max_Fields>;
  min?: Maybe<Offers_Min_Fields>;
  stddev?: Maybe<Offers_Stddev_Fields>;
  stddev_pop?: Maybe<Offers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offers_Stddev_Samp_Fields>;
  sum?: Maybe<Offers_Sum_Fields>;
  var_pop?: Maybe<Offers_Var_Pop_Fields>;
  var_samp?: Maybe<Offers_Var_Samp_Fields>;
  variance?: Maybe<Offers_Variance_Fields>;
};


/** aggregate fields of "offers" */
export type Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Offers_Avg_Fields = {
  __typename?: 'offers_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "offers". All fields are combined with a logical 'AND'. */
export type Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Offers_Bool_Exp>>;
  _not?: InputMaybe<Offers_Bool_Exp>;
  _or?: InputMaybe<Array<Offers_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "offers" */
export enum Offers_Constraint {
  /** unique or primary key constraint on columns "id" */
  OffersPkey = 'offers_pkey'
}

/** input type for incrementing numeric columns in table "offers" */
export type Offers_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "offers" */
export type Offers_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Offers_Max_Fields = {
  __typename?: 'offers_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Offers_Min_Fields = {
  __typename?: 'offers_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "offers" */
export type Offers_Mutation_Response = {
  __typename?: 'offers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Offers>;
};

/** on_conflict condition type for table "offers" */
export type Offers_On_Conflict = {
  constraint: Offers_Constraint;
  update_columns?: Array<Offers_Update_Column>;
  where?: InputMaybe<Offers_Bool_Exp>;
};

/** Ordering options when selecting data from "offers". */
export type Offers_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: offers */
export type Offers_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "offers" */
export enum Offers_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "offers" */
export type Offers_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Offers_Stddev_Fields = {
  __typename?: 'offers_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Offers_Stddev_Pop_Fields = {
  __typename?: 'offers_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Offers_Stddev_Samp_Fields = {
  __typename?: 'offers_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Offers_Sum_Fields = {
  __typename?: 'offers_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** update columns of table "offers" */
export enum Offers_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Offers_Var_Pop_Fields = {
  __typename?: 'offers_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Offers_Var_Samp_Fields = {
  __typename?: 'offers_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Offers_Variance_Fields = {
  __typename?: 'offers_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bid" */
  bid: Array<Bid>;
  /** fetch aggregated fields from the table: "bid" */
  bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  bid_by_pk?: Maybe<Bid>;
  /** fetch data from the table: "bids" */
  bids: Array<Bids>;
  /** fetch aggregated fields from the table: "bids" */
  bids_aggregate: Bids_Aggregate;
  /** fetch data from the table: "bids" using primary key columns */
  bids_by_pk?: Maybe<Bids>;
  /** fetch data from the table: "environment" */
  environment: Array<Environment>;
  /** fetch aggregated fields from the table: "environment" */
  environment_aggregate: Environment_Aggregate;
  /** fetch data from the table: "environment" using primary key columns */
  environment_by_pk?: Maybe<Environment>;
  /** fetch data from the table: "escrow" */
  escrow: Array<Escrow>;
  /** fetch aggregated fields from the table: "escrow" */
  escrow_aggregate: Escrow_Aggregate;
  /** fetch data from the table: "escrow" using primary key columns */
  escrow_by_pk?: Maybe<Escrow>;
  /** fetch data from the table: "indexer" */
  indexer: Array<Indexer>;
  /** fetch aggregated fields from the table: "indexer" */
  indexer_aggregate: Indexer_Aggregate;
  /** fetch data from the table: "indexer" using primary key columns */
  indexer_by_pk?: Maybe<Indexer>;
  /** fetch data from the table: "offer" */
  offer: Array<Offer>;
  /** fetch aggregated fields from the table: "offer" */
  offer_aggregate: Offer_Aggregate;
  /** fetch data from the table: "offer" using primary key columns */
  offer_by_pk?: Maybe<Offer>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
};


export type Query_RootBidArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootBid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootBid_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBidsArgs = {
  distinct_on?: InputMaybe<Array<Bids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bids_Order_By>>;
  where?: InputMaybe<Bids_Bool_Exp>;
};


export type Query_RootBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bids_Order_By>>;
  where?: InputMaybe<Bids_Bool_Exp>;
};


export type Query_RootBids_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEnvironmentArgs = {
  distinct_on?: InputMaybe<Array<Environment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Environment_Order_By>>;
  where?: InputMaybe<Environment_Bool_Exp>;
};


export type Query_RootEnvironment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Environment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Environment_Order_By>>;
  where?: InputMaybe<Environment_Bool_Exp>;
};


export type Query_RootEnvironment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEscrowArgs = {
  distinct_on?: InputMaybe<Array<Escrow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Escrow_Order_By>>;
  where?: InputMaybe<Escrow_Bool_Exp>;
};


export type Query_RootEscrow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Escrow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Escrow_Order_By>>;
  where?: InputMaybe<Escrow_Bool_Exp>;
};


export type Query_RootEscrow_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootIndexerArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Query_RootIndexer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Query_RootIndexer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOfferArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Query_RootOffer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Query_RootOffer_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Query_RootOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Query_RootOffers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bid" */
  bid: Array<Bid>;
  /** fetch aggregated fields from the table: "bid" */
  bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  bid_by_pk?: Maybe<Bid>;
  /** fetch data from the table: "bids" */
  bids: Array<Bids>;
  /** fetch aggregated fields from the table: "bids" */
  bids_aggregate: Bids_Aggregate;
  /** fetch data from the table: "bids" using primary key columns */
  bids_by_pk?: Maybe<Bids>;
  /** fetch data from the table: "environment" */
  environment: Array<Environment>;
  /** fetch aggregated fields from the table: "environment" */
  environment_aggregate: Environment_Aggregate;
  /** fetch data from the table: "environment" using primary key columns */
  environment_by_pk?: Maybe<Environment>;
  /** fetch data from the table: "escrow" */
  escrow: Array<Escrow>;
  /** fetch aggregated fields from the table: "escrow" */
  escrow_aggregate: Escrow_Aggregate;
  /** fetch data from the table: "escrow" using primary key columns */
  escrow_by_pk?: Maybe<Escrow>;
  /** fetch data from the table: "indexer" */
  indexer: Array<Indexer>;
  /** fetch aggregated fields from the table: "indexer" */
  indexer_aggregate: Indexer_Aggregate;
  /** fetch data from the table: "indexer" using primary key columns */
  indexer_by_pk?: Maybe<Indexer>;
  /** fetch data from the table: "offer" */
  offer: Array<Offer>;
  /** fetch aggregated fields from the table: "offer" */
  offer_aggregate: Offer_Aggregate;
  /** fetch data from the table: "offer" using primary key columns */
  offer_by_pk?: Maybe<Offer>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
};


export type Subscription_RootBidArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootBid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootBid_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBidsArgs = {
  distinct_on?: InputMaybe<Array<Bids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bids_Order_By>>;
  where?: InputMaybe<Bids_Bool_Exp>;
};


export type Subscription_RootBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bids_Order_By>>;
  where?: InputMaybe<Bids_Bool_Exp>;
};


export type Subscription_RootBids_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootEnvironmentArgs = {
  distinct_on?: InputMaybe<Array<Environment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Environment_Order_By>>;
  where?: InputMaybe<Environment_Bool_Exp>;
};


export type Subscription_RootEnvironment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Environment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Environment_Order_By>>;
  where?: InputMaybe<Environment_Bool_Exp>;
};


export type Subscription_RootEnvironment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEscrowArgs = {
  distinct_on?: InputMaybe<Array<Escrow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Escrow_Order_By>>;
  where?: InputMaybe<Escrow_Bool_Exp>;
};


export type Subscription_RootEscrow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Escrow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Escrow_Order_By>>;
  where?: InputMaybe<Escrow_Bool_Exp>;
};


export type Subscription_RootEscrow_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootIndexerArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Subscription_RootIndexer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Subscription_RootIndexer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOfferArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Subscription_RootOffer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Subscription_RootOffer_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Subscription_RootOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Subscription_RootOffers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'trade';
  amount: Scalars['numeric'];
  amountinverted: Scalars['numeric'];
  asabuy: Scalars['bigint'];
  asasell: Scalars['bigint'];
  buyquantity: Scalars['bigint'];
  id: Scalars['String'];
  price: Scalars['numeric'];
  priceinverted: Scalars['numeric'];
  sellpricebase: Scalars['bigint'];
  sellpricemultiplier: Scalars['bigint'];
  sellquantity: Scalars['bigint'];
  time: Scalars['timestamptz'];
};

/** aggregated selection of "trade" */
export type Trade_Aggregate = {
  __typename?: 'trade_aggregate';
  aggregate?: Maybe<Trade_Aggregate_Fields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type Trade_Aggregate_Fields = {
  __typename?: 'trade_aggregate_fields';
  avg?: Maybe<Trade_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trade_Max_Fields>;
  min?: Maybe<Trade_Min_Fields>;
  stddev?: Maybe<Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Sum_Fields>;
  var_pop?: Maybe<Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Var_Samp_Fields>;
  variance?: Maybe<Trade_Variance_Fields>;
};


/** aggregate fields of "trade" */
export type Trade_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Trade_Avg_Fields = {
  __typename?: 'trade_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type Trade_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_Bool_Exp>>;
  _not?: InputMaybe<Trade_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  amountinverted?: InputMaybe<Numeric_Comparison_Exp>;
  asabuy?: InputMaybe<Bigint_Comparison_Exp>;
  asasell?: InputMaybe<Bigint_Comparison_Exp>;
  buyquantity?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  priceinverted?: InputMaybe<Numeric_Comparison_Exp>;
  sellpricebase?: InputMaybe<Bigint_Comparison_Exp>;
  sellpricemultiplier?: InputMaybe<Bigint_Comparison_Exp>;
  sellquantity?: InputMaybe<Bigint_Comparison_Exp>;
  time?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trade" */
export enum Trade_Constraint {
  /** unique or primary key constraint on columns "id" */
  TradePkey = 'trade_pkey'
}

/** input type for incrementing numeric columns in table "trade" */
export type Trade_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  amountinverted?: InputMaybe<Scalars['numeric']>;
  asabuy?: InputMaybe<Scalars['bigint']>;
  asasell?: InputMaybe<Scalars['bigint']>;
  buyquantity?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  priceinverted?: InputMaybe<Scalars['numeric']>;
  sellpricebase?: InputMaybe<Scalars['bigint']>;
  sellpricemultiplier?: InputMaybe<Scalars['bigint']>;
  sellquantity?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "trade" */
export type Trade_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  amountinverted?: InputMaybe<Scalars['numeric']>;
  asabuy?: InputMaybe<Scalars['bigint']>;
  asasell?: InputMaybe<Scalars['bigint']>;
  buyquantity?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  priceinverted?: InputMaybe<Scalars['numeric']>;
  sellpricebase?: InputMaybe<Scalars['bigint']>;
  sellpricemultiplier?: InputMaybe<Scalars['bigint']>;
  sellquantity?: InputMaybe<Scalars['bigint']>;
  time?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Trade_Max_Fields = {
  __typename?: 'trade_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  amountinverted?: Maybe<Scalars['numeric']>;
  asabuy?: Maybe<Scalars['bigint']>;
  asasell?: Maybe<Scalars['bigint']>;
  buyquantity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  priceinverted?: Maybe<Scalars['numeric']>;
  sellpricebase?: Maybe<Scalars['bigint']>;
  sellpricemultiplier?: Maybe<Scalars['bigint']>;
  sellquantity?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Trade_Min_Fields = {
  __typename?: 'trade_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  amountinverted?: Maybe<Scalars['numeric']>;
  asabuy?: Maybe<Scalars['bigint']>;
  asasell?: Maybe<Scalars['bigint']>;
  buyquantity?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  priceinverted?: Maybe<Scalars['numeric']>;
  sellpricebase?: Maybe<Scalars['bigint']>;
  sellpricemultiplier?: Maybe<Scalars['bigint']>;
  sellquantity?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "trade" */
export type Trade_Mutation_Response = {
  __typename?: 'trade_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trade>;
};

/** on_conflict condition type for table "trade" */
export type Trade_On_Conflict = {
  constraint: Trade_Constraint;
  update_columns?: Array<Trade_Update_Column>;
  where?: InputMaybe<Trade_Bool_Exp>;
};

/** Ordering options when selecting data from "trade". */
export type Trade_Order_By = {
  amount?: InputMaybe<Order_By>;
  amountinverted?: InputMaybe<Order_By>;
  asabuy?: InputMaybe<Order_By>;
  asasell?: InputMaybe<Order_By>;
  buyquantity?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceinverted?: InputMaybe<Order_By>;
  sellpricebase?: InputMaybe<Order_By>;
  sellpricemultiplier?: InputMaybe<Order_By>;
  sellquantity?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trade */
export type Trade_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "trade" */
export enum Trade_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Amountinverted = 'amountinverted',
  /** column name */
  Asabuy = 'asabuy',
  /** column name */
  Asasell = 'asasell',
  /** column name */
  Buyquantity = 'buyquantity',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  Priceinverted = 'priceinverted',
  /** column name */
  Sellpricebase = 'sellpricebase',
  /** column name */
  Sellpricemultiplier = 'sellpricemultiplier',
  /** column name */
  Sellquantity = 'sellquantity',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "trade" */
export type Trade_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  amountinverted?: InputMaybe<Scalars['numeric']>;
  asabuy?: InputMaybe<Scalars['bigint']>;
  asasell?: InputMaybe<Scalars['bigint']>;
  buyquantity?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  priceinverted?: InputMaybe<Scalars['numeric']>;
  sellpricebase?: InputMaybe<Scalars['bigint']>;
  sellpricemultiplier?: InputMaybe<Scalars['bigint']>;
  sellquantity?: InputMaybe<Scalars['bigint']>;
  time?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Trade_Stddev_Fields = {
  __typename?: 'trade_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Trade_Stddev_Pop_Fields = {
  __typename?: 'trade_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Trade_Stddev_Samp_Fields = {
  __typename?: 'trade_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Trade_Sum_Fields = {
  __typename?: 'trade_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  amountinverted?: Maybe<Scalars['numeric']>;
  asabuy?: Maybe<Scalars['bigint']>;
  asasell?: Maybe<Scalars['bigint']>;
  buyquantity?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  priceinverted?: Maybe<Scalars['numeric']>;
  sellpricebase?: Maybe<Scalars['bigint']>;
  sellpricemultiplier?: Maybe<Scalars['bigint']>;
  sellquantity?: Maybe<Scalars['bigint']>;
};

/** update columns of table "trade" */
export enum Trade_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Amountinverted = 'amountinverted',
  /** column name */
  Asabuy = 'asabuy',
  /** column name */
  Asasell = 'asasell',
  /** column name */
  Buyquantity = 'buyquantity',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  Priceinverted = 'priceinverted',
  /** column name */
  Sellpricebase = 'sellpricebase',
  /** column name */
  Sellpricemultiplier = 'sellpricemultiplier',
  /** column name */
  Sellquantity = 'sellquantity',
  /** column name */
  Time = 'time'
}

/** aggregate var_pop on columns */
export type Trade_Var_Pop_Fields = {
  __typename?: 'trade_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Trade_Var_Samp_Fields = {
  __typename?: 'trade_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Trade_Variance_Fields = {
  __typename?: 'trade_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  amountinverted?: Maybe<Scalars['Float']>;
  asabuy?: Maybe<Scalars['Float']>;
  asasell?: Maybe<Scalars['Float']>;
  buyquantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceinverted?: Maybe<Scalars['Float']>;
  sellpricebase?: Maybe<Scalars['Float']>;
  sellpricemultiplier?: Maybe<Scalars['Float']>;
  sellquantity?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  account: Scalars['String'];
  amount: Scalars['bigint'];
  asset: Scalars['bigint'];
  balance?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  env: Scalars['Int'];
  id: Scalars['bigint'];
  intraround: Scalars['Int'];
  round: Scalars['bigint'];
  txId: Scalars['String'];
  type: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  asset?: InputMaybe<Bigint_Comparison_Exp>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  intraround?: InputMaybe<Int_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  txId?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionPkey = 'transaction_pkey',
  /** unique or primary key constraint on columns "env", "type", "txId" */
  TransactionTxIdTypeEnvKey = 'transaction_txId_type_env_key'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  amount?: InputMaybe<Scalars['bigint']>;
  asset?: InputMaybe<Scalars['bigint']>;
  balance?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  intraround?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['bigint']>;
  asset?: InputMaybe<Scalars['bigint']>;
  balance?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  intraround?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  txId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  account?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['bigint']>;
  asset?: Maybe<Scalars['bigint']>;
  balance?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  intraround?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  txId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  account?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['bigint']>;
  asset?: Maybe<Scalars['bigint']>;
  balance?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  intraround?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  txId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  account?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  asset?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intraround?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  txId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Amount = 'amount',
  /** column name */
  Asset = 'asset',
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Intraround = 'intraround',
  /** column name */
  Round = 'round',
  /** column name */
  TxId = 'txId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['bigint']>;
  asset?: InputMaybe<Scalars['bigint']>;
  balance?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  intraround?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  txId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  amount?: Maybe<Scalars['bigint']>;
  asset?: Maybe<Scalars['bigint']>;
  balance?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  intraround?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['Int']>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Amount = 'amount',
  /** column name */
  Asset = 'asset',
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Intraround = 'intraround',
  /** column name */
  Round = 'round',
  /** column name */
  TxId = 'txId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  asset?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  env?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intraround?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};
