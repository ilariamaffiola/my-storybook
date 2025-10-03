import React from 'react';
import { useTabsContext } from './Tabs.context';

type ButtonProp = {
    children: React.ReactNode;
    tabId: string;
};



export const Button: React.FC<ButtonProp> = React.memo(({children, tabId}) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const [focusable, setFocusable] = React.useState(activeTab === tabId);

    React.useEffect(() => {
        setFocusable((activeTab ===tabId))
    }, [activeTab, tabId]);

    return (
        <button
            type='button'
            onClick={() => setActiveTab(tabId)}
            aria-controls={tabId}
            aria-selected={activeTab === tabId}
            id={`button-${tabId}`}
            role="tab"
            tabIndex={activeTab === tabId ? 0 : -1}
            
        >
            {children}
        </button>
    );
});