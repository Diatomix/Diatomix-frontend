import algosdk from 'algosdk';
import { IState } from '../../contexts/app-context';
import { IAuthState } from '../../contexts/AuthContext';
import { Escrow_Min_Fields } from '../../generated/graphql';

const arc0017CancelOrderWithAssetGetRawTxs = (appData: IState, authContext: IAuthState, suggestedParams: algosdk.SuggestedParams, escrow: Escrow_Min_Fields): algosdk.Transaction[] => {
  const tx1Data = {
    amount: 0,
    from: authContext.authAddress,
    to: authContext.authAddress,
    suggestedParams: { ...suggestedParams, fee: 4000 },
  };
  const tx2Data = {
    amount: 0,
    from: escrow.address,
    to: authContext.authAddress,
    suggestedParams: { ...suggestedParams, fee: 0 },
    assetIndex: escrow.assetSell,
    closeRemainderTo: authContext.authAddress,
  };
  const tx3Data = {
    amount: 0,
    from: escrow.address,
    to: authContext.authAddress,
    suggestedParams: { ...suggestedParams, fee: 0 },
    closeRemainderTo: authContext.authAddress,
  };
  console.log('txs', tx1Data, tx2Data);
  // take money from escrow
  const tx1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject(tx1Data);
  const tx2 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject(tx2Data);
  const tx3 = algosdk.makePaymentTxnWithSuggestedParamsFromObject(tx3Data);

  tx1.fee = 4000;
  tx2.fee = 0;
  tx3.fee = 0;
  return algosdk.assignGroupID([tx1, tx2, tx3]);
};
export default arc0017CancelOrderWithAssetGetRawTxs;
