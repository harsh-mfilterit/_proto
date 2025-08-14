import { useGetEmbedUrl } from "@/api/getEmbeddUrl";
import PowerBIWrapper from "@/components/powerBiWrapper";
import React, { useState } from "react";

export default function All() {
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

  return (
    <div>
      {data && (
        <div className="w-full h-screen">
          <PowerBIWrapper
            embedUrl={data.embedUrl}
            accessToken={data.embedToken}
            reportId={data.reportId}
            // filters={
            //   selectedFilter === "All"
            //     ? []
            //     : [getFilter("customer", selectedFilter)]
            // }
            onEventCallback={handlePowerBIEvent}
          />
        </div>
      )}
    </div>
  );
}
