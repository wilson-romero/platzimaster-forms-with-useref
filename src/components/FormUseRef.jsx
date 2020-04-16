/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import React, { useRef } from 'react';

let renderCount = 0;

export default function Form() {
  const formRef = useRef();

  function save(form) {
    const data = Array.from(form).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {}
    );
    window.alert(`A name was submitted: ${JSON.stringify(data)}`);
  }

  function resetValues({ current }) {
    const form = current;
    Array.from(form).map(el => {
      if (el.type.match('text|email|tel')) el.value = '';
      return 0;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    save(form);
    resetValues(formRef);
  }

  renderCount += 1;

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2>Example with useRef()</h2>
      <input type="text" name="firstname" placeholder="First name" />
      <input type="text" name="lastname" placeholder="Last name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="tel" name="phone" placeholder="Phone number" />
      <button type="submit">Submit</button>
      <h2>{`Render count: ${renderCount}`}</h2>
    </form>
  );
}
