import axios from 'axios';
import asa2asaV1 from '../data/arc0017.asa2asa.v1.hbl';
import algosdk from 'algosdk';
import { IState } from '../../contexts/app-context';
import * as base32 from 'hi-base32';
import getAlgodClient from './getAlgod';
import { IAuthState } from '../../contexts/AuthContext';

const arc0017CreateOrderGetRawTxs = (appData: IState, authContext: IAuthState, suggestedParams: algosdk.SuggestedParams): algosdk.Transaction[] => {
  const tx1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 200000, // 3 assets to opt in min balance (asa to sell, algo)
    from: authContext.authAddress,
    to: appData.orderCompiled.hash,
    suggestedParams: { ...suggestedParams, fee: 3000 },
  });
  /**
   * Opt in to asa to sell
   */
  const tx2 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    amount: 0, // 3 assets to opt in min balance (asa1, asa2, algo)
    from: appData.orderCompiled.hash,
    to: appData.orderCompiled.hash,
    suggestedParams: { ...suggestedParams, fee: 0 },
    assetIndex: appData.isSellOrder ? appData.asa2 : appData.asa1,
  });
  /**
   * Send asa to sell
   */
  const tx3 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    amount: appData.isSellOrder ? +appData.asa2SellBigInt : +appData.asa1SellBigInt,
    from: authContext.authAddress,
    to: appData.orderCompiled.hash,
    suggestedParams: { ...suggestedParams, fee: 0 },
    assetIndex: appData.isSellOrder ? appData.asa2 : appData.asa1,
  });
  tx1.fee = 3000;
  tx2.fee = 0;
  tx3.fee = 0;
  return algosdk.assignGroupID([tx1, tx2, tx3]);
};
export default arc0017CreateOrderGetRawTxs;
