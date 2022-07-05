import moment from 'moment';
import getAppConfiguration from '../common/getAppConfiguration';
import getIndexerClient from './getIndexer';

interface CacheItem {
  time: string;
  value: Record<string, any>;
}
const getAsset = async (asa: number) => {
  const cacheKey = `asa-${asa}`;
  const localCacheStr = localStorage.getItem(cacheKey);
  const localCache: CacheItem = JSON.parse(localCacheStr);

  let accountData: Record<string, any> = null;
  if (localCache && moment(localCache.time) > moment().subtract(1, 'hour')) {
    accountData = localCache.value;
    return accountData;
  }

  const appConfiguration = await getAppConfiguration();
  const indexer = getIndexerClient(appConfiguration);
  accountData = await indexer.lookupAssetByID(asa).do();
  localStorage.setItem(cacheKey, JSON.stringify({ time: moment().toISOString(), value: accountData }));
  return accountData;
};
export default getAsset;
