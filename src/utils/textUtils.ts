const API_KEY = "f4nA7EJOnybwdpv9cnTsCG10bpEKm54g";

export const ITEM_LIMIT = 25;

export const getUrl = (
  searchValue: string,
  startingItem: number,
  apiKey: string = API_KEY
) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=${ITEM_LIMIT}&offset=${startingItem}`;
};
