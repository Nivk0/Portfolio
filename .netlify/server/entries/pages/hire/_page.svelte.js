import { e as ensure_array_like, h as escape_html } from "../../../chunks/index.js";
import "../../../chunks/functions.js";
import { S as Svelte_seo } from "../../../chunks/index2.js";
function Experience($$payload) {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Paycom",
      type: "On Site",
      startDate: "May 2025",
      endDate: "August 2025",
      location: "Irving, Texas",
      skills: ["ReactJS", "C#", "Docker", "Git"]
    },
    {
      title: "Software Engineer Intern",
      company: "Constellation Software Inc - Perseus Group",
      type: "Hybrid",
      startDate: "Sept 2023",
      endDate: "May 2025",
      location: "Plano, Texas",
      skills: [
        "AngularJS",
        "TypeScript",
        ".Net",
        "Microsoft Azure",
        "C#",
        "SQL"
      ]
    },
    {
      title: "Software Developer and Project Manager",
      company: "Kellerman Foundation",
      type: "On Site",
      startDate: "Aug 2023",
      endDate: "Jan 2024",
      location: "Richardson, Texas",
      skills: [
        "MySQL",
        "JavaScript",
        "Node.js",
        "Apache",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Software Developer Internship",
      company: "Black Knight Financial Services",
      type: "Hybrid",
      startDate: "Aug 2022",
      endDate: "May 2023",
      location: "Jacksonville, Florida",
      skills: [
        "AngularJS",
        "TypeScript",
        ".Net",
        "Microsoft Azure",
        "C#",
        "SQL"
      ]
    }
  ];
  const each_array = ensure_array_like(experiences);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let experience = each_array[$$index];
    $$payload.out += `<div class="flex flex-col md:flex-row items-start md:items-center border rounded-xl p-6 border-base-300/60 bg-base-200 backdrop-blur-md mb-6 shadow-lg"><div class="flex-1"><h3 class="text-lg font-bold mb-1">${escape_html(experience.title)}</h3> <p class="text-sm text-base-content/70 mb-2">${escape_html(experience.startDate)} - ${escape_html(experience.endDate ? experience.endDate : "Present")}</p> <p class="text-sm text-base-content/70 mb-2">${escape_html(experience.location)}</p> `;
    if (experience.description) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-sm text-base-content/80 mb-2">${escape_html(experience.description)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <p class="text-sm text-base-content/80"><strong>Skills:</strong> ${escape_html(experience.skills.join(", "))}</p></div></div>`;
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload) {
  Svelte_seo($$payload, { title: "Easy Portfolio Template" });
  $$payload.out += `<!----> <p class="mb-4 text-lg">Experience</p> `;
  Experience($$payload);
  $$payload.out += `<!----> <a href="/#contact" class="btn btn-primary">Contact me</a> <a href="/resume.pdf" class="btn btn-primary" target="_blank">Resume</a>`;
}
export {
  _page as default
};
