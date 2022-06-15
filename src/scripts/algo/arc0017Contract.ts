import axios from 'axios';
import asa2asaV1 from '../data/arc0017.asa2asa.v1.hbl';
import algosdk from 'algosdk';
import { IState } from '../../contexts/app-context';
import * as base32 from 'hi-base32';

const arc0017Contract = (appData: IState): string => {
  if (!appData.authAddress) {
    return '';
  }

  if (!appData.asa1) {
    return '';
  }
  if (!appData.asa2) {
    return '';
  }

  const addrbuffer = Buffer.from(base32.decode.asBytes(appData.authAddress));
  const trimAddr = Buffer.from(addrbuffer.subarray(0, -4));
  let addrHex = trimAddr.toString('hex');
  addrHex = '0x' + addrHex;

  let price = appData.isSellOrder ? parseFloat((1 / appData.price).toFixed(6)) : appData.price;
  let multiplier = 1;
  while (multiplier < 10 ** 10) {
    if (price % 10 == 0) break;
    price = price * 10;
    multiplier = multiplier * 10;
  }
  price = Math.round(price);
  while (multiplier % 10 == 0 && price % 10 == 0) {
    price = price / 10;
    multiplier = multiplier / 10;
  }

  const data = {
    seller: addrHex,
    price: price,
    multiplier: multiplier,
    assetSell: appData.isSellOrder ? appData.asa2 : appData.asa1,
    assetBuy: appData.isSellOrder ? appData.asa1 : appData.asa2,
  };
  console.log('data', data);
  let asa2asaV1Str = (' ' + asa2asaV1).slice(1);
  for (let index in data) {
    console.log('index', index, data[index]);
    asa2asaV1Str = asa2asaV1Str.replace(`{{${index}}}`, data[index]);
  }
  return asa2asaV1Str; /**/
};
export default arc0017Contract;
