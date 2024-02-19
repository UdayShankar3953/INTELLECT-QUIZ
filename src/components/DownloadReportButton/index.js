// DownloadReportButton/index.js
import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

const DownloadReportButton = () => {
  const handleDownload = () => {
    // Print the current page
    window.print();
  };

  return (
    <Fragment>
      <Button
        title="Download Report"
        floated="right"
        size="big"
        circular
        icon="print"
        onClick={handleDownload}
      />
    </Fragment>
  );
};

export default DownloadReportButton;
