import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger", "warning", "info"], // List of available options
      control: { type: "select" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
