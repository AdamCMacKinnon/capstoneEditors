import React, { useState, useEffect }from 'react'
import JS from './components/JS'


function JavaScript() {
  const [javaScript, setjavaScript] = useState('//console logs will display in chrome\'s dev tools! Refresh the page to clear.//')
  const [srcDoc, setSrcDoc] = useState('')

  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(
        `
    <html>
     

      <script>${javaScript}</script>
      </html>
  `
  )
    }, 750)


    return () => clearTimeout(timeout)
  }, [javaScript])

  return (
    <>
    <div className="pane top-pane">
    <JS
      language="JavaScript"
      displayName="JavaScript"
      value={javaScript}

      onChange={setjavaScript}
    />
    
    </div>
    <div className="console" >
       <iframe className="iFrame"
        // value={javaScript}
        srcDoc={srcDoc}
        title="console"
        sandbox="allow-scripts"
        width="100%"

        />
    
    </div>
    <div>
   
    </div>
    <div>
      <textarea className="notes-section"
          
      />
    </div>

    <div>
      <button className="runButton">Save Note</button>
    </div>

    </>
  )
}

export default JavaScript;
