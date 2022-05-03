import { writable } from "svelte/store";

export const pubdata = writable([]);
export const manuscripts = writable([]);

export const jpubs = writable([]);
export const mpubs = writable([]);
export const cpubs = writable([]);
export const epubs = writable([]);
export const ppubs = writable([]);

const neurodataDetails = {};
let loaded = false;

function fetchPubdataSingle(data, startIndex, Pubtype) {
  let dataout = data.Sheet1.filter((x) => x.display && x.type == Pubtype)
    .sort((a, b) => a.year - b.year || a.month - b.month)
    .map((x, index) => ({
      type: x.type,
      year: x.year ? " (" + x.year + ")" : "",
      id: x.id,
      nid: index + startIndex,
      citelink: x.citelink,
      cite:
        x.cite && x.citelink
          ? ', Cited by <a href="' + x.citelink + '"><u>' + x.cite + "</u></a>"
          : "",
      title: x.title,
      authors: x.authors.replace(
        /Baihan Lin/gi,
        '<span class="font-semibold">Baihan Lin</span>'
      ),
      venue: x.venue,
      arxiv: x.arxiv ? ' [<a href="' + x.arxiv + '"><u>arxiv</u></a>]' : "",
      image: `pubs/${x.image}`,
      bibtex: x.bibtex
        ? ' [<a href="bibs/' + x.bibtex + '"><u>bib</u></a>]'
        : "",
      linkname: x.linkname,
      link:
        x.link && x.linkname
          ? ' [<a href="' + x.link + '"><u>' + x.linkname + "</u></a>]"
          : "",
      poster: x.poster ? ' [<a href="' + x.poster + '"><u>poster</u></a>]' : "",
      pdf: x.pdf ? ' [<a href="' + x.pdf + '"><u>pdf</u></a>]' : "",
      slides: x.slides ? ' [<a href="' + x.slides + '"><u>slides</u></a>]' : "",
      code: x.code ? ' [<a href="' + x.code + '"><u>code</u></a>]' : "",
      video: x.video ? ' [<a href="' + x.video + '"><u>video</u></a>]' : "",
      demo: x.demo ? ' [<a href="' + x.demo + '"><u>demo</u></a>]' : "",
      abstract: x.abstract,
      with: x.with,
      areas: x.areas.split("-"),
    }))
    .sort((a, b) => b.nid - a.nid);
  return dataout;
}

export const fetchPubdataTypes = async () => {
  if (loaded) return;
  const url = `https://www.neuroinference.com/data/pubs.json`;
  const res = await fetch(url);
  const data = await res.json();

  let startIndex = 1;
  let dataout = fetchPubdataSingle(data, startIndex, "E");
  epubs.set(dataout);

  // startIndex += dataout.length
  dataout = fetchPubdataSingle(data, startIndex, "C");
  cpubs.set(dataout);

  // startIndex += dataout.length
  dataout = fetchPubdataSingle(data, startIndex, "J");
  jpubs.set(dataout);

  // startIndex += dataout.length
  dataout = fetchPubdataSingle(data, startIndex, "M");
  mpubs.set(dataout);

  // startIndex += dataout.length
  dataout = fetchPubdataSingle(data, startIndex, "P");
  ppubs.set(dataout);

  loaded = true;
};

export const fetchPubdata = async () => {
  if (loaded) return;
  const url = `https://www.neuroinference.com/data/pubs.json`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedData = data.Sheet1.filter((x) => x.display && x.year != null)
    .sort((a, b) => a.year - b.year || a.month - b.month)
    .map((x, index) => ({
      type: x.type,
      year: x.year ? " (" + x.year + ")" : "",
      id: x.id,
      nid: index + 1,
      citelink: x.citelink,
      cite:
        x.cite && x.citelink
          ? ', Cited by <a href="' + x.citelink + '"><u>' + x.cite + "</u></a>"
          : "",
      title: x.title,
      authors: x.authors.replace(
        /Baihan Lin/gi,
        '<span class="font-semibold">Baihan Lin</span>'
      ),
      venue: x.venue,
      arxiv: x.arxiv ? ' [<a href="' + x.arxiv + '"><u>arxiv</u></a>]' : "",
      image: `pubs/${x.image}`,
      bibtex: x.bibtex
        ? ' [<a href="bibs/' + x.bibtex + '"><u>bib</u></a>]'
        : "",
      linkname: x.linkname,
      link:
        x.link && x.linkname
          ? ' [<a href="' + x.link + '"><u>' + x.linkname + "</u></a>]"
          : "",
      poster: x.poster ? ' [<a href="' + x.poster + '"><u>poster</u></a>]' : "",
      pdf: x.pdf ? ' [<a href="' + x.pdf + '"><u>pdf</u></a>]' : "",
      slides: x.slides ? ' [<a href="' + x.slides + '"><u>slides</u></a>]' : "",
      code: x.code ? ' [<a href="' + x.code + '"><u>code</u></a>]' : "",
      video: x.video ? ' [<a href="' + x.video + '"><u>video</u></a>]' : "",
      demo: x.demo ? ' [<a href="' + x.demo + '"><u>demo</u></a>]' : "",
      abstract: x.abstract,
      with: x.with,
      areas: x.areas.split("-"),
    }))
    .sort((a, b) => b.nid - a.nid);
  pubdata.set(loadedData);

  const startIndex = loadedData.length;

  const loadedManuscripts = data.Sheet1.filter((x) => x.display)
    .filter((x) => x.year == null)
    .map((x, index) => ({
      type: x.type,
      year: x.year ? " (" + x.year + ")" : "",
      id: x.id,
      nid: index + 1,
      citelink: x.citelink,
      cite:
        x.cite && x.citelink
          ? ', Cited by <a href="' + x.citelink + '"><u>' + x.cite + "</u></a>"
          : "",
      title: x.title,
      authors: x.authors.replace(
        /Baihan Lin/gi,
        '<span class="font-semibold">Baihan Lin</span>'
      ),
      venue: x.venue,
      arxiv: x.arxiv ? ' [<a href="' + x.arxiv + '"><u>arxiv</u></a>]' : "",
      image: `pubs/${x.image}`,
      bibtex: x.bibtex
        ? ' [<a href="bibs/' + x.bibtex + '"><u>bib</u></a>]'
        : "",
      linkname: x.linkname,
      link:
        x.link && x.linkname
          ? ' [<a href="' + x.link + '"><u>' + x.linkname + "</u></a>]"
          : "",
      poster: x.poster ? ' [<a href="' + x.poster + '"><u>poster</u></a>]' : "",
      pdf: x.pdf ? ' [<a href="' + x.pdf + '"><u>pdf</u></a>]' : "",
      slides: x.slides ? ' [<a href="' + x.slides + '"><u>slides</u></a>]' : "",
      code: x.code ? ' [<a href="' + x.code + '"><u>code</u></a>]' : "",
      video: x.video ? ' [<a href="' + x.video + '"><u>video</u></a>]' : "",
      demo: x.demo ? ' [<a href="' + x.demo + '"><u>demo</u></a>]' : "",
      abstract: x.abstract,
      with: x.with,
      areas: x.areas.split("-"),
    }))
    .sort((a, b) => b.nid - a.nid);
  manuscripts.set(loadedManuscripts);

  loaded = true;
};

export const getNeurodataById = async (id) => {
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
