import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('renderiza com variant default', () => {
    render(<Button>Label</Button>);
    const btn = screen.getByRole('button', { name: /label/i });
    expect(btn).toBeInTheDocument();
  });

  it('renderiza com variant secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button', { name: /secondary/i })).toBeInTheDocument();
  });

  it('renderiza com variant outline', () => {
    render(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button', { name: /outline/i })).toBeInTheDocument();
  });

  it('renderiza com variant ghost', () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button', { name: /ghost/i })).toBeInTheDocument();
  });

  it('renderiza com variant destructive', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('renderiza tamanhos sm, md, lg', () => {
    render(
      <div>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    );
    expect(screen.getByRole('button', { name: /small/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /medium/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /large/i })).toBeInTheDocument();
  });

  it('dispara onClick quando clicado', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole('button', { name: /click/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('exibe estado de loading com spinner e desabilita clique', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button isLoading onClick={onClick}>Loading</Button>);
    const btn = screen.getByRole('button', { name: /loading/i });
    expect(btn).toHaveAttribute('disabled');
    // SVG spinner está presente
    expect(btn.querySelector('svg')).toBeTruthy();
    await user.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('aplica disabled corretamente', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Disabled</Button>);
    const btn = screen.getByRole('button', { name: /disabled/i });
    expect(btn).toBeDisabled();
    await user.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('é acessível via role button e aceita aria-*', () => {
    render(<Button aria-label="custom" aria-live="polite">A11y</Button>);
    const btn = screen.getByRole('button', { name: /custom/i });
    expect(btn).toHaveAttribute('aria-label', 'custom');
    expect(btn).toHaveAttribute('aria-live', 'polite');
  });

  it('snapshot básico', () => {
    const { container } = render(<Button variant="secondary" size="lg">Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});


