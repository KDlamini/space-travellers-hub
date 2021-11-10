const url = 'https://api.spacexdata.com/v3/missions'; // TODO: Add your url code here

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// TODO: Change 'fetchData' to 'fetchMissions'
export const fetchMissions = () => getData(url);

// TODO: Change 'fetchData2' to 'fetchRockets'
export const fetchData2 = () => getData(url);
