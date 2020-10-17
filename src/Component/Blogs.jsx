import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
export const Blogs = () => {
  return (
    <div>
      <Tabs>
        <Tab eventKey="tab1" title="Tab1">
          <Tab1 />
        </Tab>
        <Tab eventKey="tab2" title="Tab2">
          <Tab2 />
        </Tab>
        <Tab eventKey="tab3" title="Tab3"></Tab>
        <Tab eventKey="tab4" title="Tab4"></Tab>
      </Tabs>
    </div>
  );
};
