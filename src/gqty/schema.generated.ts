/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "bids". All fields are combined with a logical 'AND'. */
export interface bids_bool_exp {
  _and?: InputMaybe<Array<bids_bool_exp>>;
  _not?: InputMaybe<bids_bool_exp>;
  _or?: InputMaybe<Array<bids_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  created_at?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  updated_at?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "bids" */
export enum bids_constraint {
  /** unique or primary key constraint */
  bids_pkey = "bids_pkey",
}

/** input type for incrementing numeric columns in table "bids" */
export interface bids_inc_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  price?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "bids" */
export interface bids_insert_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
}

/** on_conflict condition type for table "bids" */
export interface bids_on_conflict {
  constraint: bids_constraint;
  update_columns?: Array<bids_update_column>;
  where?: InputMaybe<bids_bool_exp>;
}

/** Ordering options when selecting data from "bids". */
export interface bids_order_by {
  amount?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
}

/** primary key columns input for table: bids */
export interface bids_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "bids" */
export enum bids_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  owner = "owner",
  /** column name */
  price = "price",
  /** column name */
  updated_at = "updated_at",
}

/** input type for updating data in table "bids" */
export interface bids_set_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "bids" */
export enum bids_update_column {
  /** column name */
  amount = "amount",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  owner = "owner",
  /** column name */
  price = "price",
  /** column name */
  updated_at = "updated_at",
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
}

/** Boolean expression to filter rows from the table "offers". All fields are combined with a logical 'AND'. */
export interface offers_bool_exp {
  _and?: InputMaybe<Array<offers_bool_exp>>;
  _not?: InputMaybe<offers_bool_exp>;
  _or?: InputMaybe<Array<offers_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  created_at?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  updated_at?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "offers" */
export enum offers_constraint {
  /** unique or primary key constraint */
  offers_pkey = "offers_pkey",
}

/** input type for incrementing numeric columns in table "offers" */
export interface offers_inc_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  price?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "offers" */
export interface offers_insert_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
}

/** on_conflict condition type for table "offers" */
export interface offers_on_conflict {
  constraint: offers_constraint;
  update_columns?: Array<offers_update_column>;
  where?: InputMaybe<offers_bool_exp>;
}

/** Ordering options when selecting data from "offers". */
export interface offers_order_by {
  amount?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
}

/** primary key columns input for table: offers */
export interface offers_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "offers" */
export enum offers_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  owner = "owner",
  /** column name */
  price = "price",
  /** column name */
  updated_at = "updated_at",
}

/** input type for updating data in table "offers" */
export interface offers_set_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "offers" */
export enum offers_update_column {
  /** column name */
  amount = "amount",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  owner = "owner",
  /** column name */
  price = "price",
  /** column name */
  updated_at = "updated_at",
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
}

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export interface trade_bool_exp {
  _and?: InputMaybe<Array<trade_bool_exp>>;
  _not?: InputMaybe<trade_bool_exp>;
  _or?: InputMaybe<Array<trade_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  time?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "trade" */
export enum trade_constraint {
  /** unique or primary key constraint */
  trade_pkey = "trade_pkey",
}

/** input type for incrementing numeric columns in table "trade" */
export interface trade_inc_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  price?: InputMaybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "trade" */
export interface trade_insert_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  time?: InputMaybe<Scalars["timestamptz"]>;
}

/** on_conflict condition type for table "trade" */
export interface trade_on_conflict {
  constraint: trade_constraint;
  update_columns?: Array<trade_update_column>;
  where?: InputMaybe<trade_bool_exp>;
}

/** Ordering options when selecting data from "trade". */
export interface trade_order_by {
  amount?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  time?: InputMaybe<order_by>;
}

/** primary key columns input for table: trade */
export interface trade_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "trade" */
export enum trade_select_column {
  /** column name */
  amount = "amount",
  /** column name */
  id = "id",
  /** column name */
  price = "price",
  /** column name */
  time = "time",
}

/** input type for updating data in table "trade" */
export interface trade_set_input {
  amount?: InputMaybe<Scalars["numeric"]>;
  id?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["numeric"]>;
  time?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "trade" */
export enum trade_update_column {
  /** column name */
  amount = "amount",
  /** column name */
  id = "id",
  /** column name */
  price = "price",
  /** column name */
  time = "time",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
  bids_constraint: true,
  bids_select_column: true,
  bids_update_column: true,
  numeric: true,
  offers_constraint: true,
  offers_select_column: true,
  offers_update_column: true,
  order_by: true,
  timestamptz: true,
  trade_constraint: true,
  trade_select_column: true,
  trade_update_column: true,
};
export const generatedSchema = {
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  bids: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric!" },
    created_at: { __type: "timestamptz!" },
    id: { __type: "String!" },
    owner: { __type: "String!" },
    price: { __type: "numeric!" },
    updated_at: { __type: "timestamptz!" },
  },
  bids_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "bids_aggregate_fields" },
    nodes: { __type: "[bids!]!" },
  },
  bids_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "bids_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[bids_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "bids_max_fields" },
    min: { __type: "bids_min_fields" },
    stddev: { __type: "bids_stddev_fields" },
    stddev_pop: { __type: "bids_stddev_pop_fields" },
    stddev_samp: { __type: "bids_stddev_samp_fields" },
    sum: { __type: "bids_sum_fields" },
    var_pop: { __type: "bids_var_pop_fields" },
    var_samp: { __type: "bids_var_samp_fields" },
    variance: { __type: "bids_variance_fields" },
  },
  bids_avg_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_bool_exp: {
    _and: { __type: "[bids_bool_exp!]" },
    _not: { __type: "bids_bool_exp" },
    _or: { __type: "[bids_bool_exp!]" },
    amount: { __type: "numeric_comparison_exp" },
    created_at: { __type: "timestamptz_comparison_exp" },
    id: { __type: "String_comparison_exp" },
    owner: { __type: "String_comparison_exp" },
    price: { __type: "numeric_comparison_exp" },
    updated_at: { __type: "timestamptz_comparison_exp" },
  },
  bids_inc_input: {
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  bids_insert_input: {
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  bids_max_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  bids_min_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  bids_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[bids!]!" },
  },
  bids_on_conflict: {
    constraint: { __type: "bids_constraint!" },
    update_columns: { __type: "[bids_update_column!]!" },
    where: { __type: "bids_bool_exp" },
  },
  bids_order_by: {
    amount: { __type: "order_by" },
    created_at: { __type: "order_by" },
    id: { __type: "order_by" },
    owner: { __type: "order_by" },
    price: { __type: "order_by" },
    updated_at: { __type: "order_by" },
  },
  bids_pk_columns_input: { id: { __type: "String!" } },
  bids_set_input: {
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  bids_stddev_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_stddev_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_stddev_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_sum_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  bids_var_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_var_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  bids_variance_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  mutation: {
    __typename: { __type: "String!" },
    delete_bids: {
      __type: "bids_mutation_response",
      __args: { where: "bids_bool_exp!" },
    },
    delete_bids_by_pk: { __type: "bids", __args: { id: "String!" } },
    delete_offers: {
      __type: "offers_mutation_response",
      __args: { where: "offers_bool_exp!" },
    },
    delete_offers_by_pk: { __type: "offers", __args: { id: "String!" } },
    delete_trade: {
      __type: "trade_mutation_response",
      __args: { where: "trade_bool_exp!" },
    },
    delete_trade_by_pk: { __type: "trade", __args: { id: "String!" } },
    insert_bids: {
      __type: "bids_mutation_response",
      __args: {
        objects: "[bids_insert_input!]!",
        on_conflict: "bids_on_conflict",
      },
    },
    insert_bids_one: {
      __type: "bids",
      __args: { object: "bids_insert_input!", on_conflict: "bids_on_conflict" },
    },
    insert_offers: {
      __type: "offers_mutation_response",
      __args: {
        objects: "[offers_insert_input!]!",
        on_conflict: "offers_on_conflict",
      },
    },
    insert_offers_one: {
      __type: "offers",
      __args: {
        object: "offers_insert_input!",
        on_conflict: "offers_on_conflict",
      },
    },
    insert_trade: {
      __type: "trade_mutation_response",
      __args: {
        objects: "[trade_insert_input!]!",
        on_conflict: "trade_on_conflict",
      },
    },
    insert_trade_one: {
      __type: "trade",
      __args: {
        object: "trade_insert_input!",
        on_conflict: "trade_on_conflict",
      },
    },
    update_bids: {
      __type: "bids_mutation_response",
      __args: {
        _inc: "bids_inc_input",
        _set: "bids_set_input",
        where: "bids_bool_exp!",
      },
    },
    update_bids_by_pk: {
      __type: "bids",
      __args: {
        _inc: "bids_inc_input",
        _set: "bids_set_input",
        pk_columns: "bids_pk_columns_input!",
      },
    },
    update_offers: {
      __type: "offers_mutation_response",
      __args: {
        _inc: "offers_inc_input",
        _set: "offers_set_input",
        where: "offers_bool_exp!",
      },
    },
    update_offers_by_pk: {
      __type: "offers",
      __args: {
        _inc: "offers_inc_input",
        _set: "offers_set_input",
        pk_columns: "offers_pk_columns_input!",
      },
    },
    update_trade: {
      __type: "trade_mutation_response",
      __args: {
        _inc: "trade_inc_input",
        _set: "trade_set_input",
        where: "trade_bool_exp!",
      },
    },
    update_trade_by_pk: {
      __type: "trade",
      __args: {
        _inc: "trade_inc_input",
        _set: "trade_set_input",
        pk_columns: "trade_pk_columns_input!",
      },
    },
  },
  numeric_comparison_exp: {
    _eq: { __type: "numeric" },
    _gt: { __type: "numeric" },
    _gte: { __type: "numeric" },
    _in: { __type: "[numeric!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "numeric" },
    _lte: { __type: "numeric" },
    _neq: { __type: "numeric" },
    _nin: { __type: "[numeric!]" },
  },
  offers: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric!" },
    created_at: { __type: "timestamptz!" },
    id: { __type: "String!" },
    owner: { __type: "String!" },
    price: { __type: "numeric!" },
    updated_at: { __type: "timestamptz!" },
  },
  offers_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "offers_aggregate_fields" },
    nodes: { __type: "[offers!]!" },
  },
  offers_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "offers_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[offers_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "offers_max_fields" },
    min: { __type: "offers_min_fields" },
    stddev: { __type: "offers_stddev_fields" },
    stddev_pop: { __type: "offers_stddev_pop_fields" },
    stddev_samp: { __type: "offers_stddev_samp_fields" },
    sum: { __type: "offers_sum_fields" },
    var_pop: { __type: "offers_var_pop_fields" },
    var_samp: { __type: "offers_var_samp_fields" },
    variance: { __type: "offers_variance_fields" },
  },
  offers_avg_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_bool_exp: {
    _and: { __type: "[offers_bool_exp!]" },
    _not: { __type: "offers_bool_exp" },
    _or: { __type: "[offers_bool_exp!]" },
    amount: { __type: "numeric_comparison_exp" },
    created_at: { __type: "timestamptz_comparison_exp" },
    id: { __type: "String_comparison_exp" },
    owner: { __type: "String_comparison_exp" },
    price: { __type: "numeric_comparison_exp" },
    updated_at: { __type: "timestamptz_comparison_exp" },
  },
  offers_inc_input: {
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  offers_insert_input: {
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  offers_max_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  offers_min_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  offers_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[offers!]!" },
  },
  offers_on_conflict: {
    constraint: { __type: "offers_constraint!" },
    update_columns: { __type: "[offers_update_column!]!" },
    where: { __type: "offers_bool_exp" },
  },
  offers_order_by: {
    amount: { __type: "order_by" },
    created_at: { __type: "order_by" },
    id: { __type: "order_by" },
    owner: { __type: "order_by" },
    price: { __type: "order_by" },
    updated_at: { __type: "order_by" },
  },
  offers_pk_columns_input: { id: { __type: "String!" } },
  offers_set_input: {
    amount: { __type: "numeric" },
    created_at: { __type: "timestamptz" },
    id: { __type: "String" },
    owner: { __type: "String" },
    price: { __type: "numeric" },
    updated_at: { __type: "timestamptz" },
  },
  offers_stddev_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_stddev_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_stddev_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_sum_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  offers_var_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_var_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  offers_variance_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  query: {
    __typename: { __type: "String!" },
    bids: {
      __type: "[bids!]!",
      __args: {
        distinct_on: "[bids_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[bids_order_by!]",
        where: "bids_bool_exp",
      },
    },
    bids_aggregate: {
      __type: "bids_aggregate!",
      __args: {
        distinct_on: "[bids_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[bids_order_by!]",
        where: "bids_bool_exp",
      },
    },
    bids_by_pk: { __type: "bids", __args: { id: "String!" } },
    offers: {
      __type: "[offers!]!",
      __args: {
        distinct_on: "[offers_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[offers_order_by!]",
        where: "offers_bool_exp",
      },
    },
    offers_aggregate: {
      __type: "offers_aggregate!",
      __args: {
        distinct_on: "[offers_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[offers_order_by!]",
        where: "offers_bool_exp",
      },
    },
    offers_by_pk: { __type: "offers", __args: { id: "String!" } },
    trade: {
      __type: "[trade!]!",
      __args: {
        distinct_on: "[trade_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[trade_order_by!]",
        where: "trade_bool_exp",
      },
    },
    trade_aggregate: {
      __type: "trade_aggregate!",
      __args: {
        distinct_on: "[trade_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[trade_order_by!]",
        where: "trade_bool_exp",
      },
    },
    trade_by_pk: { __type: "trade", __args: { id: "String!" } },
  },
  subscription: {
    __typename: { __type: "String!" },
    bids: {
      __type: "[bids!]!",
      __args: {
        distinct_on: "[bids_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[bids_order_by!]",
        where: "bids_bool_exp",
      },
    },
    bids_aggregate: {
      __type: "bids_aggregate!",
      __args: {
        distinct_on: "[bids_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[bids_order_by!]",
        where: "bids_bool_exp",
      },
    },
    bids_by_pk: { __type: "bids", __args: { id: "String!" } },
    offers: {
      __type: "[offers!]!",
      __args: {
        distinct_on: "[offers_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[offers_order_by!]",
        where: "offers_bool_exp",
      },
    },
    offers_aggregate: {
      __type: "offers_aggregate!",
      __args: {
        distinct_on: "[offers_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[offers_order_by!]",
        where: "offers_bool_exp",
      },
    },
    offers_by_pk: { __type: "offers", __args: { id: "String!" } },
    trade: {
      __type: "[trade!]!",
      __args: {
        distinct_on: "[trade_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[trade_order_by!]",
        where: "trade_bool_exp",
      },
    },
    trade_aggregate: {
      __type: "trade_aggregate!",
      __args: {
        distinct_on: "[trade_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[trade_order_by!]",
        where: "trade_bool_exp",
      },
    },
    trade_by_pk: { __type: "trade", __args: { id: "String!" } },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: "timestamptz" },
    _gt: { __type: "timestamptz" },
    _gte: { __type: "timestamptz" },
    _in: { __type: "[timestamptz!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "timestamptz" },
    _lte: { __type: "timestamptz" },
    _neq: { __type: "timestamptz" },
    _nin: { __type: "[timestamptz!]" },
  },
  trade: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric!" },
    id: { __type: "String!" },
    price: { __type: "numeric!" },
    time: { __type: "timestamptz!" },
  },
  trade_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "trade_aggregate_fields" },
    nodes: { __type: "[trade!]!" },
  },
  trade_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "trade_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[trade_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "trade_max_fields" },
    min: { __type: "trade_min_fields" },
    stddev: { __type: "trade_stddev_fields" },
    stddev_pop: { __type: "trade_stddev_pop_fields" },
    stddev_samp: { __type: "trade_stddev_samp_fields" },
    sum: { __type: "trade_sum_fields" },
    var_pop: { __type: "trade_var_pop_fields" },
    var_samp: { __type: "trade_var_samp_fields" },
    variance: { __type: "trade_variance_fields" },
  },
  trade_avg_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_bool_exp: {
    _and: { __type: "[trade_bool_exp!]" },
    _not: { __type: "trade_bool_exp" },
    _or: { __type: "[trade_bool_exp!]" },
    amount: { __type: "numeric_comparison_exp" },
    id: { __type: "String_comparison_exp" },
    price: { __type: "numeric_comparison_exp" },
    time: { __type: "timestamptz_comparison_exp" },
  },
  trade_inc_input: {
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  trade_insert_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
    time: { __type: "timestamptz" },
  },
  trade_max_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
    time: { __type: "timestamptz" },
  },
  trade_min_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
    time: { __type: "timestamptz" },
  },
  trade_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[trade!]!" },
  },
  trade_on_conflict: {
    constraint: { __type: "trade_constraint!" },
    update_columns: { __type: "[trade_update_column!]!" },
    where: { __type: "trade_bool_exp" },
  },
  trade_order_by: {
    amount: { __type: "order_by" },
    id: { __type: "order_by" },
    price: { __type: "order_by" },
    time: { __type: "order_by" },
  },
  trade_pk_columns_input: { id: { __type: "String!" } },
  trade_set_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
    time: { __type: "timestamptz" },
  },
  trade_stddev_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_stddev_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_stddev_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_sum_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  trade_var_pop_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_var_samp_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
  trade_variance_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "Float" },
    price: { __type: "Float" },
  },
} as const;

/**
 * columns and relationships of "bids"
 */
export interface bids {
  __typename?: "bids";
  amount: ScalarsEnums["numeric"];
  created_at: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  price: ScalarsEnums["numeric"];
  updated_at: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "bids"
 */
export interface bids_aggregate {
  __typename?: "bids_aggregate";
  aggregate?: Maybe<bids_aggregate_fields>;
  nodes: Array<bids>;
}

/**
 * aggregate fields of "bids"
 */
export interface bids_aggregate_fields {
  __typename?: "bids_aggregate_fields";
  avg?: Maybe<bids_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<bids_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<bids_max_fields>;
  min?: Maybe<bids_min_fields>;
  stddev?: Maybe<bids_stddev_fields>;
  stddev_pop?: Maybe<bids_stddev_pop_fields>;
  stddev_samp?: Maybe<bids_stddev_samp_fields>;
  sum?: Maybe<bids_sum_fields>;
  var_pop?: Maybe<bids_var_pop_fields>;
  var_samp?: Maybe<bids_var_samp_fields>;
  variance?: Maybe<bids_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface bids_avg_fields {
  __typename?: "bids_avg_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface bids_max_fields {
  __typename?: "bids_max_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  updated_at?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface bids_min_fields {
  __typename?: "bids_min_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  updated_at?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "bids"
 */
export interface bids_mutation_response {
  __typename?: "bids_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<bids>;
}

/**
 * aggregate stddev on columns
 */
export interface bids_stddev_fields {
  __typename?: "bids_stddev_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface bids_stddev_pop_fields {
  __typename?: "bids_stddev_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface bids_stddev_samp_fields {
  __typename?: "bids_stddev_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface bids_sum_fields {
  __typename?: "bids_sum_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface bids_var_pop_fields {
  __typename?: "bids_var_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface bids_var_samp_fields {
  __typename?: "bids_var_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface bids_variance_fields {
  __typename?: "bids_variance_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  delete_bids: (args: {
    where: bids_bool_exp;
  }) => Maybe<bids_mutation_response>;
  delete_bids_by_pk: (args: { id: Scalars["String"] }) => Maybe<bids>;
  delete_offers: (args: {
    where: offers_bool_exp;
  }) => Maybe<offers_mutation_response>;
  delete_offers_by_pk: (args: { id: Scalars["String"] }) => Maybe<offers>;
  delete_trade: (args: {
    where: trade_bool_exp;
  }) => Maybe<trade_mutation_response>;
  delete_trade_by_pk: (args: { id: Scalars["String"] }) => Maybe<trade>;
  insert_bids: (args: {
    objects: Array<bids_insert_input>;
    on_conflict?: Maybe<bids_on_conflict>;
  }) => Maybe<bids_mutation_response>;
  insert_bids_one: (args: {
    object: bids_insert_input;
    on_conflict?: Maybe<bids_on_conflict>;
  }) => Maybe<bids>;
  insert_offers: (args: {
    objects: Array<offers_insert_input>;
    on_conflict?: Maybe<offers_on_conflict>;
  }) => Maybe<offers_mutation_response>;
  insert_offers_one: (args: {
    object: offers_insert_input;
    on_conflict?: Maybe<offers_on_conflict>;
  }) => Maybe<offers>;
  insert_trade: (args: {
    objects: Array<trade_insert_input>;
    on_conflict?: Maybe<trade_on_conflict>;
  }) => Maybe<trade_mutation_response>;
  insert_trade_one: (args: {
    object: trade_insert_input;
    on_conflict?: Maybe<trade_on_conflict>;
  }) => Maybe<trade>;
  update_bids: (args: {
    _inc?: Maybe<bids_inc_input>;
    _set?: Maybe<bids_set_input>;
    where: bids_bool_exp;
  }) => Maybe<bids_mutation_response>;
  update_bids_by_pk: (args: {
    _inc?: Maybe<bids_inc_input>;
    _set?: Maybe<bids_set_input>;
    pk_columns: bids_pk_columns_input;
  }) => Maybe<bids>;
  update_offers: (args: {
    _inc?: Maybe<offers_inc_input>;
    _set?: Maybe<offers_set_input>;
    where: offers_bool_exp;
  }) => Maybe<offers_mutation_response>;
  update_offers_by_pk: (args: {
    _inc?: Maybe<offers_inc_input>;
    _set?: Maybe<offers_set_input>;
    pk_columns: offers_pk_columns_input;
  }) => Maybe<offers>;
  update_trade: (args: {
    _inc?: Maybe<trade_inc_input>;
    _set?: Maybe<trade_set_input>;
    where: trade_bool_exp;
  }) => Maybe<trade_mutation_response>;
  update_trade_by_pk: (args: {
    _inc?: Maybe<trade_inc_input>;
    _set?: Maybe<trade_set_input>;
    pk_columns: trade_pk_columns_input;
  }) => Maybe<trade>;
}

/**
 * columns and relationships of "offers"
 */
export interface offers {
  __typename?: "offers";
  amount: ScalarsEnums["numeric"];
  created_at: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  price: ScalarsEnums["numeric"];
  updated_at: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "offers"
 */
export interface offers_aggregate {
  __typename?: "offers_aggregate";
  aggregate?: Maybe<offers_aggregate_fields>;
  nodes: Array<offers>;
}

/**
 * aggregate fields of "offers"
 */
export interface offers_aggregate_fields {
  __typename?: "offers_aggregate_fields";
  avg?: Maybe<offers_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<offers_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<offers_max_fields>;
  min?: Maybe<offers_min_fields>;
  stddev?: Maybe<offers_stddev_fields>;
  stddev_pop?: Maybe<offers_stddev_pop_fields>;
  stddev_samp?: Maybe<offers_stddev_samp_fields>;
  sum?: Maybe<offers_sum_fields>;
  var_pop?: Maybe<offers_var_pop_fields>;
  var_samp?: Maybe<offers_var_samp_fields>;
  variance?: Maybe<offers_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface offers_avg_fields {
  __typename?: "offers_avg_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface offers_max_fields {
  __typename?: "offers_max_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  updated_at?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface offers_min_fields {
  __typename?: "offers_min_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  updated_at?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "offers"
 */
export interface offers_mutation_response {
  __typename?: "offers_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<offers>;
}

/**
 * aggregate stddev on columns
 */
export interface offers_stddev_fields {
  __typename?: "offers_stddev_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface offers_stddev_pop_fields {
  __typename?: "offers_stddev_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface offers_stddev_samp_fields {
  __typename?: "offers_stddev_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface offers_sum_fields {
  __typename?: "offers_sum_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface offers_var_pop_fields {
  __typename?: "offers_var_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface offers_var_samp_fields {
  __typename?: "offers_var_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface offers_variance_fields {
  __typename?: "offers_variance_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface Query {
  __typename?: "Query";
  bids: (args?: {
    distinct_on?: Maybe<Array<bids_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<bids_order_by>>;
    where?: Maybe<bids_bool_exp>;
  }) => Array<bids>;
  bids_aggregate: (args?: {
    distinct_on?: Maybe<Array<bids_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<bids_order_by>>;
    where?: Maybe<bids_bool_exp>;
  }) => bids_aggregate;
  bids_by_pk: (args: { id: Scalars["String"] }) => Maybe<bids>;
  offers: (args?: {
    distinct_on?: Maybe<Array<offers_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<offers_order_by>>;
    where?: Maybe<offers_bool_exp>;
  }) => Array<offers>;
  offers_aggregate: (args?: {
    distinct_on?: Maybe<Array<offers_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<offers_order_by>>;
    where?: Maybe<offers_bool_exp>;
  }) => offers_aggregate;
  offers_by_pk: (args: { id: Scalars["String"] }) => Maybe<offers>;
  trade: (args?: {
    distinct_on?: Maybe<Array<trade_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<trade_order_by>>;
    where?: Maybe<trade_bool_exp>;
  }) => Array<trade>;
  trade_aggregate: (args?: {
    distinct_on?: Maybe<Array<trade_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<trade_order_by>>;
    where?: Maybe<trade_bool_exp>;
  }) => trade_aggregate;
  trade_by_pk: (args: { id: Scalars["String"] }) => Maybe<trade>;
}

export interface Subscription {
  __typename?: "Subscription";
  bids: (args?: {
    distinct_on?: Maybe<Array<bids_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<bids_order_by>>;
    where?: Maybe<bids_bool_exp>;
  }) => Array<bids>;
  bids_aggregate: (args?: {
    distinct_on?: Maybe<Array<bids_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<bids_order_by>>;
    where?: Maybe<bids_bool_exp>;
  }) => bids_aggregate;
  bids_by_pk: (args: { id: Scalars["String"] }) => Maybe<bids>;
  offers: (args?: {
    distinct_on?: Maybe<Array<offers_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<offers_order_by>>;
    where?: Maybe<offers_bool_exp>;
  }) => Array<offers>;
  offers_aggregate: (args?: {
    distinct_on?: Maybe<Array<offers_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<offers_order_by>>;
    where?: Maybe<offers_bool_exp>;
  }) => offers_aggregate;
  offers_by_pk: (args: { id: Scalars["String"] }) => Maybe<offers>;
  trade: (args?: {
    distinct_on?: Maybe<Array<trade_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<trade_order_by>>;
    where?: Maybe<trade_bool_exp>;
  }) => Array<trade>;
  trade_aggregate: (args?: {
    distinct_on?: Maybe<Array<trade_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<trade_order_by>>;
    where?: Maybe<trade_bool_exp>;
  }) => trade_aggregate;
  trade_by_pk: (args: { id: Scalars["String"] }) => Maybe<trade>;
}

/**
 * columns and relationships of "trade"
 */
export interface trade {
  __typename?: "trade";
  amount: ScalarsEnums["numeric"];
  id: ScalarsEnums["String"];
  price: ScalarsEnums["numeric"];
  time: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "trade"
 */
export interface trade_aggregate {
  __typename?: "trade_aggregate";
  aggregate?: Maybe<trade_aggregate_fields>;
  nodes: Array<trade>;
}

/**
 * aggregate fields of "trade"
 */
export interface trade_aggregate_fields {
  __typename?: "trade_aggregate_fields";
  avg?: Maybe<trade_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<trade_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<trade_max_fields>;
  min?: Maybe<trade_min_fields>;
  stddev?: Maybe<trade_stddev_fields>;
  stddev_pop?: Maybe<trade_stddev_pop_fields>;
  stddev_samp?: Maybe<trade_stddev_samp_fields>;
  sum?: Maybe<trade_sum_fields>;
  var_pop?: Maybe<trade_var_pop_fields>;
  var_samp?: Maybe<trade_var_samp_fields>;
  variance?: Maybe<trade_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface trade_avg_fields {
  __typename?: "trade_avg_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface trade_max_fields {
  __typename?: "trade_max_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  time?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface trade_min_fields {
  __typename?: "trade_min_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
  time?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "trade"
 */
export interface trade_mutation_response {
  __typename?: "trade_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<trade>;
}

/**
 * aggregate stddev on columns
 */
export interface trade_stddev_fields {
  __typename?: "trade_stddev_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface trade_stddev_pop_fields {
  __typename?: "trade_stddev_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface trade_stddev_samp_fields {
  __typename?: "trade_stddev_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface trade_sum_fields {
  __typename?: "trade_sum_fields";
  amount?: Maybe<ScalarsEnums["numeric"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface trade_var_pop_fields {
  __typename?: "trade_var_pop_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface trade_var_samp_fields {
  __typename?: "trade_var_samp_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface trade_variance_fields {
  __typename?: "trade_variance_fields";
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  bids: bids;
  bids_aggregate: bids_aggregate;
  bids_aggregate_fields: bids_aggregate_fields;
  bids_avg_fields: bids_avg_fields;
  bids_max_fields: bids_max_fields;
  bids_min_fields: bids_min_fields;
  bids_mutation_response: bids_mutation_response;
  bids_stddev_fields: bids_stddev_fields;
  bids_stddev_pop_fields: bids_stddev_pop_fields;
  bids_stddev_samp_fields: bids_stddev_samp_fields;
  bids_sum_fields: bids_sum_fields;
  bids_var_pop_fields: bids_var_pop_fields;
  bids_var_samp_fields: bids_var_samp_fields;
  bids_variance_fields: bids_variance_fields;
  offers: offers;
  offers_aggregate: offers_aggregate;
  offers_aggregate_fields: offers_aggregate_fields;
  offers_avg_fields: offers_avg_fields;
  offers_max_fields: offers_max_fields;
  offers_min_fields: offers_min_fields;
  offers_mutation_response: offers_mutation_response;
  offers_stddev_fields: offers_stddev_fields;
  offers_stddev_pop_fields: offers_stddev_pop_fields;
  offers_stddev_samp_fields: offers_stddev_samp_fields;
  offers_sum_fields: offers_sum_fields;
  offers_var_pop_fields: offers_var_pop_fields;
  offers_var_samp_fields: offers_var_samp_fields;
  offers_variance_fields: offers_variance_fields;
  trade: trade;
  trade_aggregate: trade_aggregate;
  trade_aggregate_fields: trade_aggregate_fields;
  trade_avg_fields: trade_avg_fields;
  trade_max_fields: trade_max_fields;
  trade_min_fields: trade_min_fields;
  trade_mutation_response: trade_mutation_response;
  trade_stddev_fields: trade_stddev_fields;
  trade_stddev_pop_fields: trade_stddev_pop_fields;
  trade_stddev_samp_fields: trade_stddev_samp_fields;
  trade_sum_fields: trade_sum_fields;
  trade_var_pop_fields: trade_var_pop_fields;
  trade_var_samp_fields: trade_var_samp_fields;
  trade_variance_fields: trade_variance_fields;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "bids"
  | "bids_aggregate"
  | "bids_aggregate_fields"
  | "bids_avg_fields"
  | "bids_max_fields"
  | "bids_min_fields"
  | "bids_mutation_response"
  | "bids_stddev_fields"
  | "bids_stddev_pop_fields"
  | "bids_stddev_samp_fields"
  | "bids_sum_fields"
  | "bids_var_pop_fields"
  | "bids_var_samp_fields"
  | "bids_variance_fields"
  | "offers"
  | "offers_aggregate"
  | "offers_aggregate_fields"
  | "offers_avg_fields"
  | "offers_max_fields"
  | "offers_min_fields"
  | "offers_mutation_response"
  | "offers_stddev_fields"
  | "offers_stddev_pop_fields"
  | "offers_stddev_samp_fields"
  | "offers_sum_fields"
  | "offers_var_pop_fields"
  | "offers_var_samp_fields"
  | "offers_variance_fields"
  | "trade"
  | "trade_aggregate"
  | "trade_aggregate_fields"
  | "trade_avg_fields"
  | "trade_max_fields"
  | "trade_min_fields"
  | "trade_mutation_response"
  | "trade_stddev_fields"
  | "trade_stddev_pop_fields"
  | "trade_stddev_samp_fields"
  | "trade_sum_fields"
  | "trade_var_pop_fields"
  | "trade_var_samp_fields"
  | "trade_variance_fields";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  bids_constraint: bids_constraint | undefined;
  bids_select_column: bids_select_column | undefined;
  bids_update_column: bids_update_column | undefined;
  offers_constraint: offers_constraint | undefined;
  offers_select_column: offers_select_column | undefined;
  offers_update_column: offers_update_column | undefined;
  order_by: order_by | undefined;
  trade_constraint: trade_constraint | undefined;
  trade_select_column: trade_select_column | undefined;
  trade_update_column: trade_update_column | undefined;
}
