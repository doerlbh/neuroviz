/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	let id = params.id;

	if (id) {
		return {
			status: 200,
			body: { id }
		};
	}

	return {
		status: 404
	};
}
