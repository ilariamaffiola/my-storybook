import React from "react";
import { useTabsContext } from "./Tabs.context";


interface TabProps {
    id: string;
    children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ id, children }) => {
    const { activeTab } = useTabsContext();
    return (
      <div
        id={id}
        role="tabpanel"
        aria-labelledby={`button-${id}`}
        hidden={activeTab !== id}
        >
            {children}
        </div>  
    )
};