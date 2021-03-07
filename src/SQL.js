import React, { useState }from 'react'
import SQLsetup from './components/SQLsetup'


function SQL() {
  const [sql, setSql] = useState('')

  return (
    <>
    <div className="pane sql-top-pane">
    <SQLsetup
      language="sql"
      displayName="SQL Queries"
      value={sql}

      onChange={setSql}
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

export default SQL;