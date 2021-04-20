import { render, screen } from '@testing-library/react';
import Splash from './Splash';

test('renders learn react link', () => {
  render(<Splash />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
