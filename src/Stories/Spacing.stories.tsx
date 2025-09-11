import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Atoms/Spacing',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const SpaceCalc = ({value}: {value: string}) => {
    const spacing = React.useMemo(() => {
        //sto mettendo all'interno di una variabile bodyStyle tutto il css applicato a body
        const bodyStyle = window.getComputedStyle(document.body);
        return bodyStyle.getPropertyValue(value);
    }, [value]);
    return <span>{spacing}</span>;
};

const Style: React.FC = () => {
    return <style>{`
        dl {
            font-size: 1rem;
            border: 1px solid #ccc;
            display: grid;
            max-width: calc(550rem / 16);
            grid-template-columns: 1fr 1fr;
            border-bottom: none;
            border-radius: 0.5rem;
        }
        dt {
            font-weight: bold;
            padding: var(--spacing-sm) var(--spacing-md);
            border-bottom: 1px solid #ccc;
        }

        dd {
            padding: var(--spacing-sm) var(--spacing-md);
            border-bottom: 1px solid #ccc;
            font-family: monospace;  
        }
    `}</style>;
};
// Esportiamo almeno una storia di default
export const Default: Story = {
  render: () => (
    <>
      <Style />
      <dl>
        {["zero", "xs", "sm", "md", "lg", "xl"].map(key => (
          <React.Fragment key={key}>
            <dd>{key}</dd>
            <dd><SpaceCalc value={`--spacing-${key}`} /></dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  ),
};

