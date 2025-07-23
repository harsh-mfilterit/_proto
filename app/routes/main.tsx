import React from "react";
import { Responsive as ResponsiveGridLayout, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGrid = WidthProvider(ResponsiveGridLayout);

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 12, h: 2 },
      { i: "b", x: 0, y: 2, w: 12, h: 2 },
      { i: "c", x: 0, y: 4, w: 12, h: 2 }
    ]
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">React Grid Layout Demo</h1>
      <div className="w-full">
        <ResponsiveGrid
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          isResizable
          isDraggable
        >
          <div key="a" className="bg-blue-200 p-2 rounded w-full">a</div>
          <div key="b" className="bg-green-200 p-2 rounded w-full">b</div>
          <div key="c" className="bg-yellow-200 p-2 rounded w-full">c</div>
        </ResponsiveGrid>
      </div>
    </div>
  );
}
