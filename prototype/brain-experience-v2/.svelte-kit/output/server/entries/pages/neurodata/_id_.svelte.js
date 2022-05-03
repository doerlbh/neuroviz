import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/index-d88a766f.js";
import { g as getNeurodataById } from "../../../chunks/neurostore-8d9cf2de.js";
import "../../../chunks/index-5d0df34e.js";
async function load(ctx) {
  let id = ctx.params.id;
  const neurodatum = await getNeurodataById(id);
  return { props: { neurodatum } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { neurodatum } = $$props;
  neurodatum.types[0].type.name;
  if ($$props.neurodatum === void 0 && $$bindings.neurodatum && neurodatum !== void 0)
    $$bindings.neurodatum(neurodatum);
  return `${$$result.head += `${$$result.title = `<title>Neurodata - ${escape(neurodatum.name)}</title>`, ""}`, ""}

<div class="${"flex flex-col items-center"}"><h1 class="${"text-4xl text-center my-8"}">${escape(neurodatum.name)}</h1>
  <p>Type: <strong>${escape(neurodatum.name)}</strong> | Sample:
    <strong>${escape(neurodatum.weight)}</strong>
    | Dimension: <strong>${escape(neurodatum.height)}</strong></p>
  <img class="${"card-image"}"${add_attribute("src", neurodatum.image, 0)}${add_attribute("alt", neurodatum.name, 0)}></div>`;
});
export { U5Bidu5D as default, load };
