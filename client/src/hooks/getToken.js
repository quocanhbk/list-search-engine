import { PublicClientApplication } from '@azure/msal-browser';
import { config } from '../msalConfig';
const msalInstance = new PublicClientApplication(config)
const getToken = async () => {
  const accounts = msalInstance.getAllAccounts();
  const request = {
    scopes: ['api://f8626081-3f81-4909-bcef-14f0a974f079/search_list'],
    account: accounts[0],
  }
  const token = await msalInstance.acquireTokenSilent(request);
  return token;
};

export default getToken;
