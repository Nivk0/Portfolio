let load = ({ url }) => {
  return { url: url.pathname };
};
const prerender = true;
export {
  load,
  prerender
};
