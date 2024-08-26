const sty1 = {background:'#23272F', color:'white', padding:'10px'}
const sty2 = {background:'#343A46', padding:'14px', borderRadius:'12px'}
const sty3 = {color:'#F5F5F5'}

function App(){
    return(
    <div style = {sty1}>
      <h1>Quick Start</h1>
      <p>
        Welcome to the React documentation! This page will give you an
        introduction to the 80% of React concepts that you will use on a daily
        basis.
      </p>
      <div style = {sty2}>
        <h3>You will learn</h3>
        <ul>
            <li>How to create and nest components</li>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
        </ul>
      </div>
    </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)