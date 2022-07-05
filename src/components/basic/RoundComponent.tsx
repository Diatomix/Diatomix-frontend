import { AppContext, IState } from '../../contexts/app-context';
import { gql, useSubscription } from '@apollo/client';
import { useContext, useEffect } from 'react';

const query = gql`
  subscription indexer($instance: String!) {
    indexer(where: { instance: { _eq: $instance } }, limit: 1) {
      round
      updated_at
    }
  }
`;
export default function RoundComponent() {
  const appData = useContext(AppContext);

  const { data, loading, error } = useSubscription(query, {
    variables: {
      instance: appData.environment,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>Error... {JSON.stringify(error)}</div>;
  }

  if (data.indexer.length <= 0) {
    return <div>Error...</div>;
  }

  const value = data.indexer[0].round;
  return (
    <div className="">
      <i className="pi pi-box"></i> {value}
    </div>
  );
}
