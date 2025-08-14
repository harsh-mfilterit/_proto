export const FILTERS = {
  customer: {
    type: "slicer",
    visualName: "aec63737fbbac8ff5ca6",
    pageName: "4149b26825ae0ec0fd9f",
  },
};

// export const MENUS = [
//   {
//     name: "Market Share",
//     type: "lineChart",
//     visualName: "bec267507c135ddfedde",
//     pageName: "4149b26825ae0ec0fd9f",
//     types: {
//       lineChart: {
//         visualName: "bec267507c135ddfedde",
//         pageName: "4149b26825ae0ec0fd9f",
//       },
//       barChart: {
//         visualName: "c30926674d8261af2465",
//         pageName: "4149b26825ae0ec0fd9f",
//       },
//     },
//   },
//   {
//     name: "Top Lossers",
//     type: "tableEx",
//     visualName: "30ed6bd85e86779c51ac",
//     pageName: "4149b26825ae0ec0fd9f",
//   },
//   {
//     name: "Top Gainers",
//     type: "tableEx",
//     visualName: "33e22096c561bd212fc1",
//     pageName: "4149b26825ae0ec0fd9f",
//   },

//   {
//     name: "Top Cities",
//     type: "tableEx",
//     visualName: "899c428bef87608ce2d2",
//     pageName: "4149b26825ae0ec0fd9f",
//   },
//   {
//     name: "Bottom Cities",
//     type: "tableEx",
//     visualName: "fc27008652b394701472",
//     pageName: "4149b26825ae0ec0fd9f",
//   },
//   {
//     name: "Platfrom-wise Product Table",
//     type: "tableEx",

//     visualName: "47e2eb68350501f91a72",
//     pageName: "4149b26825ae0ec0fd9f",
//   },
// ];

// export const LAYOUTS = [
//   {
//     name: "Market Share",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//   },
//   {
//     name: "Top Lossers",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 6, y: 1, w: 5, h: 12, minW: 2, maxW: 12 },
//   },
//   {
//     name: "Top Gainers",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 0, y: 1, w: 5, h: 12, minW: 2, maxW: 12 },
//   },

//   {
//     name: "Top Cities",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 0, y: 2, w: 5, h: 12, minW: 2, maxW: 12 },
//   },
//   {
//     name: "Bottom Cities",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 6, y: 2, w: 5, h: 12, minW: 2, maxW: 12 },
//   },
//   {
//     name: "Platfrom-wise Product Table",
//     "layout-1": { x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12 },
//     "layout-2": { x: 0, y: 3, w: 12, h: 12, minW: 2, maxW: 12 },
//   },
// ];

export const MENUS = [
  {
    name: "Whats the brand wise availibity trend",
    type: "lineChart",
    visualName: "d805c0e668cdb2291e21",
    pageName: "ReportSection",
  },
  {
    name: "Unique Product Code Counts",
    type: "pivotTable",
    visualName: "41a77c5248610b205ac1",
    pageName: "ReportSection",
  },
  {
    name: "Sub category wise analysis",
    type: "pivotTable",
    visualName: "b71162db761256d07b64",
    pageName: "ReportSection",
  },
  {
    name: "Platform wise geography wise analysis",
    type: "columnChart",
    visualName: "eb801b703b7b490c2910",
    pageName: "ReportSection",
  },
  {
    name: "which geography should be targeted?",
    type: "map",
    visualName: "609802e43c2308957e5d",
    pageName: "ReportSection",
  },
  {
    name: "owned",
    type: "pivotTable",
    visualName: "0792d8d0323e09873d75",
        types: {
      owned: {
        visualName: "0792d8d0323e09873d75",
        pageName: "ReportSection",
      },
      competitor: {
        visualName: "8f57d73de0e2476b0d00",
        pageName: "ReportSection",
      },
    },
    pageName: "ReportSection",
  },
  // {
  //   name: "competitor",
  //   type: "pivotTable",
  //   visualName: "8f57d73de0e2476b0d00",
  //   pageName: "ReportSection",
  // },
  {
    name: "seller buy box win %(own)",
    visualName: "d81520ae0377212b00ea",
    type: "pivotTable",
    pageName: "ReportSection",
  },
  {
    name: "buy box win %",
    visualName: "edc5875310c44de10e8e",
    type: "lineChart",
    pageName: "ReportSection",
  },
  {
    name: "platform level availability",
    visualName: "a498822ce0e3cad5173b",
    type: "pivotTable",
    pageName: "ReportSection",
  },
  {
    name: "brand level availability",
    visualName: "48395668c043dab453de",
    type: "pivotTable",
    pageName: "ReportSection",
  },
  {
    name: "last 7-days summery",
    visualName: "99cc7825f78089941ba8",
    type: "pivotTable",
    pageName: "ReportSection",
  },
  {
    name: "best performance competitor",
    visualName: "8e5d02258f001eb43a4f",
    type: "pivotTable",
    pageName: "ReportSection",
  },
  {
    name: "list of product code that were out of stock last day",
    visualName: "55cc03d57f520f85d345",
    type: "tableEx",
    pageName: "ReportSection",
  },
  {
    name: "day wise monthly availability",
    visualName: "18aa64f0b471c2fa96b6",
    type: "shape",
    pageName: "ReportSection",
  },
];

export const LAYOUTS = [
  {
    name: "Whats the brand wise availibity trend",
    "layout-1": { x: 0, y: 1, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 1, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Unique Product Code Counts",
    "layout-1": { x: 0, y: 2, w: 5, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 2, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Sub category wise analysis",
    "layout-1": { x: 6, y: 2, w: 5, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 3, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "Platform wise geography wise analysis",
    "layout-1": { x: 0, y: 4, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 4, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "which geography should be targeted?",
    "layout-1": { x: 0, y: 5, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 5, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "owned",
    "layout-1": { x: 0, y: 6, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 6, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  // {
  //   name: "competitor",
  //   "layout-1": { x: 6, y: 6, w: 5, h: 12, minW: 2, maxW: 12 },
  //   "layout-2": { x: 6, y: 6, w: 5, h: 12, minW: 2, maxW: 12 },
  // },
  {
    name: "seller buy box win %(own)",
    "layout-1": { x: 0, y: 7, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 7, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "buy box win %",
    "layout-1": { x: 0, y: 8, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 8, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "platform level availability",
    "layout-1": { x: 0, y: 9, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 9, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "brand level availability",
    "layout-1": { x: 0, y: 10, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 10, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "last 7-days summery",
    "layout-1": { x: 0, y: 11, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 11, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "best performance competitor",
    "layout-1": { x: 0, y: 12, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 12, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "list of product code that were out of stock last day",
    "layout-1": { x: 0, y: 13, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 13, w: 12, h: 12, minW: 2, maxW: 12 },
  },
  {
    name: "day wise monthly availability",
    "layout-1": { x: 0, y: 14, w: 12, h: 12, minW: 2, maxW: 12 },
    "layout-2": { x: 0, y: 14, w: 12, h: 12, minW: 2, maxW: 12 },
  },
];

export const get_layout = (name, layout_name = "layout-2") => {
  return LAYOUTS.find((layout) => layout.name === name)?.[layout_name];
};
