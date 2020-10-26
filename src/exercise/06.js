// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Input must be lowercase')
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmitUsername(inputRef.current.value)
      }}
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          onChange={handleChange}
          id="username"
          name="username"
          type="text"
        />
      </div>
      {!!error && <div role="alert">{error}</div>}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
