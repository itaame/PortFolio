import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  it('renders title and tags', () => {
    render(
      <Card title="Test Card" description="A sample description" tags={['React', 'Telemetry']}>
        <p>Content</p>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('A sample description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Telemetry')).toBeInTheDocument();
  });
});
