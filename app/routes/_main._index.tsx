import React, { useState } from "react";
import DynamicLayoutWrapper from "@/components/DynamicLayoutWrapper";
import PowerBIWrapper from "@/components/powerBiWrapper";
import { MENUS, LAYOUTS, get_layout, FILTERS } from "@/util/Constants";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { models } from "powerbi-client";
import loadingGif from "../assets/loader.gif";
import { useGetEmbedUrl } from "@/api/getEmbeddUrl";


const frameworksList = MENUS.map((menu) => ({
  label: menu.name,
  value: menu.name,
}));


export default function Layout() {
  const [selectedMenu, setSelectedMenu] = useState<string[]>(
    frameworksList.map((menu) => menu.value)
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedLayout, setSelectedLayout] = useState<string>("layout-1");
  const { data, isLoading, error } = useGetEmbedUrl();

  
  const handlePowerBIEvent = (eventType: string, event: any) => {
    console.log(`Power BI Event: ${eventType}`, event);

    // Handle specific events
    switch (eventType) {
      case "loaded":
        console.log("Report loaded");

        break;
      case "rendered":
        console.log("Report rendered");

        break;
      case "filtersApplied":
        break;
      case "dataSelected": {
        console.log("Data selected:", event.detail.dataPoints);
      }

      default:
        break;
    }
  };

  const getFilter = (name: string, filter: string) => {
    return filter
      ? {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: 'Book1',
            column: name,
          },
// {table: 'Book1', column: 'customer'}
          operator: "In",
          values: [filter],
          filterType: models.FilterType.Basic,
        }
      : null;
  };


  function Loader() {
    return (
      <div className="absolute z-50  top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-lg">
        <img src={loadingGif} alt="Loading..." className="h-32 w-32" />
      </div>
    );
  }

  return (
    <div>
      {isLoading && <Loader />}
      <div className=" m-3 ">
        <div className="flex justify-between">
          <div className="w-3/6">
            <MultiSelect
              options={frameworksList}
              onValueChange={setSelectedMenu}
              defaultValue={selectedMenu}
              className="w-full"
              placeholder="Select Menus"
              variant="inverted"
              animation={2}
              maxCount={3}
            />
          </div>

          <Select
            onValueChange={setSelectedLayout}
            defaultValue={selectedLayout}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Layout" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(LAYOUTS[0]).map(
                (key) =>
                  key !== "name" && (
                    <SelectItem value={key}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-layout-panel-top-icon lucide-layout-panel-top"
                      >
                        <rect width="18" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                      </svg>
                      {key}
                    </SelectItem>
                  )
              )}
            </SelectContent>
          </Select>
        </div>
        <div className=" flex items-center gap-2 justify-end">
          {/* <p>customer</p> */}
          <Select
            onValueChange={setSelectedFilter}
            defaultValue={selectedFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="customer" />
            </SelectTrigger>
            <SelectContent>
              {[
                "All",
                "Flour-Blinkit",
                "ITC-Atta",
                "ITC-Noodles-Pasta",
                "Zepto-Cold",
              ].map((key) => (
                <SelectItem value={key}>{key}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* <PowerBIWrapper
        
          embedUrl={config.embedUrl}
          accessToken={config.embedToken}
          reportId={config.reportId}
          filters={[getFilter("customer", selectedFilter)]}
          onEventCallback={handlePowerBIEvent}
        /> */}

      {data && <DynamicLayoutWrapper layout={"props.layout"}>
        {MENUS.map((menu, index) =>
          selectedMenu.includes(menu.name) ? (
            <div
              key={menu.name}
              className="w-full h-full relative px-1"
              dataGrid={get_layout(menu.name, selectedLayout)}
            >
              <Item
                config={data}
                menu={menu}
                filters={selectedFilter==="All"?[]:[getFilter("customer", selectedFilter)]}
                layout={selectedLayout}
                onEventCallback={handlePowerBIEvent}
              />
            </div>
          ) : //   <div
          //   key={menu.name}
          //   className="w-full h-full"
          //   dataGrid={get_layout(menu.name, selectedLayout)}
          // >
          //   <div className="flex mx-2 justify-end">djkfhdkjh</div>
          //   <PowerBIWrapper
          //     key={`${menu.name}-${selectedLayout}`}
          //     visualName={menu.visualName}
          //     pageName={menu.pageName}
          //     embedUrl={config.embedUrl}
          //     accessToken={config.embedToken}
          //     reportId={config.reportId}
          //     onEventCallback={handlePowerBIEvent}
          //   />
          // </div>
          null
        )}
      </DynamicLayoutWrapper>}
    </div>
  );
}

function Item({
  menu,
  layout,
  onEventCallback,
  filters,
  config,
}: {
  menu: any;
  layout: any;
  onEventCallback: any;
  filters: any;
  config: any;
}) {
  const [selectedType, setSelectedType] = useState<string>(
    menu.types ? Object.keys(menu?.types)[0] : null
  );
  return (
    <>
      <div className="flex mx-2 justify-between mb-3">
        <h2 className="text-gray-400 text-lg font-semibold mb-3">
          {menu.name}
        </h2>
        {selectedType && (
          <Select onValueChange={setSelectedType} defaultValue={selectedType}>
            <SelectTrigger className="w-[180px] capitalize">
              <SelectValue placeholder="Layout" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(menu?.types).map((type) => (
                <SelectItem value={type} className="capitalize">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <PowerBIWrapper
        key={`${menu.name}-${layout}`}
        visualName={
          selectedType ? menu.types[selectedType].visualName : menu.visualName
        }
        filters={filters}
        pageName={menu.pageName}
        embedUrl={config.embedUrl}
        accessToken={config.embedToken}
        reportId={config.reportId}
        onEventCallback={onEventCallback}
      />
    </>
  );
}
