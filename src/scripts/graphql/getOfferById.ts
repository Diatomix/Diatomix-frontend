import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import getApolloClient from '../../components/getApolloClient';
import { IState } from '../../contexts/app-context';
import { IAuthState } from '../../contexts/AuthContext';
import { Offer_Min_Fields } from '../../generated/graphql';

const query = gql`
  query offer($id: String!) {
    offer(where: { id: { _eq: $id } }, limit: 1) {
      id
      volume
      owner
      assetBuy
      assetSell
      price
      env
    }
  }
`;

const getOfferById = async (id: string, authData: IAuthState): Promise<Offer_Min_Fields> => {
  const client = getApolloClient(authData);
  const res = await client.query({
    query: query,
    variables: {
      id: id,
    },
  });
  if (!res || !res.data || !res.data.offer || res.data.offer.length == 0) return {};
  return res.data.offer[0] as Offer_Min_Fields;
};
export default getOfferById;
