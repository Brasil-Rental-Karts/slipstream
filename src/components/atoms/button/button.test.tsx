import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';
import { Plus, ArrowRight, Save } from 'lucide-react';

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

  it('renderiza com leftIcon', () => {
    render(<Button leftIcon={Plus}>Adicionar</Button>);
    const btn = screen.getByRole('button', { name: /adicionar/i });
    expect(btn).toBeInTheDocument();
    // Verifica se o ícone está presente
    const icon = btn.querySelector('svg');
    expect(icon).toBeTruthy();
    expect(icon).toHaveClass('h-4', 'w-4');
  });

  it('renderiza com rightIcon', () => {
    render(<Button rightIcon={ArrowRight}>Continuar</Button>);
    const btn = screen.getByRole('button', { name: /continuar/i });
    expect(btn).toBeInTheDocument();
    // Verifica se o ícone está presente
    const icon = btn.querySelector('svg');
    expect(icon).toBeTruthy();
    expect(icon).toHaveClass('h-4', 'w-4');
  });

  it('renderiza com ambos os ícones', () => {
    render(<Button leftIcon={Save} rightIcon={ArrowRight}>Salvar e Continuar</Button>);
    const btn = screen.getByRole('button', { name: /salvar e continuar/i });
    expect(btn).toBeInTheDocument();
    // Verifica se ambos os ícones estão presentes
    const icons = btn.querySelectorAll('svg');
    expect(icons).toHaveLength(2);
    icons.forEach(icon => {
      expect(icon).toHaveClass('h-4', 'w-4');
    });
  });

  it('não renderiza ícones quando isLoading é true', () => {
    render(<Button leftIcon={Plus} rightIcon={ArrowRight} isLoading>Loading</Button>);
    const btn = screen.getByRole('button', { name: /loading/i });
    expect(btn).toBeInTheDocument();
    // Deve ter apenas o spinner, não os ícones
    const svgs = btn.querySelectorAll('svg');
    expect(svgs).toHaveLength(1); // Apenas o spinner
    // O spinner deve ter a classe animate-spin
    expect(svgs[0]).toHaveClass('animate-spin');
  });

  it('ícones funcionam com diferentes variantes', () => {
    render(
      <div>
        <Button variant="primary" leftIcon={Plus}>Primary</Button>
        <Button variant="secondary" leftIcon={Plus}>Secondary</Button>
        <Button variant="outline" leftIcon={Plus}>Outline</Button>
        <Button variant="ghost" leftIcon={Plus}>Ghost</Button>
        <Button variant="destructive" leftIcon={Plus}>Destructive</Button>
      </div>
    );
    
    expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /secondary/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /outline/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ghost/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /destructive/i })).toBeInTheDocument();
    
    // Todos devem ter ícones
    const buttons = screen.getAllByRole('button');
    buttons.forEach(btn => {
      const icon = btn.querySelector('svg');
      expect(icon).toBeTruthy();
    });
  });

  it('ícones funcionam com diferentes tamanhos', () => {
    render(
      <div>
        <Button size="sm" leftIcon={Plus}>Small</Button>
        <Button size="md" leftIcon={Plus}>Medium</Button>
        <Button size="lg" leftIcon={Plus}>Large</Button>
      </div>
    );
    
    expect(screen.getByRole('button', { name: /small/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /medium/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /large/i })).toBeInTheDocument();
    
    // Todos devem ter ícones com o mesmo tamanho
    const buttons = screen.getAllByRole('button');
    buttons.forEach(btn => {
      const icon = btn.querySelector('svg');
      expect(icon).toBeTruthy();
      expect(icon).toHaveClass('h-4', 'w-4');
    });
  });

  it('snapshot básico', () => {
    const { container } = render(<Button variant="secondary" size="lg">Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('snapshot com ícones', () => {
    const { container } = render(
      <Button leftIcon={Plus} rightIcon={ArrowRight} variant="primary">
        Com Ícones
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});


