import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shareUrl] = useState('intent://webview?popupUri=/wellness/stp#Intent;scheme=kbocarex;package=com.kb.ocare.app;end;')

  function goLink() {
    console.log(shareUrl)
    // location.href = shareUrl

    // const kbocarex = 'webview?popupUri=%2Fwellness%2Fstp';
    location.href = shareUrl;
  }

  return (
    <>
      <div><a href="#" onClick={() => goLink()}>share test</a></div>
      <div>{shareUrl}</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
