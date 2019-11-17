// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

// const generateRandomColor = () => {
//   let randomColor = []
//   for (let index = 0; index < 5; index++) {
//     randomColor[index] = ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
//   }
//   console.log(randomColor)
//   return randomColor
// }

// class ColorBox extends React.Component {

//   state = {
//     color: "blue"
//   }

//   generateRandomColor = () => {
//     let randomColor = ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
//     console.log(randomColor)
//     this.setState({
//       color: randomColor
//     })
//   }

//   render() {
//     return (
//       <div style={{ backgroundColor: this.state.color }} className="w-100 d-flex flex-column align-items-center justify-content-center">
//         <h1>{this.state.color}</h1>
//         <button className="btn btn-dark">UNLOCK</button>
//       </div>
//     )
//   }
// }

// const RandomButtonEl = () => {
//   let newColor = ColorBox.generateRandomColor
//   console.log(newColor)
//   return (
//       <div className="text-center bg-dark fixed-top">
//         <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
//       </div>
//   )
// }

function Box(props, index) {
  const boxColor = {
    backgroundColor: props.color,
  }
  const boxStyles = {
    padding: "0 7px", 
    backgroundColor: "#343A40", 
    color: "#FFFFFF", 
    borderRadius: ".25rem"
  }
  let lockBtnTxt = 'LOCK'
  let lockBtnTxtColor = {
    color: '#FFFFFF'
  }
  if (props.isLocked) {
    btnTxt = 'UNLOCK'
    lockBtnTxtColor.color = '#eeeeee'
  }
  return (
    <div key={index} style={boxColor} className="w-100 d-flex flex-column align-items-center justify-content-center">
      <h2 style={boxStyles}>{props.color}</h2>
      <button style={lockBtnTxtColor} className="btn btn-dark">{lockBtnTxt}</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    boxes: [
      this._Box(),
      this._Box(),
      this._Box(),
      this._Box(),
      this._Box()
    ]
  }

  _randomColor() {
    return ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
  }

  _Box() {
    return {
      color: this._randomColor(),
      isLocked: false
    }
  }

  randomize() {
    const currentBoxes = [...this.state.boxes]
    const newBoxes = currentBoxes.map((box) => {
      if (!box.isLocked) {
        box.color = this._randomColor();
      }
      return box;
    })
    this.setState({boxes: newBoxes})
  }

  render() {

    return (
      <div>
        <div className="text-center bg-dark fixed-top">
          <button onClick={() => this.randomize()} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
        <div className="w-100 d-flex" style={{ height: "100vh" }}>
          {this.state.boxes.map(Box)}
        </div>
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.getElementById('root'))
