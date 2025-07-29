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

const config = {
  embedUrl:
    "https://app.powerbi.com/reportEmbed?reportId=df510bae-3e6d-40de-844d-23b265dd3e26&groupId=c11cf21f-e3fb-4518-99d5-0246c102312d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  embedToken:
    "H4sIAAAAAAAEACWTR4rEVgAF7zJbGZRaan2DF8o5594ph1bOkvHdPcb7ggdVvL9_rOTuxiT_-fPnRZQQmWVEFo3uOXhvGAvfgn7WN9sWjBAe5LAtZGx7UBkU0mMxgzagikPHo3rBKnTRymfwUJWXVr1lWZA6cda8wUXtOiLckBYVjFqcmkaKW8eCour8vs-rsrG4fYq8RzP69xj1NmrUcjJ9pEbZmFsD_sFN6FT3RfU61OdcDx_-aKIqWOF54yF-kHegjJOuEBW2Ons4dIu30obZ2KcQdI0fz29z91GL24IJedQQQ-NZopsikKn48-Kns9djsp14g0S-U-eY5IYZjBoR1xKdWhsRXBbLNh8lYFyzqgDBuc4NN9Cm9AWtjvKbKOBf6VMNYp6074402WA0AbeiDTVAHjcpv8tHYhGFTaY1XJrvbda-CPAj7APuTUozsh1bNQU1dlO8etbnGlT6IAoeGbcFVZZKpfBcjtgm9XjJsy9n7ORVZqemQaI9o01zzDguixgMz1nayResHgF6NzjZjEqS0j5Wa7HJwOC1B9YyXFHccGwEkxiLKiQnsnmTDyf2bnX-el8YoelYKIngeOjcjE6I210GLdBAmVk99L-477xvhmGkpe_oqQuFVckT52xQbkHCb5rJnGwnO1tco5koAUpDyqpjEIQorvlcQPmt9MFvBquu2neNaXahrrkWqcuvDmMHMJ9WfftBWa_-rKCoGWTU8NKfQCjmodG8_pUIM5PBZ-RAFtq5AHBou9NfZk-NU3bdS0A-Qg-40s_dPU_wsIPizkoYnvDOQ2I7FcnPTTWS8qljP6C4qX4kU37UOrlA4A4K8iGGmNFg2Vobe66hU63Nj8CJzKovrL0YkygOBybQ2TtV4nH79CydRt_8DA-Euhvxilyg6DENiGg4Ej9JyEJNxNbk7K_9118_f_ywyz1to1rcvzfTDbWf0cg0NCUhFlqZSzeHX9frRndR7321HweibxYp5nhK6REYxmIUtBm3c1GCdtybDHy9rYug156l9mebx_AHuZZAqNv8w-_qYaJmc_ihe5WuXyz8KPqv0W_MLPsuo7NT8PtRZRFscBx41LXr6WtUlXmAEb3LPEYB17Wx6Kb-xqyJHIBwLXUhm3CVEUo6C0rdGE9mNXy91rsU8Uh8T_1-Ln0UnxqBkKWa5TMAq95g5DcGbDWk7DUxm5N8vyywR-gXf-mawt5WY1yFekzv94DCrsUW5cgGwBe_d50CXHAfxu1c9TkIDvx6drX0owqKcZW6pcwBrLXOUnlKe2SPi9f1Tv-v-Z7qYpGDX8tkGrTgrgrWeK0VlC9SOmb2_5TbVEOy7Uvxi81dTkW9VpgRGFg-5Mibo6tlFeIwqwaI2I_MMRXDLd4uXSv02dqbHefVRkxH52wn7jJrnro3Fg7tOhnIHMoF5VQePEDCzNIs3HoUkgqpcIkF1dszlYvyOHkKSFNhlf1SzIjdD85jkWZj4h-omvOvy_UNyMzYCLgmFTR9iOhReFNMMac40Mec9K9SYM9r8TN9RUX9NYweVMXILotKB1OB_i5WoQlS4zbO3a_AndxiZc0dA81aK2KN0bmhv2mxVM31Nh9OaQYON44JN2Laadcmno1P9tzFuPbs-mw0v1FaauWdITnyh3G21zGTnz5EYnmQvHGsmSluKYkE0RpKbIsLDAX-0_zPv8GTwhVaBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzUzMzUzMDI0LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
  reportId: "df510bae-3e6d-40de-844d-23b265dd3e26",
};
const frameworksList = MENUS.map((menu) => ({
  label: menu.name,
  value: menu.name,
}));
console.log(MENUS);

export default function LL() {
  const [selectedMenu, setSelectedMenu] = useState<string[]>(
    frameworksList.map((menu) => menu.value)
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedLayout, setSelectedLayout] = useState<string>("layout-1");
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

  return (
    <div>
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

      <DynamicLayoutWrapper layout={"props.layout"}>
        {MENUS.map((menu, index) =>
          selectedMenu.includes(menu.name) ? (
            <div
              key={menu.name}
              className="w-full h-full relative px-1"
              dataGrid={get_layout(menu.name, selectedLayout)}
            >
              <Item
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
      </DynamicLayoutWrapper>
    </div>
  );
}

function Item({
  menu,
  layout,
  onEventCallback,
  filters,
}: {
  menu: any;
  layout: any;
  onEventCallback: any;
  filters: any;
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
