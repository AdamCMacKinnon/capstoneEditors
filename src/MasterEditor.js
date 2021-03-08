import React, { useState, useEffect }from 'react'
import JS from './components/JS'
import Shell from './components/SHELL'
import PY from './components/PY'
import SQLsetup from './components/SQLsetup'
import HTMLCSS from './components/HTMLCSS'


function MasterEditor() {
  const [javaScript, setjavaScript] = useState('//Console Logs will display in Chrome\'s Developer Tools!  Refresh the page to clear.')
  const [python, setPython] = useState('#Add Python code here!')
  const [html, setHTML] = useState('<!-- Type your HTML here! -->')
  const [css, setCss] = useState('/*Style your CSS here!*/')
  const [sql, setSql] = useState('-- Build SQL queries here!')
  const [shell, setShell] = useState('#Type shell commands here!')
  const [srcDoc, setSrcDoc] = useState('')

  const program = [
      {
          value : javaScript,
          language: "javascript",
          style: "pane top-pane",
          display: "JavaScript",
          onChange : setjavaScript,
          editor: JS
      },
      {
          value: python,
          language: "python",
          style: "pane py-top-pane",
          display: "Python",
          onChange : setPython,
          editor: PY
      },
      {
          value: shell,
          language: "shell",
          style: "pane shell-top-pane",
          display: "Shell(Terminal)",
          onChange : setShell,
          editor: Shell
      },
      {
          value: sql,
          language: "sql",
          style: "pane sql-top-pane",
          display: "SQL Queries",
          onChange : setSql,
          editor: SQLsetup
      },
      {
         value: [html, css],
         language: ["xml","css"],
         style: ["pane xml-top-pane", "pane css-top-pane"],
         display: ["HTML, CSS"],
         onChange : [setHTML, setCss],
         editor : [HTMLCSS, HTMLCSS]

      }
]
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(
        `
    <html>
     
  
      <script>${program.value}</script>
      </html>
  `
  )
    }, 750)


    return () => clearTimeout(timeout)
  }, [program.value])

  return (
    <>
    <div className={program.style}>
    <program.editor
      language={program.language}
      displayName={program.display}
      value={program.value}

      onChange={program.onChange}
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
    </>
  )
}

export default MasterEditor;