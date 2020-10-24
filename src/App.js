import React, { useState } from 'react'
import './App.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App = () => {
  const [text, setText] = useState('')

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const copyToClipcoard = () => {
    navigator.clipboard.writeText(text)
  }
  
  return (
    <div className="App">
      <textarea value={text} onChange={handleTextChange} />
      <button type="button" onClick={copyToClipcoard}>Copy</button>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App);
