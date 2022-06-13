import axios from 'axios';
import asa2asaV1 from '../data/arc0017.asa2asa.v1.hbl';
import { IState } from '../../contexts/app-context';

const arc0017Contract = (appData: IState): string => {
  const data = {
    seller: appData.authAddress,
    price: appData.price,
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
