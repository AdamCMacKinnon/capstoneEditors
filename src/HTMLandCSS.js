import React, { useState }from 'react'
import HTMLCSS from './components/HTMLCSS'

const HTMLandCSS = () => {

    const [html, setHtml] = useState('<!-- Type your HTML here! -->')
    const [css, setCss] = useState('/*Style your CSS here!*/')
  return (
    <>
      <div className="pane xml-top-pane">
      <HTMLCSS 
      language="xml"
      displayName="HTML"
      value={html}
      onChange={setHtml}
      />
      </div>
      <div className="pane css-top-pane">
      <HTMLCSS 
      language="css"
      displayName="CSS"
      value={css}
      onChange={setCss}
      
      />
      </div>
      <div className="console">
          <iframe className="iFrame"
            title="console"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
          
          />
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

export default HTMLandCSS
