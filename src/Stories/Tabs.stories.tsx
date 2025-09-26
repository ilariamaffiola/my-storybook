// src/stories/Tabs.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../components/Tabs/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <>
      <Tabs {...args}>
        <Tabs.Item label="Tab 1">Contenuto Tab 1</Tabs.Item>
        <Tabs.Item label="Tab 2">Contenuto Tab 2</Tabs.Item>
        <Tabs.Item label="Tab 3">Contenuto Tab 3</Tabs.Item>
      </Tabs>
    </>
  ),
};
