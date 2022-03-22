export async function get({ctx}){
	const url = `./data/neurodatasets.json`;
	const res = await fetch(url);
	const data = await res.json();
	const neurodata = data.datasets.map((data, index) => ({
		name: data.dataset_name,
		id: data.dataset_id,
		image: `https://picsum.photos/300/200?random=${
			data.dataset_id
		}`
	}));
    return {
        status: 200,
        body: neurodata
    }
}