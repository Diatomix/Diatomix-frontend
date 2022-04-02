/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
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
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "bids". All fields are combined with a logical 'AND'. */
export interface bids_bool_exp {
  _and?: Maybe<Array<bids_bool_exp>>;
  _not?: Maybe<bids_bool_exp>;
  _or?: Maybe<Array<bids_bool_exp>>;
  amount?: Maybe<numeric_comparison_exp>;
  id?: Maybe<String_comparison_exp>;
  price?: Maybe<numeric_comparison_exp>;
}

/** unique or primary key constraints on table "bids" */
export enum bids_constraint {
  /** unique or primary key constraint */
  bids_pkey = "bids_pkey",
}

/** input type for incrementing numeric columns in table "bids" */
export interface bids_inc_input {
  amount?: Maybe<Scalars["numeric"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "bids" */
export interface bids_insert_input {
  amount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** on_conflict condition type for table "bids" */
export interface bids_on_conflict {
  constraint: bids_constraint;
  update_columns?: Array<bids_update_column>;
  where?: Maybe<bids_bool_exp>;
}

/** Ordering options when selecting data from "bids". */
export interface bids_order_by {
  amount?: Maybe<order_by>;
  id?: Maybe<order_by>;
  price?: Maybe<order_by>;
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
  id = "id",
  /** column name */
  price = "price",
}

/** input type for updating data in table "bids" */
export interface bids_set_input {
  amount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** update columns of table "bids" */
export enum bids_update_column {
  /** column name */
  amount = "amount",
  /** column name */
  id = "id",
  /** column name */
  price = "price",
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
}

/** Boolean expression to filter rows from the table "offers". All fields are combined with a logical 'AND'. */
export interface offers_bool_exp {
  _and?: Maybe<Array<offers_bool_exp>>;
  _not?: Maybe<offers_bool_exp>;
  _or?: Maybe<Array<offers_bool_exp>>;
  amount?: Maybe<numeric_comparison_exp>;
  id?: Maybe<String_comparison_exp>;
  price?: Maybe<numeric_comparison_exp>;
}

/** unique or primary key constraints on table "offers" */
export enum offers_constraint {
  /** unique or primary key constraint */
  offers_pkey = "offers_pkey",
}

/** input type for incrementing numeric columns in table "offers" */
export interface offers_inc_input {
  amount?: Maybe<Scalars["numeric"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** input type for inserting data into table "offers" */
export interface offers_insert_input {
  amount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** on_conflict condition type for table "offers" */
export interface offers_on_conflict {
  constraint: offers_constraint;
  update_columns?: Array<offers_update_column>;
  where?: Maybe<offers_bool_exp>;
}

/** Ordering options when selecting data from "offers". */
export interface offers_order_by {
  amount?: Maybe<order_by>;
  id?: Maybe<order_by>;
  price?: Maybe<order_by>;
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
  id = "id",
  /** column name */
  price = "price",
}

/** input type for updating data in table "offers" */
export interface offers_set_input {
  amount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
}

/** update columns of table "offers" */
export enum offers_update_column {
  /** column name */
  amount = "amount",
  /** column name */
  id = "id",
  /** column name */
  price = "price",
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

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
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
};
export const generatedSchema = {
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
  },
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
    id: { __type: "String!" },
    price: { __type: "numeric!" },
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
    id: { __type: "String_comparison_exp" },
    price: { __type: "numeric_comparison_exp" },
  },
  bids_inc_input: {
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  bids_insert_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
  },
  bids_max_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
  },
  bids_min_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
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
    id: { __type: "order_by" },
    price: { __type: "order_by" },
  },
  bids_pk_columns_input: { id: { __type: "String!" } },
  bids_set_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
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
    id: { __type: "String!" },
    price: { __type: "numeric!" },
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
    id: { __type: "String_comparison_exp" },
    price: { __type: "numeric_comparison_exp" },
  },
  offers_inc_input: {
    amount: { __type: "numeric" },
    price: { __type: "numeric" },
  },
  offers_insert_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
  },
  offers_max_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
  },
  offers_min_fields: {
    __typename: { __type: "String!" },
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
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
    id: { __type: "order_by" },
    price: { __type: "order_by" },
  },
  offers_pk_columns_input: { id: { __type: "String!" } },
  offers_set_input: {
    amount: { __type: "numeric" },
    id: { __type: "String" },
    price: { __type: "numeric" },
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
} as const;

export interface Query {
  __typename: "Query" | undefined;
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
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  delete_bids: (args: {
    where: bids_bool_exp;
  }) => Maybe<bids_mutation_response>;
  delete_bids_by_pk: (args: { id: Scalars["String"] }) => Maybe<bids>;
  delete_offers: (args: {
    where: offers_bool_exp;
  }) => Maybe<offers_mutation_response>;
  delete_offers_by_pk: (args: { id: Scalars["String"] }) => Maybe<offers>;
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
}

export interface Subscription {
  __typename: "Subscription" | undefined;
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
}

/**
 * columns and relationships of "bids"
 */
export interface bids {
  __typename: "bids" | undefined;
  amount: ScalarsEnums["numeric"];
  id: ScalarsEnums["String"];
  price: ScalarsEnums["numeric"];
}

/**
 * aggregated selection of "bids"
 */
export interface bids_aggregate {
  __typename: "bids_aggregate" | undefined;
  aggregate?: Maybe<bids_aggregate_fields>;
  nodes: Array<bids>;
}

/**
 * aggregate fields of "bids"
 */
export interface bids_aggregate_fields {
  __typename: "bids_aggregate_fields" | undefined;
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
  __typename: "bids_avg_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface bids_max_fields {
  __typename: "bids_max_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate min on columns
 */
export interface bids_min_fields {
  __typename: "bids_min_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * response of any mutation on the table "bids"
 */
export interface bids_mutation_response {
  __typename: "bids_mutation_response" | undefined;
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
  __typename: "bids_stddev_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface bids_stddev_pop_fields {
  __typename: "bids_stddev_pop_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface bids_stddev_samp_fields {
  __typename: "bids_stddev_samp_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface bids_sum_fields {
  __typename: "bids_sum_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface bids_var_pop_fields {
  __typename: "bids_var_pop_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface bids_var_samp_fields {
  __typename: "bids_var_samp_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface bids_variance_fields {
  __typename: "bids_variance_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * columns and relationships of "offers"
 */
export interface offers {
  __typename: "offers" | undefined;
  amount: ScalarsEnums["numeric"];
  id: ScalarsEnums["String"];
  price: ScalarsEnums["numeric"];
}

/**
 * aggregated selection of "offers"
 */
export interface offers_aggregate {
  __typename: "offers_aggregate" | undefined;
  aggregate?: Maybe<offers_aggregate_fields>;
  nodes: Array<offers>;
}

/**
 * aggregate fields of "offers"
 */
export interface offers_aggregate_fields {
  __typename: "offers_aggregate_fields" | undefined;
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
  __typename: "offers_avg_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface offers_max_fields {
  __typename: "offers_max_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate min on columns
 */
export interface offers_min_fields {
  __typename: "offers_min_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * response of any mutation on the table "offers"
 */
export interface offers_mutation_response {
  __typename: "offers_mutation_response" | undefined;
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
  __typename: "offers_stddev_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface offers_stddev_pop_fields {
  __typename: "offers_stddev_pop_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface offers_stddev_samp_fields {
  __typename: "offers_stddev_samp_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface offers_sum_fields {
  __typename: "offers_sum_fields" | undefined;
  amount?: Maybe<ScalarsEnums["numeric"]>;
  price?: Maybe<ScalarsEnums["numeric"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface offers_var_pop_fields {
  __typename: "offers_var_pop_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface offers_var_samp_fields {
  __typename: "offers_var_samp_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface offers_variance_fields {
  __typename: "offers_variance_fields" | undefined;
  amount?: Maybe<ScalarsEnums["Float"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
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
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
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
  | "offers_variance_fields";

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
}
