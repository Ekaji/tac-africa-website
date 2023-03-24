/* eslint-disable react/jsx-key */
import React from 'react'

export default function testform() {
  return (
    <div>
        <form action="https://api.web3forms.com/submit" method="POST" >

            <input type="hidden" name="access_key" value="46af3412-e39b-45b9-8a58-d74ce05bbfac" />
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <textarea name="message" required ></textarea >

            <button type="submit">Submit Form</button>
        </form>
    </div>
  )
}
