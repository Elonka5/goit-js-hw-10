const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_4PJkLDVz5iAie0NzjjgCjwuNhZO8y1l4TaeJ2szvATn2sOZkaiExWoW5P7ZEdeME';

export function fetchBreeds() {
  return fetch(BASE_URL).then(resp => {

    if (!resp.ok) throw new Error(resp.statusText);
    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${SEARCH_URL}?breed_ids=${breedId}&api_key=${API_KEY}`).then(
    resp => {
        
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    }
  );
}

// export { fetchBreeds, fetchCatByBreed };

//const BASE_URL = 'https://api.thecatapi.com/v1';

//https://api.thecatapi.com/v1/breeds value

// https://api.thecatapi.com/v1/images/search

// endpoint: ./breeds
// e.g. https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}

// Here's your API key:

// live_N5kR3mvggKXMNRidiqiuOlM4ggV7Eu6NfgM77O0AR866LPS5HpqOKIEzD1Umqb1m

// Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_N5kR3mvggKXMNRidiqiuOlM4ggV7Eu6NfgM77O0AR866LPS5HpqOKIEzD1Umqb1m'

// const options = {
//   headers: {
//     'x-api-key': 'live_N5kR3mvggKXMNRidiqiuOlM4ggV7Eu6NfgM77O0AR866LPS5HpqOKIEzD1Umqb1m',
//   },
// };

// з'являється зображення і розгорнута інформація про кота: назва породи, опис і темперамент.

function renderCatsList(cats) {
  const markup = users
    .map(({ name, temperament, description }) => {
      return `<li>
            <p><b>: ${name}</b></p>
            <p>:${description}</p>
            <p><b>Temperament</b>: ${temperament}</p>
          </li>`;
    })
    .join('');
  renderCatsList.innerHTML = markup;
}
