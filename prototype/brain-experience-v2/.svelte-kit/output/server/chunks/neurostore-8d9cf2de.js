import { w as writable } from "./index-5d0df34e.js";
const neurodata = writable([]);
const neurodataDetails = {};
let loaded = false;
const fetchNeurodata = async () => {
  if (loaded)
    return;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedNeurodata = data.results.map((data2, index) => ({
    name: data2.name,
    id: index + 1,
    image: `https://picsum.photos/200/200?random=${index + 1}`
  }));
  neurodata.set(loadedNeurodata);
  loaded = true;
};
const getNeurodataById = async (id) => {
  if (neurodataDetails[id])
    return neurodataDetails[id];
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
export { fetchNeurodata as f, getNeurodataById as g, neurodata as n };
