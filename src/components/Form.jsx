import React from 'react';

export default function Form() {
  return (
    <form>
      <h2>Example</h2>
      <input type="text" name="first-name" placeholder="First name" />
      <input type="text" name="last-name" placeholder="Last name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="tel" name="phone" placeholder="Phone number" />
      <button type="submit">Submit</button>
    </form>
  );
}
