import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import getApolloClient from '../../components/getApolloClient';
import { IState } from '../../contexts/app-context';
import { IAuthState } from '../../contexts/AuthContext';
import { Escrow_Min_Fields } from '../../generated/graphql';

const query = gql`
  query escrow($address: String!) {
    escrow(where: { address: { _eq: $address } }, limit: 1) {
      address
      seller
      assetBuy
      assetSell
      price
      multiplier
      env
      lsig
    }
  }
`;

const getEscrowById = async (id: string, authData: IAuthState): Promise<Escrow_Min_Fields> => {
  const client = getApolloClient(authData);
  const res = await client.query({
    query: query,
    variables: {
      address: id,
    },
  });
  if (!res || !res.data || !res.data.escrow || res.data.escrow.length == 0) return {};
  return res.data.escrow[0] as Escrow_Min_Fields;
};
export default getEscrowById;
