import getAppConfiguration from '../common/getAppConfiguration';
import getIndexerClient from './getIndexer';
import moment from 'moment';
interface CacheItem {
  time: string;
  value: Record<string, any>;
}
const getBalanceAtAccount = async (account: string, asa: number): Promise<number> => {
  try {
    const cacheKey = `${account}-${asa}`;
    const localCacheStr = localStorage.getItem(cacheKey);
    const localCache: CacheItem = JSON.parse(localCacheStr);
    let accountData: Record<string, any> = null;
    if (localCache && moment(localCache.time) > moment().subtract(10, 'second')) {
      accountData = localCache.value;
    }
    if (!accountData) {
      const appConfiguration = await getAppConfiguration();
      const indexer = getIndexerClient(appConfiguration);
      accountData = await indexer.lookupAccountByID(account).do();
      localStorage.setItem(cacheKey, JSON.stringify({ time: moment().toISOString(), value: accountData }));
    }
    if (!accountData || !accountData.account || !accountData.account.assets) return 0;
    const asset = accountData.account.assets.find(a => a['asset-id'] == asa);
    if (!asset || asset['is-frozen'] || asset['deleted']) return 0;
    return asset.amount;
  } catch (e) {
    console.error(e);
    return 0;
  }
};
export default getBalanceAtAccount;
