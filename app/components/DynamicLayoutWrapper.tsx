import React from "react";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGrid = WidthProvider(ResponsiveGridLayout);

interface DynamicLayoutWrapperProps {
  children?: React.ReactNode;
  layout?: any;
  className?: string;
  style?: React.CSSProperties;
}

export default function DynamicLayoutWrapper({
  children,
  layout,
  className,
  style,
}: DynamicLayoutWrapperProps) {
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 12, h: 10, minW: 2, maxW: 12 },
      { i: "b", x: 0, y: 2, w: 12, h: 2, minW: 2, maxW: 12 },
      { i: "c", x: 0, y: 4, w: 12, h: 2, minW: 2, maxW: 12 },
    ],
  };

  return (
    <div className={className} style={style}>
      <div className="w-full">
        <ResponsiveGrid
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          isResizable={false}
        //   isDraggable={false}
          draggableCancel=".no-drag"
        >
            {React.Children.map(children, (child, idx) => (
              <div
                key={idx}
                data-grid={child.props.dataGrid}
                className="w-full h-full bg-gray-200 rounded-lg shadow border-2 border-gray-300 cursor-move pt-5 pb-2 px-2"
              >
                {/* <p className="p-0 m-0">::</p> */}
                <div className="bg-white rounded-lg w-full h-full no-drag cursor-pointer z-10 p-2">
                {child}
                </div>
              </div>
            ))}
          
        </ResponsiveGrid>
      </div>
    </div>
  );
}
