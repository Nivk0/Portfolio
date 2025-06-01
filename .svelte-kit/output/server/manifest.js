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
		client: {"start":"_app/immutable/entry/start.DAttKVxo.js","app":"_app/immutable/entry/app.BXbt2rmd.js","imports":["_app/immutable/entry/start.DAttKVxo.js","_app/immutable/chunks/entry.DmS6hO2E.js","_app/immutable/chunks/runtime.RkrL5Po-.js","_app/immutable/entry/app.BXbt2rmd.js","_app/immutable/chunks/legacy-client.oQBHHk_2.js","_app/immutable/chunks/runtime.RkrL5Po-.js","_app/immutable/chunks/disclose-version.CZspuKIh.js","_app/immutable/chunks/props.CV9K5CnQ.js","_app/immutable/chunks/index-client.CXElsWsT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
