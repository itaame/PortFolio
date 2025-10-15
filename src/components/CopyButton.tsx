import { useState } from 'react';
import { Button } from './Form';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (error) {
          console.error('Failed to copy BibTeX', error);
        }
      }}
      aria-label="Copy BibTeX entry"
    >
      {copied ? 'Copied!' : 'Copy BibTeX'}
    </Button>
  );
}
