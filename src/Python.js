import React, { useState, useEffect }from 'react'
import PY from './components/PY'


function Python() {
  const [python, setPython] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(
        `
    <html>
     

      <script>${python}</script>
      </html>
  `
  )
    }, 750)


    return () => clearTimeout(timeout)
  }, [python])

  return (
    <>
    <div className="pane py-top-pane">
    <PY
      language="Python"
      displayName="Python"
      value={python}

      onChange={setPython}
    />
    
    </div>
    <div className="console" >
       <iframe className="iFrame"
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

export default Python;