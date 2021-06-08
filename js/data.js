const projectTypes = {
  workshop: "workshop",
  adu: "accessory dwelling unit",
  mfh: "multi-family home",
  ml: "campus apartment",
};

const revitProjects = [
  {
    type: projectTypes.workshop,
    title: "Revit Workshop",
    path: "projects/workshops/Architecture_at_UCSD_Revit_Workshop_2021",
    description: "",
  },
  {
    type: projectTypes.ml,
    title: "Marshall Lowers Redesign",
    link: 'https://sites.google.com/ucsd.edu/archatucsd-2021-building/home',
    path: "projects/workshops/ML-Redesign-Poster",
    description: "",
  },
];

const autocadProjects = [
  {
    type: projectTypes.workshop,
    title: "AutoCAD Workshop",
    path: "projects/workshops/Architecture_at_UCSD_AutoCAD_Workshop_2021",
    description: "",
  },
  {
    type: projectTypes.adu,
    title: "ADU Plan - Original",
    path: "projects/cad/adu/ADU_plan-original",
    description: "",
  },
  {
    type: projectTypes.adu,
    title: "ADU Plan - Proposed",
    path: "projects/cad/adu/ADU_plan-proposed",
    description: "",
  },
  {
    type: projectTypes.adu,
    title: "ADU Plan - Kitchen V1",
    path: "projects/cad/adu/ADU_plan-kitchen_v1",
    description: "",
  },
  {
    type: projectTypes.adu,
    title: "ADU Plan - Kitchen V2",
    path: "projects/cad/adu/ADU_plan-kitchen_v2",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - Original Ground Floor",
    path: "projects/cad/multifamily/Multi_Family-Original_Ground_Floor",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - Garage to Res Units",
    path:
      "projects/cad/multifamily/Multi_Family-Ground_Floor-Garage_to_Res_Units",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - 1st Floor",
    path: "projects/cad/multifamily/Multi_Family-1st_Floor",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - 2nd Floor",
    path: "projects/cad/multifamily/Multi_Family-2nd_Floor",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - West North Elevation Plans",
    path: "projects/cad/multifamily/Multi_Family-West_North_Elevation_Plans",
    description: "",
  },
  {
    type: projectTypes.mfh,
    title: "Multi-Family - East South Elevation Plans",
    path: "projects/cad/multifamily/Multi_Family-East_South_Elevation_Plans",
    description: "",
  },
];

export { revitProjects, autocadProjects, projectTypes };
