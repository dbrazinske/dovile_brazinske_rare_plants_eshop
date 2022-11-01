const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'api/rarePlants';
const relationsParams = 'joinBy=categoryId';

const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const items = await response.json();

  return items;
};

const fetchById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?${relationsParams}`);
  if (response.status === 404) {
    throw new Error(`RarePlant with id '${id}' not found.`);
  }
  const item = await response.json();

  return item;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const items = await fetchAll(idsParamsString);

  return items;
};

const update = async ({ id, ...updateProps }) => {
  const response = await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const getPriceRange = async () => {
  const response = await fetch(`${domain}/${collectionName}/price-range`);
  const priceRange = await response.json();

  return priceRange;
};

const RarePlantService = {
  fetchAll,
  fetchByIdArr,
  fetchById,
  update,
  getPriceRange,
};

export default RarePlantService;
