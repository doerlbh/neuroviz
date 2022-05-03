import { c as create_ssr_component, v as validate_component } from "../../chunks/index-d88a766f.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-sm md:text-lg hover:scale-110"}" href="${"/"}">Home</a>
  <a class="${"mx-4 text-sm md:text-lg hover:scale-110"}" href="${"/neuroscience"}">Neuroscience</a>
  <a class="${"mx-4 text-sm md:text-lg hover:scale-110"}" href="${"/visualization"}">Visualization</a>
  <a class="${"mx-4 text-sm md:text-lg hover:scale-110"}" href="${"/references"}">References</a></nav>

<div class="${"invisible md:visible fixed h-32 w-32 ..."}"><div class="${"fixed top-8 h-16 ..."}"><div class="${"absolute left-0 lg:-left-20 w-16 ..."}"><a href="${"/"}"><img alt="${"favicon"}" src="${"/favicon/android-chrome-512x512.png"}"></a></div></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-gray-100 text-center lg:text-left"}"><div class="${"text-gray-700 text-center p-4"}">Copyright \xA9 2022 Baihan Lin. All Rights Reserved.
  </div></footer>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"p-8 max-w-6xl mx-auto"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
