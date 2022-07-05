import algosdk from 'algosdk';
import { CustomTokenHeader } from 'algosdk/dist/types/src/client/urlTokenBaseHTTPClient';
import getAppConfiguration from '../common/getAppConfiguration';
import AppConfiguration from '../interface/configuration/AppConfiguration';

const getAlgodClient = (config: AppConfiguration) => {
  const auth: CustomTokenHeader = {};
  auth[config.algod.header] = config.algod.token;
  return new algosdk.Algodv2(auth, config.algod.host, config.algod.port);
};
export default getAlgodClient;
