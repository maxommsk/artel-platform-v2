import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { Button } from '../src/components/ui/button'; // Убедитесь, что путь правильный
import React from 'react';

describe('Button', () => {
  test('renders the button with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDefined();
  });

  test('applies default variant and size', () => {
    const { container } = render(<Button>Test</Button>);
    // Проверяем, что класс по умолчанию применен
    expect(container.firstChild).toHaveClass('bg-primary'); 
  });

  test('applies custom variant', () => {
    const { container } = render(<Button variant="destructive">Delete</Button>);
    expect(container.firstChild).toHaveClass('bg-destructive');
  });
});
