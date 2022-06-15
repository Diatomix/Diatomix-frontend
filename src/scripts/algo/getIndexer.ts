import algosdk from 'algosdk';
import { CustomTokenHeader } from 'algosdk/dist/types/src/client/urlTokenBaseHTTPClient';
import getAppConfiguration from '../common/getAppConfiguration';
import AppConfiguration from '../interface/configuration/AppConfiguration';

const getIndexerClient = (config: AppConfiguration) => {
  const auth: CustomTokenHeader = {};
  auth[config.indexer.header] = config.indexer.token;
  return new algosdk.Indexer(auth, config.indexer.host, config.indexer.port);
};
export default getIndexerClient;
