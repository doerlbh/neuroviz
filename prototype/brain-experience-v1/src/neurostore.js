import { writable } from 'svelte/store';

export const neurodata = writable([]);
const neurodataDetails = {};
let loaded = false;

export const fetchNeurodata = async () => {
	if (loaded) return;
	const url = `./data/neurodatasets.json`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedNeurodata = data.datasets.map((data, index) => ({
		name: data.dataset_name,
		id: data.dataset_id,
		image: `https://picsum.photos/300/200?random=${
			data.dataset_id
		}`
	}));
	neurodata.set(loadedNeurodata);
	loaded = true;
};

export const getNeurodataById = async (id) => {
	if (neurodataDetails[id]) return neurodataDetails[id];

	try {
		const url = `./data/neurodatasets.json`;
		const res = await fetch(url);
		const data = await res.json();
		const data_bit = data.datasets[id];
		data_bit["image"] = `https://picsum.photos/300/200?random=${id}`;
		neurodataDetails[id] = data_bit;
		return data_bit;
	} catch (err) {
		console.error(err);
		return null;
	}
};
