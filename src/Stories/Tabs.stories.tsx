// src/stories/Tabs.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../components/Tabs/Tabs";
import root from "react-shadow";
import { Badge } from "../components/Badge/Badge";
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Skeleton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <root.div>
      <style>
        {`
          div {
          text-align: center;
          background-color: light-dar(var(--color-gray-0), var(--color-gray-15));
          border-radius: var(--border-radius-md, 0.5rem);
          width: 30rem;
          max-width: 100%;
          min-height: 4rem;
          margin-bottom: 1rem;
          align-content: center;
          }
        `}
      </style>
      <div className="skeleton">{children}</div>
      <div />
      <div />
      <div />
    </root.div>
  );
};



export const Default: Story = {
  render: (args) => (
    <>
      <Tabs {...args}>
        <Tabs.Item label="Tab 1">
          <Skeleton>
            Tab content 1
          </Skeleton>
        </Tabs.Item>
        <Tabs.Item label="Tab 2">
          <Skeleton>
            Tab content 2
          </Skeleton>
        </Tabs.Item>
        <Tabs.Item label={
          <span>
            Label 3 <Badge>
                New
              </Badge>
          </span>
        }>
          <Skeleton>
            Tab content 3
          </Skeleton>
        </Tabs.Item>
        <Tabs.Item label={
          <span>
            Label 4 <Badge variant="positive">
                Positive
              </Badge>
          </span>
        }>
          <Skeleton>
            Tab content 4 
          </Skeleton>
        </Tabs.Item>
        <Tabs.Item label={
          <span>
              Label 5 <Badge variant="negative">
              Negative
            </Badge>
          </span>}>
          <Skeleton>
            Tab content 5  
          </Skeleton>
        </Tabs.Item>
      </Tabs>
    </>
  ),
};
