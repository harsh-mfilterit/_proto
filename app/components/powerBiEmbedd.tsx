// PowerBIReport.jsx
import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

interface PowerBIReportProps {
  refresh?: string;
  embedUrl: string;
  accessToken: string;
  visualName?: string;
  pageName?: string;
  reportId: string;
  onEventCallback?: (eventType: string, event: any) => void;
  filters?: any[];
}

interface PowerBIEvent {
  detail: any;
}

const PowerBIReport: React.FC<PowerBIReportProps> = ({ 
  embedUrl, 
  accessToken, 
  visualName, 
  pageName, 
  reportId, 
  onEventCallback = () => {}, 
  filters = [] 
}) => {
  // Event handlers
  const handleDataSelected = (event: PowerBIEvent) => {
    console.log('Data selected:', event.detail);
    onEventCallback('dataSelected', event);
  };

  const handleFiltersApplied = (event: PowerBIEvent) => {
    console.log('Filters applied:', event.detail);
    onEventCallback('filtersApplied', event);
  };

  const handleButtonClicked = (event: PowerBIEvent) => {
    console.log('Button clicked:', event.detail);
    onEventCallback('buttonClicked', event);
  };

  const handlePageChanged = (event: PowerBIEvent) => {
    console.log('Page changed:', event.detail);
    onEventCallback('pageChanged', event);
  };

  const handleVisualClicked = (event: PowerBIEvent) => {
    console.log('Visual clicked:', event.detail);
    onEventCallback('visualClicked', event);
  };

  const handleReportLoaded = (event: PowerBIEvent) => {
    console.log('Report loaded:', event.detail);
    onEventCallback('loaded', event);
  };

  const handleReportRendered = (event: PowerBIEvent) => {
    console.log('Report rendered:', event.detail);
    onEventCallback('rendered', event);
  };

  const handleError = (event: PowerBIEvent) => {
    console.error('Power BI Error:', event.detail);
    onEventCallback('error', event);
  };

  return (
    <div className="w-full h-full">
      <PowerBIEmbed
        embedConfig={{
          type: visualName ? 'visual' : 'report',
          id: reportId,
          visualName: visualName,
          pageName: pageName,
          embedUrl: embedUrl,
          accessToken: accessToken,
          tokenType: models.TokenType.Embed,
          settings: {
            background: models.BackgroundType.Transparent,
            panes: {
              filters: { visible: false },
              pageNavigation: { visible: false },
            },
          },
          filters: filters,
        }}
        cssClassName="powerbi-embed  w-full h-full bg-transparent"
        getEmbeddedComponent={(embeddedReport: any) => {
          console.log('Report embedded:', embeddedReport);
          
          // Add event listeners
          embeddedReport.on('dataSelected', handleDataSelected);
          embeddedReport.on('filtersApplied', handleFiltersApplied);
          embeddedReport.on('buttonClicked', handleButtonClicked);
          embeddedReport.on('pageChanged', handlePageChanged);
          embeddedReport.on('visualClicked', handleVisualClicked);
          embeddedReport.on('loaded', handleReportLoaded);
          embeddedReport.on('rendered', handleReportRendered);
          embeddedReport.on('error', handleError);
        }}
      />
    </div>
  );
};

export default PowerBIReport;
