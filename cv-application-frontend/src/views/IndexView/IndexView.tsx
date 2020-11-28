import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import { TopPanel } from "../../components/TopPanel/TopPanel";
import { DocumentList } from "../../components/IndexView/DocumentList/DocumentList";
import { IndexButtons } from "../../components/IndexView/IndexButtons/IndexButtons";

export const IndexView = () => {
  const [documentFocused, setdocumentFocused] = useState(false);

  useEffect(() => {
    console.log(documentFocused);
  }, [documentFocused]);

  return (
    <div>
      <TopPanel>
        <IndexButtons shown={!documentFocused} />
      </TopPanel>
      <div>
        <DocumentList
          focused={() => setdocumentFocused(true)}
          notFocused={() => setdocumentFocused(false)}
        />
      </div>
      <Row className="py-40"></Row>
    </div>
  );
};
