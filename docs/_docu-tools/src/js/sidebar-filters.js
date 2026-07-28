// @ts-check

import { useCopyToClipboard } from 'clipboard.js';

const useClipboard = () => {
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

  return { handleCopy, copied, error };
};

export default useClipboard;