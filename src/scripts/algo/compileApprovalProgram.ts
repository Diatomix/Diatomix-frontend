import getAppConfiguration from '../common/getAppConfiguration';
import getAlgodClient from './getAlgod';

const compileApprovalProgram = async (program: string) => {
  const appConfiguration = await getAppConfiguration();
  const algod = await getAlgodClient(appConfiguration);
  const app = await algod.compile(program).do();
  return app;
};
export default compileApprovalProgram;
