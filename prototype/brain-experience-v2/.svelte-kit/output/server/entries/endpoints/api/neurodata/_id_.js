import { g as getNeurodataById } from "../../../../chunks/neurostore-8d9cf2de.js";
import "../../../../chunks/index-5d0df34e.js";
import "../../../../chunks/index-d88a766f.js";
async function get({ params }) {
  let id = params.id;
  const neurodatum = await getNeurodataById(id);
  return {
    status: 200,
    body: neurodatum
  };
}
export { get };
