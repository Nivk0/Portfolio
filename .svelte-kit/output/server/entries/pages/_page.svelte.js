import { p as push, e as ensure_array_like, f as attr, g as stringify, a as pop, h as escape_html } from "../../chunks/index.js";
import { o as onDestroy } from "../../chunks/index-server.js";
import "clsx";
import { h as html, S as Svelte_seo } from "../../chunks/index2.js";
function TypingComponent($$payload, $$props) {
  push();
  let { text = "" } = $$props;
  [...text];
  let textIndex = 0;
  let textInterval;
  onDestroy(() => {
    clearInterval(textInterval);
  });
  const each_array = ensure_array_like(text);
  $$payload.out += `<!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let letter = each_array[i];
    $$payload.out += `<span${attr("class", `${stringify(textIndex > i ? "in" : "opacity-0")} svelte-6owzw7`)}>${html(letter === " " ? "&nbsp;" : letter)}</span>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Work($$payload) {
  const MAJOR = [
    {
      name: "Quizer-NLP AI",
      description: "AI-Powered and Rag-based Personalized Study Quiz Generator",
      link: "https://github.com/spevenexe/S25-NLP-project"
    },
    {
      name: "Climate Prediction AI",
      description: "Interactive Climate Forecasts to Visualize and Understand Weather Trends",
      link: "https://github.com/Angel-CSC/climateProject/tree/main"
    },
    {
      name: "Image-Transfer",
      description: "CycleGan and Semi-Supervised learning based image translation model ",
      link: "https://github.com/ACM-Research/Image-Transfer"
    },
    {
      name: "MoodAway",
      description: "Full Stack Mobile Journaling platform with personalized article recommendations",
      link: "https://github.com/acm-projects/MoodAway"
    },
    {
      name: "ReviewZ",
      description: "Full Stack Sentimental Amazon review analyzer based on geographic locations",
      link: "https://github.com/Nivk0/ReviewZ"
    },
    {
      name: "AirAssist",
      description: "Full Stack application to aid with navigating the airport",
      link: "https://github.com/Nivk0/AirAssist"
    }
  ];
  const each_array = ensure_array_like(MAJOR);
  $$payload.out += `<div id="projects" class="grid mt-4 gap-4 sm:grid-cols-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<div class="col-span-1 overflow-hidden transition-all card bg-base-100 shadow-xl border border-base-300">`;
    if (project.img) {
      $$payload.out += "<!--[-->";
      Img($$payload, { src: project.img, alt: project.name });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="card-body px-4"><h1 class="card-title">${escape_html(project.name)}</h1> <p class="opacity-60">${escape_html(project.description)}</p></div> <div class="card-actions px-4 mb-6">`;
    if (project.link) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", project.link)} class="btn w-full btn-primary mr-auto" target="_blank">Visit</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  let refreshInterval;
  onDestroy(() => {
    clearInterval(refreshInterval);
  });
  Svelte_seo($$payload, { title: "Nivedh Koya" });
  $$payload.out += `<!----> <div class="md:flex mt-2 md:mt-20 relative z-10"><div class="flex-1 flex flex-col justify-center md:items-start items-center"><h2 class="text-3xl opacity-60 font-light">Hi, I'm</h2> <h1 class="text-6xl my-4 font-medium text-white md:ml-0 ml-4 md:max-w-none max-w-[260px] md:text-left text-center">`;
  TypingComponent($$payload, { text: "Nivedh Koya," });
  $$payload.out += `<!----></h1> <h2 class="text-2xl opacity-40">Software Developer | AI Researcher</h2> <p><a href="/resume.pdf" target="_blank" class="btn btn-primary mt-4">Resume</a> <a href="https://github.com/Nivk0" target="_blank" class="btn btn-primary mt-4">Github</a> <a href="https://www.linkedin.com/in/nivedh-koya/" target="_blank" class="btn btn-primary mt-4">LinkedIn</a></p></div> <div class="col-span-1 mt-10 md:mt-auto flex justify-center md:justify-end"><img src="/pic.jpg" alt="Profile" style="animation-duration: 20s;" class="rounded-full w-50 h-60"></div></div> <h2 class="mt-32 mb-8 text-2xl font-semibold">About me</h2> <div class="grid gap-4 md:grid-cols-3 grid-cols-1 mb-4"><div class="col-span-1 flex flex-col gap-4"><div class="bg-base-200 flex-1 rounded-xl p-6 relative transition-all group-hover:translate-y-2 group-hover:scale-95"><span class="text-base-content/40 text-2xl mb-4 block font-medium">Spotify</span> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-lg font-bold">Not listening to anything right now</p>`;
  }
  $$payload.out += `<!--]--></div> <div class="bg-base-200 rounded-xl p-6 flex-1"><h2 class="text-base-content/40 text-2xl mb-2 font-medium">From</h2> <p class="text-3xl font-bold">Dallas, Texas</p></div></div> <div class="md:col-span-2 col-span-1 leading-8 bg-base-300 px-5 py-4 rounded-xl text-sm relative z-10"><p>I am a fast-track Computer Science student at the University of Texas at Dallas, pursuing both my Bachelor's and Master's degrees, with an expected graduation date of May 2026. With over three years of full-stack development experience, I’ve built a strong foundation in both front-end and back-end technologies, contributing to several end-to-end software solutions.

			My academic and research interests are rooted in the intersection of Artificial Intelligence and healthcare—particularly in using AI to support early detection of diseases like Parkinson’s, which lack straightforward diagnostic tests. I am also passionate about AI-driven image translation and climate prediction systems, where machine learning models are applied to tackle real-world challenges through advanced data analysis and predictive modeling.

			I'm always eager to explore how intelligent systems can create meaningful impact across disciplines.</p></div></div> <h2 class="mt-16 mb-8 text-2xl font-semibold">Projects</h2> `;
  Work($$payload);
  $$payload.out += `<!----> <h2 class="mt-16 mb-8 text-2xl font-semibold">Contact me</h2> <div class="bg-base-200 p-4 rounded-lg leading-8" id="contact"><p>Contact me at <a href="mailto:zemeriky@gmail.com" class="link-hover">nivedh.koya@gmail.com</a> or you can reach out me on the social media at the top.</p></div>`;
  pop();
}
export {
  _page as default
};
