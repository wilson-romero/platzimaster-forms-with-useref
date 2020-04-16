import React from 'react';
// import Form from './FormUseRef';
import FormUseRef from './FormUseRef';
import FormUseState from './FormUseState';

import '../styles/components/App.styl';

export default function App() {
  return (
    <div className="container">
      <FormUseRef />
      <FormUseState />
    </div>
  );
}
