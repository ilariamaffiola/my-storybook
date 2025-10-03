import { fireEvent } from "@testing-library/react";
import { getByText, render, within } from "@testing-library/react";


import { Tabs } from "../Tabs";

const getShadowRoot = ():HTMLElement | null => {
    const shadowHost = document.querySelector('div[data-testid="tabs-root"]');
    return shadowHost ? (shadowHost.shadowRoot as unknown as HTMLElement) : null;
};



describe("Tabs Component", () => {
    const renderTabs = () => (
        <Tabs>
            <Tabs.Item label="Tab 1">
                Content 1
            </Tabs.Item>
            <Tabs.Item label="Tab 2">
                Content 2
            </Tabs.Item>
            <Tabs.Item label="Tab 3">
                Content 3
            </Tabs.Item>
        </Tabs>
    );

    let shadowRoot:HTMLElement | null

    beforeEach(() => {
        render(renderTabs());
        shadowRoot = getShadowRoot();
        expect(shadowRoot).not.toBeNull();
    });

    afterEach(() => {
        shadowRoot = null;
    });



    it("renders all tab labels", () => {
        if(!shadowRoot) return;
        const { getByText } = within(shadowRoot);
        expect(getByText("Tab 1")).toBeInTheDocument();
        expect(getByText("Tab 2")).toBeInTheDocument();
        expect(getByText("Tab 3")).toBeInTheDocument();
    });

    it("displays the first tab content by default and hides the others", () => {
        if(!shadowRoot) return;
        const { geyByText } = within(shadowRoot);
        const content1 = getByText("Content 1");
        const content2 = getByText("Content 2");
        const content3 = getByText("Content 3");
        expect(content1).toBeInTheDocument();
        expect(content1).toBeVisible();
        expect(content2).toBeInTheDocument();
        expect(content2).not.toBeVisible();
        expect(content3).toBeInTheDocument();
        expect(content3).not.toBeVisible();
        
    });

    it("switches content when clicking on a different tab", () => {
        if(!shadowRoot) return;
        const { geyByText } = within(shadowRoot);
         const content1 = getByText("Content 1");
        const content2 = getByText("Content 2");
        const content3 = getByText("Content 3");
        const tab2 = getByText("Tab 2");
        fireEvent.click(tab2);

        expect(content1).not.toBeVisible();
        expect(content2).toBeVisible();
        expect(content3).not.toBeVisible();

        const tab3 = getByText("Tab 3");
        fireEvent.click(tab3);

        expect(content1).not.toBeVisible();
        expect(content2).toBeVisible();
        expect(content3).not.toBeVisible();


    });

});
