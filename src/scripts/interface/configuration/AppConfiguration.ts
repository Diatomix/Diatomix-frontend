import NodeConfiguration from './NodeConfiguration';

export interface IAsset {
  asa1: number;
  asa2: number;
  name: string;
}

interface AppConfiguration {
  environment: string;
  assetList: Array<IAsset>;
  algod: NodeConfiguration;
  indexer: NodeConfiguration;
}
export default AppConfiguration;
