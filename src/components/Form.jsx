/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';

export default function Form() {
  const formRef = useRef();

  function resetValues({ current }) {
    const form = current;
    Array.from(form).map(el => {
      if (el.type.match('text|email|tel')) el.value = '';
      return 0;
    });
  }

  function save(form) {
    const data = Array.from(form).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {}
    );
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    save(form);
    resetValues(formRef);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2>Example with useRef()</h2>
      <input type="text" name="firstname" placeholder="First name" />
      <input type="text" name="lastname" placeholder="Last name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="tel" name="phone" placeholder="Phone number" />
      <button type="submit">Submit</button>
    </form>
  );
}
