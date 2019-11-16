// state = {
//   color: "#0000ff"
// };

// randomizeColors() {
//   this.setState({ color: this._randomColor() });
// }

// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )
function ColorBox(props, idx, _allBoxes) {
  const style = {
    border: "2px solid black",
    backgroundColor: props.color,
    width: "100px",
    height: "200px"
  };

  // const clickHandler = () => this.randomizeColors();

  return (
    <div key={idx} style={style}>
      <p>{props.color}</p>
    </div>
  );
}

class App extends React.Component {
  state = {
    boxes: [
      this._newBox(),
      this._newBox(),
      this._newBox()
    ]
  };

  _randomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }
  randomize() {
    const currentBoxes = this.state.boxes;
    const newBoxes = currentBoxes.map((box) => {return { color: this._randomColor() }})
    const newState = {boxes: newBoxes}
    this.setState(newState);
  }

  _newBox() {
    return {color: this._randomColor()}
  }
  addBox() {
    const newBoxes = [...this.state.boxes, this._newBox()]
    this.setState({boxes: newBoxes})
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center ">
            <button onClick={ () => this.randomize() }>Randomize!</button>
            <button onClick={ () => this.addBox() }>Add Box!</button>
            <div className="d-flex justify-content-center">
              {this.state.boxes.map(ColorBox)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
