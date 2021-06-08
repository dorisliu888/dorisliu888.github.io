import { autocadProjects, revitProjects, projectTypes } from "./data.js";

const getProjectItem = (project) => `
    <div class="col-lg-4 col-md-6 grid-item">
        <div class="listing-item">
            <div class="position-relative">
            <ul class="list-inline listing-tags m-0">
                <li class="list-inline-item"><a class="reset-anchor font-weight-normal text-gray text-small"
                    href="${project.link || project.path + '.pdf'}">${project.type}</a></li>
            </ul><a class="reset-anchor d-block listing-img-holder" href="${project.link || project.path + '.pdf'}"><img
                class="img-fluid" src="${project.path}.PNG" alt="${project.title}" height="400">
                <p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Take a closer
                    look</span>
                <svg class="svg-icon text-primary svg-icon-sm ml-2">
                    <use xlink:href="#arrow-right-1"> </use>
                </svg>
                </p>
            </a>
            </div>
            <div class="py-3"><a class="reset-anchor" href="${project.link || project.path + '.pdf'}">
                <h2 class="h5 listing-item-heading">${project.title}</h2>
            </a>
            <p class="text-small mb-0 listing-item-description">${project.description}</p>
            </div>
        </div>
    </div>
`;

const autocadSection1 = document.getElementById("autocad-section-1");
const autocadSection2 = document.getElementById("autocad-section-2");
const autocadSection3 = document.getElementById("autocad-section-3");
const revitSection1 = document.getElementById("revit-section-1");

revitProjects.forEach((project) => {
  const projectItem = getProjectItem(project);
  switch (project.type) {
    case projectTypes.workshop:
      revitSection1.innerHTML += projectItem;
      break;
    default:
      break;
  }
});

autocadProjects.forEach((project) => {
  const projectItem = getProjectItem(project);
  switch (project.type) {
    case projectTypes.workshop:
      autocadSection1.innerHTML += projectItem;
      break;
    case projectTypes.adu:
      autocadSection2.innerHTML += projectItem;
      break;
    case projectTypes.mfh:
      autocadSection3.innerHTML += projectItem;
      break;
    default:
      break;
  }
});
