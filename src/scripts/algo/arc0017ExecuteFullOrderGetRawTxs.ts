import axios from 'axios';
import asa2asaV1 from '../data/arc0017.asa2asa.v1.hbl';
import algosdk from 'algosdk';
import { IState } from '../../contexts/app-context';
import * as base32 from 'hi-base32';
import getAlgodClient from './getAlgod';
import { IAuthState } from '../../contexts/AuthContext';
import { Escrow_Min_Fields, Offer_Min_Fields } from '../../generated/graphql';
import BigNumber from 'bignumber.js';

const arc0017ExecuteFullOrderGetRawTxs = (
  appData: IState,
  authContext: IAuthState,
  suggestedParams: algosdk.SuggestedParams,
  offer: Offer_Min_Fields,
  escrow: Escrow_Min_Fields
): algosdk.Transaction[] => {
  const tx1Data = {
    amount: offer.volume,
    from: escrow.address,
    to: authContext.authAddress,
    suggestedParams: { ...suggestedParams, fee: 0 },
    assetIndex: escrow.assetSell,
  };
  const price = new BigNumber(offer.volume).multipliedBy(new BigNumber(escrow.price)).dividedBy(new BigNumber(escrow.multiplier)).toFixed(0);
  const tx2Data = {
    amount: +price,
    from: authContext.authAddress,
    to: escrow.seller,
    suggestedParams: { ...suggestedParams, fee: 2000 },
    assetIndex: escrow.assetBuy,
  };
  console.log('txs', tx1Data, tx2Data);
  // take money from escrow
  const tx1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(tx1Data);

  /**
   * Send asa to sell
   */
  const tx2 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(tx2Data);
  tx1.fee = 0;
  tx2.fee = 2000;
  return algosdk.assignGroupID([tx1, tx2]);
};
export default arc0017ExecuteFullOrderGetRawTxs;
