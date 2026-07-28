// @ts-check

import React from 'react';
import { Button } from '@wordpress/components';
import { useCopyToClipboard } from 'clipboard.js';

const MarkdownCopy = () => {
  const [copied, setCopied] = React.useState(false);
  const [error, setError] = React.useState(null);
  const copyToClipboard = useCopyToClipboard();

  const handleCopy = async (text: string) => {
    try {
      await copyToClipboard(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Button onClick={() => handleCopy('Shipping details: \nName: John Doe \nAddress: 123 Main St')}>
        Copy Shipping Details
      </Button>
      {copied && <p>Shipping details copied to clipboard!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MarkdownCopy;