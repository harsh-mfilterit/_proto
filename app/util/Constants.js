export const FILTERS = {
  customer: {
    type: "slicer",
    visualName: "aec63737fbbac8ff5ca6",
    pageName: "4149b26825ae0ec0fd9f",
  },
};

export const MENUS = [
  {
    name: "Market Share",
    type: "lineChart",
    visualName: "bec267507c135ddfedde",
    pageName: "4149b26825ae0ec0fd9f",
    types: {
      lineChart: {
        visualName: "bec267507c135ddfedde",
        pageName: "4149b26825ae0ec0fd9f",
      },
      barChart: {
        visualName: "c30926674d8261af2465",
        pageName: "4149b26825ae0ec0fd9f",
      },
    },
  },
  {
    name: "Top Lossers",
    type: "tableEx",
    visualName: "30ed6bd85e86779c51ac",
    pageName: "4149b26825ae0ec0fd9f",
  },
  {
    name: "Top Gainers",
    type: "tableEx",
    visualName: "33e22096c561bd212fc1",
    pageName: "4149b26825ae0ec0fd9f",
  },

  {
    name: "Top Cities",
    type: "tableEx",
    visualName: "899c428bef87608ce2d2",
    pageName: "4149b26825ae0ec0fd9f",
  },
  {
    name: "Bottom Cities",
    type: "tableEx",
    visualName: "fc27008652b394701472",
    pageName: "4149b26825ae0ec0fd9f",
  },
  {
    name: "Platfrom-wise Product Table",
    type: "tableEx",

    visualName: "47e2eb68350501f91a72",
    pageName: "4149b26825ae0ec0fd9f",
  },
];

export const LAYOUTS = [
  {
    name: "Market Share",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Top Lossers",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 6, y: 1, w: 6, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Top Gainers",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 1, w: 6, h: 12, minW: 2, maxW: 12 },
  },

  {
    name: "Top Cities",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 2, w: 6, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Bottom Cities",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 6, y: 2, w: 6, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Platfrom-wise Product Table",
    "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 3, w: 12, h: 12, minW: 2, maxW: 12 },
  },
];

export const get_layout = (name, layout_name = "layout-2") => {
  return LAYOUTS.find((layout) => layout.name === name)?.[layout_name];
};
