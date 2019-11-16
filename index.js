// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

// const generateRandomColor = () => {
//   let randomColor = []
//   for (let index = 0; index < 5; index++) {
//     randomColor[index] = ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
//   }
//   console.log(randomColor)
//   return randomColor
// }

class ColorBox extends React.Component {

  state = {
    color: "blue"
  }

  generateRandomColor = () => {
    let randomColor = ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
    console.log(randomColor)
    this.setState({
      color: randomColor
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h1>{this.state.color}</h1>
        <button className="btn btn-dark">UNLOCK</button>
      </div>
    )
  }
}

const RandomButtonEl = () => {
  let newColor = ColorBox.generateRandomColor
  console.log(newColor)
  return (
      <div className="text-center bg-dark fixed-top">
        <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
      </div>
  )
}

const App = function() {

  return (
    <div>
      <RandomButtonEl/>
      <div className="w-100 d-flex" style={{ height: "100vh" }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
