import type { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    text: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    text: "Danger",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    text: "Info",
    variant: "info",
  },
};
