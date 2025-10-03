import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Input } from '../components/input/Input';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: "label",
    isInvalid: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default:Story = {
    render: ({label, isInvalid, disabled}) => (
        <div>
        <Input  
        isInvalid={isInvalid}
        errorText="Invalid Email"
        kind='email' 
        label={label}
        placeholder='placeholder'
        icon='Book'
        disabled={disabled}
      
        
        />
        <Input options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},    
        ]} 
        kind='radio' 
        label={label}
        name="mimmo"
        disabled={disabled}
        />
        <Input options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},    
        ]} 
        kind='select' 
        disabled={disabled}
        label={label}
        />

        
        </div>
    )
};


export const InputStory:Story = {
    render: ({label}) => (
        <>
        <Input 
        kind='text' 
        label={label}
        placeholder='placeholder'
        />
        
        </>
    )
};

export const Radio:Story = {
    render: ({label}) => (
        <>
        <Input options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},    
        ]} 
        kind='radio' 
        label={label}
        name="mimmo"
        />
        
        </>
    )
};

export const Select:Story = {
    render: ({label}) => (
        <>
        <Input options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},    
        ]} 
        kind='select' 
        label={label}
        />
        
        </>
    )
};

