import { cryptoAssets} from './data'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'NpaDye0AxqU66XxiSn1SNVAiLZToykzwsnwztZ8uJLU='
  }}
export async function fakeFetchCrypto() {
  const response = await fetch("https://openapiv1.coinstats.app/coins", options);
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 2000)
  })
}
