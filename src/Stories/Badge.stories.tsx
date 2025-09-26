import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
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
    render: ({children, variant}) => <Badge variant={variant}>{children}</Badge>,
};
export const AllBadges: Story = {
    render: ({children}) => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Badge variant="default">{children}</Badge>
            <Badge variant="positive">{children}</Badge>
            <Badge variant="negative">{children}</Badge>
        </div>
    ),
};