import { render, screen } from '@testing-library/react';
import classed from '../src/classed';

test('The button should have correct background color', async () => {
  const Button = classed('button')
  render(<Button style={{backgroundColor:"#ccc"}}>Demo Button</Button>);
  const button = screen.getByText('Demo Button');
  expect(button).toHaveStyle({
    backgroundColor: '#ccc',
  });
});
