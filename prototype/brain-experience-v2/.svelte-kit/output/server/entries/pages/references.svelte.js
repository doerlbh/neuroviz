import { c as create_ssr_component, e as escape, d as subscribe, b as add_attribute, f as each, v as validate_component } from "../../chunks/index-d88a766f.js";
import { w as writable } from "../../chunks/index-5d0df34e.js";
const PubCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pubdata } = $$props;
  if ($$props.pubdata === void 0 && $$bindings.pubdata && pubdata !== void 0)
    $$bindings.pubdata(pubdata);
  return `<a class="${"pubcards hover:shadow-md"}" href="${" "}"><p id="${"pubterm"}" class="${"text-base md:text-lg"}"><span class="${"font-semibold"}">[${escape(pubdata.type)}-${escape(pubdata.displayid)}]</span>
    <!-- HTML_TAG_START -->${pubdata.authors}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.year}<!-- HTML_TAG_END -->, &quot;${escape(pubdata.title)},&quot;
    <em>${escape(pubdata.venue)}</em>
    <!-- HTML_TAG_START -->${pubdata.arxiv}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.code}<!-- HTML_TAG_END -->
    <!-- HTML_TAG_START -->${pubdata.demo}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.video}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.pdf}<!-- HTML_TAG_END -->
    <!-- HTML_TAG_START -->${pubdata.slides}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.poster}<!-- HTML_TAG_END --><!-- HTML_TAG_START -->${pubdata.link}<!-- HTML_TAG_END -->
    <!-- HTML_TAG_START -->${pubdata.cite}<!-- HTML_TAG_END --></p></a>`;
});
const jpubs = writable([]);
const mpubs = writable([]);
const cpubs = writable([]);
const epubs = writable([]);
const ppubs = writable([]);
let loaded = false;
function fetchPubdataSingle(data, startIndex, Pubtype) {
  let dataout = data.Sheet1.filter((x) => x.display && x.type == Pubtype).sort((a, b) => a.year - b.year || a.month - b.month).map((x, index) => ({
    type: x.type,
    year: x.year ? " (" + x.year + ")" : "",
    id: x.id,
    nid: index + startIndex,
    citelink: x.citelink,
    cite: x.cite && x.citelink ? ', Cited by <a href="' + x.citelink + '"><u>' + x.cite + "</u></a>" : "",
    title: x.title,
    authors: x.authors.replace(/Baihan Lin/gi, '<span class="font-semibold">Baihan Lin</span>'),
    venue: x.venue,
    arxiv: x.arxiv ? ' [<a href="' + x.arxiv + '"><u>arxiv</u></a>]' : "",
    image: `pubs/${x.image}`,
    bibtex: x.bibtex ? ' [<a href="bibs/' + x.bibtex + '"><u>bib</u></a>]' : "",
    linkname: x.linkname,
    link: x.link && x.linkname ? ' [<a href="' + x.link + '"><u>' + x.linkname + "</u></a>]" : "",
    poster: x.poster ? ' [<a href="' + x.poster + '"><u>poster</u></a>]' : "",
    pdf: x.pdf ? ' [<a href="' + x.pdf + '"><u>pdf</u></a>]' : "",
    slides: x.slides ? ' [<a href="' + x.slides + '"><u>slides</u></a>]' : "",
    code: x.code ? ' [<a href="' + x.code + '"><u>code</u></a>]' : "",
    video: x.video ? ' [<a href="' + x.video + '"><u>video</u></a>]' : "",
    demo: x.demo ? ' [<a href="' + x.demo + '"><u>demo</u></a>]' : "",
    abstract: x.abstract,
    with: x.with,
    areas: x.areas.split("-")
  })).sort((a, b) => b.nid - a.nid);
  return dataout;
}
const fetchPubdataTypes = async () => {
  if (loaded)
    return;
  const url = `https://www.neuroinference.com/data/pubs.json`;
  const res = await fetch(url);
  const data = await res.json();
  let startIndex = 1;
  let dataout = fetchPubdataSingle(data, startIndex, "E");
  epubs.set(dataout);
  dataout = fetchPubdataSingle(data, startIndex, "C");
  cpubs.set(dataout);
  dataout = fetchPubdataSingle(data, startIndex, "J");
  jpubs.set(dataout);
  dataout = fetchPubdataSingle(data, startIndex, "M");
  mpubs.set(dataout);
  dataout = fetchPubdataSingle(data, startIndex, "P");
  ppubs.set(dataout);
  loaded = true;
};
const References = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mpubs, $$unsubscribe_mpubs;
  let $jpubs, $$unsubscribe_jpubs;
  let $cpubs, $$unsubscribe_cpubs;
  let $epubs, $$unsubscribe_epubs;
  $$unsubscribe_mpubs = subscribe(mpubs, (value) => $mpubs = value);
  $$unsubscribe_jpubs = subscribe(jpubs, (value) => $jpubs = value);
  $$unsubscribe_cpubs = subscribe(cpubs, (value) => $cpubs = value);
  $$unsubscribe_epubs = subscribe(epubs, (value) => $epubs = value);
  let searchTerm = "";
  let filteredEpubs = [];
  let filteredCpubs = [];
  let filteredJpubs = [];
  let filteredMpubs = [];
  fetchPubdataTypes();
  {
    {
      {
        filteredEpubs = [...$epubs].map((x, i) => ({ ...x, displayid: x.nid }));
      }
    }
  }
  {
    {
      {
        filteredCpubs = [...$cpubs].map((x, i) => ({ ...x, displayid: x.nid }));
      }
    }
  }
  {
    {
      {
        filteredJpubs = [...$jpubs].map((x, i) => ({ ...x, displayid: x.nid }));
      }
    }
  }
  {
    {
      {
        filteredMpubs = [...$mpubs].map((x, i) => ({ ...x, displayid: x.nid }));
      }
    }
  }
  $$unsubscribe_mpubs();
  $$unsubscribe_jpubs();
  $$unsubscribe_cpubs();
  $$unsubscribe_epubs();
  return `${$$result.head += `${$$result.title = `<title>Brain Experience | References</title>`, ""}`, ""}

<h1 class="${"text-2xl md:text-4xl text-center my-8"}"><span class="${"font-semibold break-all"}">References</span></h1>
<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" placeholder="${"Search a publication"}"${add_attribute("value", searchTerm, 0)}>

<br>
<h2 class="${"font-semibold text-lg md:text-2xl my-4"}">Manuscripts and preprints
</h2>
<div class="${"py-4 grid gap-4 grid-cols-1"}">${each(filteredMpubs, (pubdata) => {
    return `${validate_component(PubCard, "PubCard").$$render($$result, { pubdata }, {}, {})}`;
  })}

  <h2 class="${"font-semibold text-lg md:text-2xl my-4"}">Peer-reviewed journal publications
  </h2>
  ${each(filteredJpubs, (pubdata) => {
    return `${validate_component(PubCard, "PubCard").$$render($$result, { pubdata }, {}, {})}`;
  })}

  <h2 class="${"font-semibold text-lg md:text-2xl my-4"}">Peer-reviewed conference proceedings
  </h2>
  ${each(filteredCpubs, (pubdata) => {
    return `${validate_component(PubCard, "PubCard").$$render($$result, { pubdata }, {}, {})}`;
  })}

  <h2 class="${"font-semibold text-lg md:text-2xl my-4"}">Peer-reviewed extended abstracts
  </h2>
  ${each(filteredEpubs, (pubdata) => {
    return `${validate_component(PubCard, "PubCard").$$render($$result, { pubdata }, {}, {})}`;
  })}</div>`;
});
export { References as default };
