import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
    title: "Badge",
    args: {
        children: "Badge",
    },
    parameters: {
        layout: "centered",
    },
    component: Badge,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({children}) => <Badge>{children}</Badge>,
};