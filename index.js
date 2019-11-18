// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

function Box(props, index, _allBoxes) {
  const boxColor = {
    backgroundColor: props.color,
  }
  const boxStyles = {
    padding: "0 7px", 
    backgroundColor: "#343A40", 
    color: "#FFFFFF", 
    borderRadius: ".25rem"
  }
  let lockBtnIcon = "fas fa-lock-open"
  let lockBtnTxtColor = {
    color: '#FFFFFF'
  }
  if (props.isLocked) {
    lockBtnIcon = "fas fa-lock"
  }
  return (
    <div id={index} key={index} style={boxColor} className="w-100 d-flex flex-column align-items-center justify-content-center">
      <h3 style={boxStyles}>{props.color}</h3>
      <button onClick={props.toggleLock} style={lockBtnTxtColor} className="btn btn-dark"><i className={lockBtnIcon}></i></button>
    </div>
  )
}

class App extends React.Component {
  state = {
    boxes: [
      this._box(),
      this._box(),
      this._box(),
      this._box(),
      this._box()
    ]
  }
  _randomColor() {
    return ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})).toUpperCase()
  }
  _box() {
    return {
      color: this._randomColor(),
      isLocked: false
    }
  }
  toggleLock(index) {
    if (index < (this.state.boxes).length) {
      const newBoxes = [...this.state.boxes]
      newBoxes[index].isLocked = !newBoxes[index].isLocked
      this.setState({boxes: newBoxes})
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
    this.setState({ boxes: newBoxes })
  }
  render() {
    // add the .toggleLock function to each box
    const boxesWithLockFn = this.state.boxes.map((box, index) => {
      box.toggleLock = () => this.toggleLock(index)
      return box
    })
    const fullScreenContainer = {
      minHeight: "calc(100vh - 46px)"
    }
    console.log(fullScreenContainer)
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
      fullScreenContainer.minHeight = window.innerHeight - 46 + "px"
      console.log(fullScreenContainer.minHeight)
    }
    return (
      <div>
        <div className="text-center bg-dark static-top">
          <button onClick={() => this.randomize()} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>
        </div>
        <div className="w-100 d-flex flex-wrap flex-md-nowrap" style={ fullScreenContainer }>
          {boxesWithLockFn.map(Box)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
