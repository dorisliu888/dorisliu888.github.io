import { autocadProjects, revitProjects } from "./data.js";

const autocadSection = document.getElementById("autocad-section");
autocadProjects.forEach((project) => {
  autocadSection.innerHTML += `
    <div class="col-lg-4 col-md-6 grid-item mb-4">
        <div class="listing-item">
            <div class="position-relative">
            <ul class="list-inline listing-tags m-0">
                <li class="list-inline-item"><a class="reset-anchor font-weight-normal text-gray text-small"
                    href="${project.path}.pdf">${project.type}</a></li>
            </ul><a class="reset-anchor d-block listing-img-holder" href="${project.path}.pdf"><img
                class="img-fluid" src="${project.path}.PNG" alt="${project.title}" height="400">
                <p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Take a closer
                    look</span>
                <svg class="svg-icon text-primary svg-icon-sm ml-2">
                    <use xlink:href="#arrow-right-1"> </use>
                </svg>
                </p>
            </a>
            </div>
            <div class="py-3"><a class="reset-anchor" href="${project.path}.pdf">
                <h2 class="h5 listing-item-heading">${project.title}</h2>
            </a>
            <p class="text-small mb-0 listing-item-description">${project.description}</p>
            </div>
        </div>
    </div>
  `;
});

const revitSection = document.getElementById("revit-section");
revitProjects.forEach((project) => {
  revitSection.innerHTML += `
    <div class="col-lg-4 col-md-6 grid-item mb-4">
        <div class="listing-item">
            <div class="position-relative">
            <ul class="list-inline listing-tags m-0">
                <li class="list-inline-item"><a class="reset-anchor font-weight-normal text-gray text-small"
                    href="${project.path}.pdf">${project.type}</a></li>
            </ul><a class="reset-anchor d-block listing-img-holder" href="${project.path}.pdf"><img
                class="img-fluid" src="${project.path}.PNG" alt="${project.title}" height="400">
                <p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Take a closer
                    look</span>
                <svg class="svg-icon text-primary svg-icon-sm ml-2">
                    <use xlink:href="#arrow-right-1"> </use>
                </svg>
                </p>
            </a>
            </div>
            <div class="py-3"><a class="reset-anchor" href="${project.path}.pdf">
                <h2 class="h5 listing-item-heading">${project.title}</h2>
            </a>
            <p class="text-small mb-0 listing-item-description">${project.description}</p>
            </div>
        </div>
    </div>
  `;
});
