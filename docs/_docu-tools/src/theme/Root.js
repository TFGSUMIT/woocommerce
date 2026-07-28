// @ts-check

import React from 'react';
import { useClipboard } from './js/sidebar-filters';

const Root = () => {
  const { handleCopy, copied, error } = useClipboard();

  const handleCopyShippingDetails = () => {
    handleCopy('Shipping details: \nName: John Doe \nAddress: 123 Main St');
  };

  return (
    <div>
      <button onClick={handleCopyShippingDetails}>
        Copy Shipping Details
      </button>
      {copied && <p>Shipping details copied to clipboard!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Root;