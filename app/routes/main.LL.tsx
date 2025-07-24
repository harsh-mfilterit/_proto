import React, { useState } from "react";
import DynamicLayoutWrapper from "@/components/DynamicLayoutWrapper";
import PowerBIWrapper from "@/components/powerBiWrapper";
import { MENUS, LAYOUTS, get_layout } from "@/util/Constants";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const config = {
  embedUrl:
    "https://app.powerbi.com/reportEmbed?reportId=df510bae-3e6d-40de-844d-23b265dd3e26&groupId=c11cf21f-e3fb-4518-99d5-0246c102312d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  embedToken:
    "H4sIAAAAAAAEAC2Tta7sWAIA_-WmXslMK73AdpvazJCZ28xwejT_vnc1k1dUqvrrx87AMGflz39_ZirW1o4GMCT5b5SmI1sldWjIfIo8Rt4eUwHzMJh7Z62NP2c5QTDiH-V-RvxnN5PyI-jBlWB5D8jIdIHXw69mUUdYOHMpWPVNPvjsITPhrr1YaswgmMEIY99d_kZX7jr9ImZdQOFHZkN9S_aWL2D6INQG0EWZRx62cBlqzwiuXdp3RiaG-l3ILCUm2GfPdGe9gH1EHB7Z8wmfAZ-T5yNCahGQLot-xNcGiIk-kTxJYM6Qx5iZfZgjCnIYmuALUjG4e8SY-z2WuZBHJJPSojRGo31nYsLfaGm6u-8c7tqZseHuWQhpwyvSL6_mpbBT6PvRBw7GN_oSRjgZWDBjcOVFkd09bfFQCsnI1NdMBGxSq3Jq96A7g8IrjwmZxUnMAIFVC6IgeghKzgTkDHuTz5Li1tTWNZHsNJprX8dhSuu-9LR1V8X5McwmV96Qhn3VVpWCl_K1Zq6dwVsiTpRSN60TSpmQxUepV3l2UzLa-8rLoxVFXt1d3lXB5hUu-Ll_iwCqjaoxxnd58HmuG85GwFYb7EfCXdin1L2EOPKBmVroWtJvMnArhQxj3maGGimWn0IS-eyc68XBPZ-G-HyasdKaj4IGeiUnhzEVdpgGqEG_EkahFELaTQep9bi0j1DPD46E-SgzZXP-2BIgkUhdb8hek0UUY9fabZHHZd2ggWzslTDVOXAbAoat2G1ug0zpMxcDXfx8Xlh1KdlN7LD1rhnYnsQmTL8DVghfvFu91G1jfcfS_SQYjNYOunhceSmINDm1jT0EnOgGMrHLbigFPNxc60SkgW3ilk9NTQOlVbeBq7tlcTIdYjnsVM65mwEuE-NXp6GCFdw0Dx43icOF3oXLTefzvv_8-fnPj7CB5Zi1CvxuFoOd07HKxaB3v0gcUvqfsjgMUGg2vWxjKEzYgQXvd8ezvBo5Ov0KDmqc4cJJ6jqh6F2bHTPpr66LZXNa31qwaS7rVai-giSjkbLnTqjtiFnBygWiGDw67nU00WxWycrd2cQXKE4NhRfheiBzOs-quAESZat05naaqWtFhe9plEaHbc_yjvdDQqPtdVXDhRzTs2XlRWD4WY9L79VdDxCOq21aaK_B7RMCjnv32oo3Jx0Zrvfs--B2xd8mS-5RSI_WzMGkzSoTb-0cTuP9UdG4IXAInxyko4WeOTpSxut92SOGg6_57SpzGskGlImcQitfc9JeBayeyTeZkovdgLKvKEX-qxksn2pTw1_LG3iIRBHf84APF1XUYHko-R_Ka5spO86t-sUCThKTqDLsEwvJ-IV49jEzUDSKhVag6Kmsa2YdSdFJ7165Sou7qmP2UtHv2esN2S3Tr-V5Vg9Xa3xH-8TBYfhv5QyprSTQjjUubj4UlCSpK8WB2L5hZWDyBZo0G6DCgCxZHwcz-psmxI471ajPlxmCTTHmMdbKrumQQk0_Fh8hY35s5L6Zp3fORhyheFzTPkV9enfMvHj6KiY79DCwj45iaazrjsWvqorpx8hJdMhX7eFMtzxv9jPDjG5yYDY0h2f1VH4Gms5QNl7pLJznLcOmUEN2rbbDYUlCkKPhd0hzjxi0Y4pZSlIL0UZVI3xnrEMaefXt5jPCVcrvtP5T1G-G_b_mv_8Hhjpqk1oGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzUzMzM5MzkxLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
  reportId: "df510bae-3e6d-40de-844d-23b265dd3e26",
};

const frameworksList = MENUS.map((menu) => ({
  label: menu.name,
  value: menu.name,
}));
console.log(MENUS);

export default function LL() {
  const [selectedMenu, setSelectedMenu] = useState<string[]>(frameworksList.map(menu => menu.value));
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

  return (
    <div>
      <div className="flex justify-between m-3 ">
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

        <Select onValueChange={setSelectedLayout} defaultValue={selectedLayout}>
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
      <DynamicLayoutWrapper layout={"props.layout"}>
        {MENUS.map((menu, index) =>
          selectedMenu.includes(menu.name) ? (
            <div
              key={menu.name}
              className="w-full h-full"
              dataGrid={get_layout(menu.name, selectedLayout)}
            >
              <PowerBIWrapper
                key={`${menu.name}-${selectedLayout}`}
                visualName={menu.visualName}
                pageName={menu.pageName}
                embedUrl={config.embedUrl}
                accessToken={config.embedToken}
                reportId={config.reportId}
                onEventCallback={handlePowerBIEvent}
              />
            </div>
          ) : null
        )}
      </DynamicLayoutWrapper>
    </div>
  );
}
