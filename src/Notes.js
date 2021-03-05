import React, { useState, useEffect }from 'react'
import JavaScript from './components/JS'


function Notes() {
  const [javaScript, setjavaScript] = useState('')
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
    <JavaScript 
      language="JavaScript"
      displayName="JavaScript"
      value={javaScript}
      onChange={setjavaScript}
    />
    
    {/* </div>
    <div className="console" >
      Console:
      <iframe
        // value={javaScript}
        srcDoc={srcDoc}
        title="console"
        sandbox="allow-scripts"
        width="100%"

        /> */}
    
    </div>
    <div>
   
    </div>
    <div>
      <button className="runButton">Save Note</button>
    </div>
    </>
  )
}

export default Notes;