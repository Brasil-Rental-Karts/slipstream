import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '../components/atoms/button/button';
import { 
  Plus, 
  ArrowRight, 
  Download, 
  Upload, 
  Save, 
  Edit, 
  Trash2, 
  Check 
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
  args: {
    children: 'Button',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Destructive: Story = {
  args: { variant: 'destructive' },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const WithLeftIcon: Story = {
  args: { 
    leftIcon: Plus,
    children: 'Adicionar Item'
  },
};

export const WithRightIcon: Story = {
  args: { 
    rightIcon: ArrowRight,
    children: 'Continuar'
  },
};

export const WithBothIcons: Story = {
  args: { 
    leftIcon: Save,
    rightIcon: ArrowRight,
    children: 'Salvar e Continuar'
  },
};

export const IconVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} leftIcon={Plus}>Adicionar</Button>
      <Button {...args} leftIcon={Download}>Download</Button>
      <Button {...args} leftIcon={Upload}>Upload</Button>
      <Button {...args} leftIcon={Edit}>Editar</Button>
      <Button {...args} leftIcon={Save}>Salvar</Button>
      <Button {...args} rightIcon={ArrowRight}>Continuar</Button>
      <Button {...args} rightIcon={Check}>Confirmar</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm" leftIcon={Plus}>Small</Button>
      <Button {...args} size="md" leftIcon={Plus}>Medium</Button>
      <Button {...args} size="lg" leftIcon={Plus}>Large</Button>
    </div>
  ),
};

export const DestructiveWithIcon: Story = {
  args: { 
    variant: 'destructive',
    leftIcon: Trash2,
    children: 'Excluir'
  },
};


