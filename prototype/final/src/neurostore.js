import { writable } from "svelte/store";
import { stim_data } from "./routes/_data/allen_stim"
import { data } from "./routes/_data/allen_tiny_tiny_tiny"

export const neurodata = writable([]);
export const selected_id = writable(-1);
const neurodataDetails = {};
let loaded = false;

export const fetchNeurodata = async () => {
  if (loaded) return;
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  // const res = await fetch(url);
  // const data = await res.json();
  // const loadedNeurodata = data.results.map((data, index) => ({
  // const stimuli = [...Array(118).keys()];
  const loadedNeurodata = stim_data.data.map((data, index) => ({
    name: `Stimulus ${data.index}`,
    id: `${data.index}`,
    first_label: `${data.first_label}`,
    second_label: `${data.second_label}`,
    image: `/allen_stim/natural_scenes/${data.index}.jpg`,
  }));
  neurodata.set(loadedNeurodata);
  loaded = true;
};

export const fetchArtificialdata = async () => {
  if (loaded) return;
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  // const res = await fetch(url);
  // const data = await res.json();
  // const loadedNeurodata = data.results.map((data, index) => ({
  const stimuli = [...Array(100).keys()];
  const loadedNeurodata = stimuli.map((data, index) => ({
    name: `Stimulus ${index}`,
    id: index + 1,
    // image: `/allen_stim/natural_scenes/${index}.jpg`,
    image: `https://picsum.photos/200/200?random=${index + 1}`,
  }));
  neurodata.set(loadedNeurodata);
  loaded = true;
};

export const getArtificialdataById = async (id) => {
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

export const getNeurodataById = async (id) => {
  if (neurodataDetails[id]) return neurodataDetails[id];

    var detailedData = stim_data.data[id];
    detailedData.name = `Stimulus ${id}`;
    detailedData.id = `${id}`;
    detailedData.image = `/allen_stim/natural_scenes/${id}.jpg`;
    neurodataDetails[id] = detailedData;
    return detailedData;
};