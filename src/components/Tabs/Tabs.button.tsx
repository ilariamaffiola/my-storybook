import React from 'react';
import { useTabsContext } from './Tabs.context';

type ButtonProp = {
    children: React.ReactNode;
    tabId: string;
};



export const Button: React.FC<ButtonProp> = ({children, tabId}) => {
    const { activeTab, setActiveTab } = useTabsContext();
    return (
        <button
            type='button'
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            aria-controls={tabId}
            aria-selected={activeTab === tabId}
            id={`button-${tabId}`}
            role="tab"
        >
            {children}
        </button>
    );
};