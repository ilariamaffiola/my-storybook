import React from "react";
import { Button } from "./Tabs.button";

type TabsListProp = {
  tabsLabels: {
    label: React.ReactNode;
    tabId: string;
  }[];
};

export const List: React.FC<TabsListProp> = ({ tabsLabels }) => {
  return (
    <div className="tabslist">
      {tabsLabels.map(({ label, tabId }) => (
        <Button tabId={tabId} key={tabId}>
          {label}
        </Button>
      ))}
    </div>
  );
};

