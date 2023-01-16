import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

export default function MyApp() {
  return (
    <CssVarsProvider>
      <Button variant="solid">Hello World</Button>
    </CssVarsProvider>
  );
}