import { writable } from "svelte/store";

export const neurodata = writable([]);
const neurodataDetails = {};
let loaded = false;

export const fetchNeurodata = async () => {
  if (loaded) return;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedNeurodata = data.results.map((data, index) => ({
    name: data.name,
    id: index + 1,
    image: `https://picsum.photos/200/200?random=${index + 1}`,
  }));
  neurodata.set(loadedNeurodata);
  loaded = true;
};

export const getNeurodataById = async (id) => {
  if (neurodataDetails[id]) return neurodataDetails[id];

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    data.image = `https://picsum.photos/200/200?random=${id}`;
    neurodataDetails[id] = data;
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
