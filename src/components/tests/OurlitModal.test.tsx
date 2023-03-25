import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OurlitModal from '../src/OurlitModal';

describe('OurlitModal', () => {
  let warnSpy: jest.SpyInstance;
  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });
  
  it('Renders properly', () => {
    render(
      <OurlitModal
        text="Test Button"
        color="primaryBlue"
        size="medium"
        variant="contained"
        modalSize="medium"
        content={<div>Test Content</div>}
      />,
    );

    expect(screen.getByText('Test Button')).toBeTruthy();
  });

  it('Opens and closes the modal', async () => {
    render(
      <OurlitModal
        text="Test Button"
        color="primaryBlue"
        size="medium"
        variant="contained"
        modalSize="medium"
        content={<div>Test Content</div>}
      />,
    );

    const modalButton = screen.getByText('Test Button');
    expect(modalButton).toBeTruthy();

    fireEvent.click(modalButton);
    let modal = await screen.findByText('Test Content');
    expect(modal).toBeTruthy();
  });
});
