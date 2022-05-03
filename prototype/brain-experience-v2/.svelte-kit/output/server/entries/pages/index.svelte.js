import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../chunks/index-d88a766f.js";
import { f as fetchNeurodata, n as neurodata } from "../../chunks/neurostore-8d9cf2de.js";
import "../../chunks/index-5d0df34e.js";
const NeurodataCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { neurodata: neurodata2 } = $$props;
  if ($$props.neurodata === void 0 && $$bindings.neurodata && neurodata2 !== void 0)
    $$bindings.neurodata(neurodata2);
  return `
<a class="${"list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", `/neurodata/${neurodata2.id}`, 0)}><img class="${"h-40 w-40 "}"${add_attribute("src", neurodata2.image, 0)}${add_attribute("alt", neurodata2.name, 0)}>
  <h2 class="${"uppercase text-2xl"}">${escape(neurodata2.id)}. ${escape(neurodata2.name)}</h2></a>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $neurodata, $$unsubscribe_neurodata;
  $$unsubscribe_neurodata = subscribe(neurodata, (value) => $neurodata = value);
  let searchTerm = "";
  let filteredNeurodata = [];
  fetchNeurodata();
  {
    {
      {
        filteredNeurodata = [...$neurodata];
      }
    }
  }
  $$unsubscribe_neurodata();
  return `${$$result.head += `${$$result.title = `<title>Brain Experience</title>`, ""}`, ""}

<h1 class="${"text-2xl md:text-4xl text-center my-8"}"><span class="${"font-semibold"}">Brain</span> Experience
</h1>

<p class="${"text-base md:text-lg"}">Pick a dataset to visualization <br><br></p>

<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" placeholder="${"Search a project"}"${add_attribute("value", searchTerm, 0)}>
<div class="${"py-4 grid gap-4 md:grid-cols-3 grid-cols-1"}">${each(filteredNeurodata, (neurodata2) => {
    return `${validate_component(NeurodataCard, "NeurodataCard").$$render($$result, { neurodata: neurodata2 }, {}, {})}`;
  })}</div>`;
});
export { Routes as default };
