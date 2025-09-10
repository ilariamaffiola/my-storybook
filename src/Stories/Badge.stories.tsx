import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Badge />,
};