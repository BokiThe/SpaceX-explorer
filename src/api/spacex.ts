import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v4';

const spacexApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function fetchFromSpaceX(endpoint: string, options = {}, maxRetries = 3, backoffMs = 500): Promise<unknown> {
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      const response = await spacexApi.get(endpoint, options);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const status = axiosError?.response?.status;
    
      if ((status === 429 || (status && status >= 500 && status < 600)) && attempt < maxRetries) {
        const delay = backoffMs * Math.pow(2, attempt); 
        await new Promise(res => setTimeout(res, delay));
        attempt++;
        continue;
      }
      console.error('SpaceX API error:', axiosError);
      throw axiosError;
    }
  }
}

export default spacexApi;
