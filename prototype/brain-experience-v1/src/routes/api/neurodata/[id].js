import { getNeurodataById } from "../../../neurostore";

export async function get({ params }){
    let id = params.id;
    const neurodatum = await getNeurodataById(id);
    return {
        status: 200,
        body: neurodatum
    }
}