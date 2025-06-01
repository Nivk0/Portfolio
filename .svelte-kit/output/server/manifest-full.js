export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["GeistVariableVF.ttf","GeistVariableVF.woff2","pic.jpg","resume.pdf"]),
	mimeTypes: {".ttf":"font/ttf",".woff2":"font/woff2",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.fHcSbD35.js","app":"_app/immutable/entry/app.D7EkyF4U.js","imports":["_app/immutable/entry/start.fHcSbD35.js","_app/immutable/chunks/entry.Dud9rUSR.js","_app/immutable/chunks/runtime.RkrL5Po-.js","_app/immutable/entry/app.D7EkyF4U.js","_app/immutable/chunks/legacy-client.oQBHHk_2.js","_app/immutable/chunks/runtime.RkrL5Po-.js","_app/immutable/chunks/disclose-version.CZspuKIh.js","_app/immutable/chunks/props.CV9K5CnQ.js","_app/immutable/chunks/index-client.CXElsWsT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/hire",
				pattern: /^\/hire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
