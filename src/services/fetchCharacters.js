const endpoint = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const fetchCharacters = () => {
  return fetch(endpoint).then(response => response.json());
};

export { fetchCharacters };
