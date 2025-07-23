import React from 'react';

const PowerBIReport = React.lazy(() => import('./powerBiEmbedd'));

const PowerBIWrapper = (props: any) => {
  // Ensure it only renders on the client
  if (typeof window === 'undefined') return null;

  return (
    <React.Suspense fallback={<div>Loading Power BI...</div>}>
      <PowerBIReport {...props} />
    </React.Suspense>
  );
};

export default PowerBIWrapper;
