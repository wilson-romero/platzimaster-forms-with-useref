/* eslint-disable no-alert */
import React, { useState } from 'react';

let renderCount = 0;

export default function Form() {
  const [form, setForm] = useState({});

  function save() {
    window.alert(`A name was submitted: ${JSON.stringify(form)}`);
  }

  function resetValues() {
    const defaultValues = { firstname: '', lastname: '', email: '', phone: '' };
    setForm(defaultValues);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    save(form);
    resetValues();
  }

  const { firstname, lastname, email, phone } = form;

  renderCount += 1;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Example with useState()</h2>
      <input
        type="text"
        name="firstname"
        placeholder="First name"
        value={firstname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last name"
        value={lastname}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={phone}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <h2>{`Render count: ${renderCount}`}</h2>
    </form>
  );
}
