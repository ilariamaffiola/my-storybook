import React from "react";
import { List } from "./Tabs.List";
import { TabsContext } from "./Tabs.context";
import type { ItemProps } from "./Tabs.Item";
import { Item } from "./Tabs.Item";
import { Tab } from "./Tabs.tab";

type TabsProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const isTabValidChildren = (
  child: React.ReactNode
): child is React.ReactElement<ItemProps> => {
  return (
    React.isValidElement(child) && typeof (child.props as ItemProps).label !== "undefined"
  );
};

export const Tabs: React.FC<TabsProps> & { Item: typeof Item } = ({
  children,
}) => {
  const id = React.useId();
  const [activeTab, setActiveTab] = React.useState<string>(id + "-0");

  // Cloniamo i figli validi aggiungendo un id univoco
  const validChildren = React.Children.toArray(children)
    .filter(isTabValidChildren)
    .map((child, i) =>
      React.cloneElement(child, {
        id: id + "-" + i,
        key: id + "-" + i,
      })
    );

  const tabsLabels = validChildren.map((child) => ({
    label: (child.props as ItemProps).label,
    tabId: child.props.id,
  }));

  if (validChildren.length !== React.Children.count(children)) {
    console.warn("Invalid children for Tabs");
  }

  return (
    <div role="tablist">
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <List tabsLabels={tabsLabels} />

        {validChildren.map((child) => {
          const tabId = child.props.id;
          return <Tab id={tabId} key={tabId}>{child.props.children}</Tab>;
        })}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.displayName = "Tabs";
Tabs.Item = Item;
