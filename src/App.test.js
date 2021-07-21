import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

  render(<App />);

  test('renders only input field on start', () => {
   
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toBeInTheDocument();
  });

  test('should display list on input', async () => {
   // render(<App />);

    userEvent.type(screen.getByRole('textbox'), "ser");
    
    // use waitFor to wait for DOM change due to state change in useEvent
    await waitFor(() => expect(screen.getAllByText(/ser/i)).toHaveLength(2));
  });

  /*
  test('should display country on field click', async () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'ser');

    await waitFor()
  })
  */
})
