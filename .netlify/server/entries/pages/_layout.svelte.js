import { b as sanitize_props, p as push, c as spread_attributes, a as pop, d as store_get, e as ensure_array_like, f as attr, u as unsubscribe_stores, g as stringify, h as escape_html, i as head } from "../../chunks/index.js";
import { h as html, S as Svelte_seo } from "../../chunks/index2.js";
import { r as run } from "../../chunks/legacy-server.js";
import { n as navigating, p as page } from "../../chunks/stores.js";
import { o as onDestroy } from "../../chunks/index-server.js";
import { c as checkIconState, g as generateIcon } from "../../chunks/functions.js";
import clsx from "clsx";
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const state = {
    // Last icon name
    name: "",
    // Loading status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$sanitized_props.onLoad === "function") {
      $$sanitized_props.onLoad(icon);
    }
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    const iconData = checkIconState($$sanitized_props.icon, state, mounted, loaded, onLoad);
    data = iconData ? generateIcon(iconData.data, $$sanitized_props) : null;
    if (data && iconData.classes) {
      data.attributes["class"] = (typeof $$sanitized_props["class"] === "string" ? $$sanitized_props["class"] + " " : "") + iconData.classes.join(" ");
    }
  }
  if (data) {
    $$payload.out += "<!--[-->";
    if (data.svg) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg${spread_attributes({ ...data.attributes }, void 0, void 0, 3)}>${html(data.body)}</svg>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span${spread_attributes({ ...data.attributes })}></span>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  var $$store_subs;
  const socialArr = [
    {
      name: "GitHub",
      icon: "uiw:github",
      link: "https://github.com/Nivk0"
    },
    { name: "X", icon: "akar-icons:twitter-fill" },
    {
      name: "DEV",
      icon: "material-symbols:logo-dev"
    },
    {
      name: "LinkedIn",
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/nivedh-koya/"
    },
    {
      name: "Instagram",
      icon: "akar-icons:instagram-fill",
      link: "https://www.instagram.com/nivedh_k1/#"
    },
    {
      name: "Discord",
      icon: "akar-icons:discord-fill"
    }
  ];
  run(() => {
    if (store_get($$store_subs ??= {}, "$navigating", navigating)) ;
  });
  const each_array = ensure_array_like(socialArr);
  $$payload.out += `<div class="mt-10 font-medium flex md:flex-row flex-col items-center justify-center"><div class="my-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a${attr("href", social.link)} target="_blank" class="btn btn-xs mx-1 bg-transparent border-none btn-circle text-white transition-all -outline-offset-4 hover:outline-offset-1"${attr("title", social.name)}>`;
    Icon($$payload, { icon: social.icon, class: "inline text-lg" });
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Head($$payload, $$props) {
  push();
  var $$store_subs;
  let currentAppBarOffsetTop = 0;
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Experiences", link: "/hire" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact Me", link: "/#contact" }
  ];
  let activePagePath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(menuItems);
  $$payload.out += `<div class="fixed flex items-center justify-center z-50 w-full top-4 left-0"${attr("style", `transform: translateY(${stringify(currentAppBarOffsetTop)}px); `)}><div class="bg-white/5 md:flex hidden backdrop-blur-md rounded-full p-2 shadow-floating-xl"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("class", clsx("px-4 transition-all py-2 transition- rounded-full", activePagePath === item.link ? "bg-white/5" : "hover:bg-white/5"))}${attr("href", item.link)}${attr("target", item.link.startsWith("http") ? "_blank" : void 0)}>${escape_html(item.name)}</a>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="icon" href="https://github.com/Zemerik/Portfolio-Template/blob/main/public/logo.png?raw=true" type="image/x-icon">`;
  });
  Svelte_seo($$payload, {
    openGraph: {
      type: "website",
      title: "Hemang Yadav (Zemerik)",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/133865660?v=4",
          width: 800,
          height: 600,
          alt: "Profile Picture"
        }
      ]
    }
  });
  $$payload.out += `<!----> <main>`;
  Head($$payload);
  $$payload.out += `<!----> `;
  if (data.url === "/photos") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="origin-top mx-auto md:px-8 pt-32 px-4 overflow-x-hidden">`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="max-w-3xl origin-top mx-auto md:px-8 pt-32 px-4 overflow-x-hidden"><!---->`;
    {
      $$payload.out += `<div class="overflow-hidden relative z-10">`;
      children($$payload);
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!----> `;
    Footer($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _layout as default
};
