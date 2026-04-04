import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.0lurNU8n.js","app":"_app/immutable/entry/app.Cxp7h7X2.js","imports":["_app/immutable/entry/start.0lurNU8n.js","_app/immutable/chunks/entry.BH9vrFX-.js","_app/immutable/chunks/runtime.CvupKfnI.js","_app/immutable/entry/app.Cxp7h7X2.js","_app/immutable/chunks/legacy-client.DyY-ywpz.js","_app/immutable/chunks/runtime.CvupKfnI.js","_app/immutable/chunks/disclose-version.BCGOpEel.js","_app/immutable/chunks/props.3Y_wabxI.js","_app/immutable/chunks/index-client.BxXL_cim.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
