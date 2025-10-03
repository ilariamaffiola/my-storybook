import React from "react";
import { Button } from "./Tabs.button";
type TabsListProp = {
  tabsLabels: {
    label: React.ReactNode;
    tabId: string;
  }[];
};

export const List: React.FC<TabsListProp> = ({ tabsLabels }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const buttons = Array.from(event.currentTarget.querySelectorAll("button[role='tab']")
    );
    const currentIndex = buttons.findIndex((button) => button === document.activeElement
);
    let newIndex = currentIndex;
    switch (event.key) {
        case "Home":
            newIndex = 0;
            break;
        case "ArrowRight":
        case "ArrowDown":
            newIndex = (currentIndex + 1) % buttons.length;
            break;
        case "ArrowLeft":
        case "ArrowUp":
            newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            break;
        case "End":
            newIndex = buttons.length - 1;
            break;

        default:
            return; // exit this handler for other keys
    }
    const nextButton = buttons[newIndex];
    nextButton?.focus();
    event.preventDefault();
  };

  return (
    <div className="tabslist"  role="tablist" onKeyDown={handleKeyDown}>
      {tabsLabels.map(({ label, tabId }) => (
        <Button tabId={tabId} key={tabId} >
          {label}
        </Button>
      ))}
    </div>
  );
};

