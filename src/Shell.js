import React, { useState}from 'react'
import SHELL from './components/SHELL'


function ShellCommand() {
  const [shellCommand, setshellCommand] = useState('')

  return (
    <>
    <div className="pane shell-top-pane">
    <SHELL
      language="shell"
      displayName="Shell(Terminal)"
      value={shellCommand}

      onChange={setshellCommand}
    />
    
    </div>
    <div className="console" >
       <iframe className="iFrame"
        // value={javaScript}
        title="console"
        sandbox="allow-scripts"
        width="100%"

        />
    
    </div>
    <div>
   
    </div>
    <div>
      <textarea className="notes-section"
          placeholder="Leave a note here..."
      />
    </div>

    <div>
      <button className="runButton">Save Note</button>
    </div>

    </>
  )
}

export default ShellCommand;