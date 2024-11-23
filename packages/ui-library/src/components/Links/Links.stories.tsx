import type { Meta, StoryObj } from "@storybook/react";
import { Links } from ".";

const mockLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Links",
  component: Links,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof Links>;

export default meta;

type Story = StoryObj<typeof Links>;

export const LinksWithItems: Story = {
  args: {
    links: mockLinks,
    backgroundColor: "#ff0000", // Initial color
  },
};

export const LinksWithOneItem: Story = {
  args: {
    links: [mockLinks[0]],
    backgroundColor: "#00ff00", // Initial color
  },
};
