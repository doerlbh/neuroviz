export const manifest = {
	appDir: "_app",
	assets: new Set(["data/pubs.json","data/test.json","email.svg","map-marker.svg"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-338132a8.js","js":["start-338132a8.js","chunks/vendor-66f215a3.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "visualization",
				pattern: /^\/visualization\/?$/,
				names: [],
				types: [],
				path: "/visualization",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "neuroscience",
				pattern: /^\/neuroscience\/?$/,
				names: [],
				types: [],
				path: "/neuroscience",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "references",
				pattern: /^\/references\/?$/,
				names: [],
				types: [],
				path: "/references",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "neurodata/[id]",
				pattern: /^\/neurodata\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Forecast",
				pattern: /^\/Forecast\/?$/,
				names: [],
				types: [],
				path: "/Forecast",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "viz2",
				pattern: /^\/viz2\/?$/,
				names: [],
				types: [],
				path: "/viz2",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "viz3",
				pattern: /^\/viz3\/?$/,
				names: [],
				types: [],
				path: "/viz3",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "App",
				pattern: /^\/App\/?$/,
				names: [],
				types: [],
				path: "/App",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/neurodata",
				pattern: /^\/api\/neurodata\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/neurodata/index.js')
			},
			{
				type: 'endpoint',
				id: "api/neurodata/[id]",
				pattern: /^\/api\/neurodata\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				load: () => import('./entries/endpoints/api/neurodata/_id_.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
