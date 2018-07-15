import React from 'react'
import ReactDOM from 'react-dom'

class IndexView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isViewing: false,
      images: [],
      image: false,
      imageIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:3009/urbanFiction/images')
      .then((res) => {
        res.text()
          .then((body) => {
            this.setState({images: body.split(',')})
          })
      })
  }
  handleClick() {
    if (this.state.isViewing) {
      this.setState({isViewing: false, image: false})
      document.getElementById('index-icon').setAttribute('src', 'index-light.svg')
    } else {
      this.setState({isViewing: true})
      document.getElementById('index-icon').setAttribute('src', 'index-dark.svg')
    }

  }
  handleSelect(e) {
    if (e.target.id === '3' || e.target.id === '4' || e.target.id === '5' || e.target.id === '6') {
      this.setState({image: true, imageIndex: e.target.id})
    }
  }
  render() {
    const imageTitles = ['Urban Fiction #0', 'Urban Fiction #0 Detail', 'Urban Fiction #14', 'Urban Fiction #14 Detail 1', 'Urban Fiction #14 Detail 2', 'Urban Fiction #14 Detail 3', 'Urban Fiction #14 Detail 4', 'Urban Fiction #8', 'Urban Fiction #8 Detail']
    return(
      <div>
        <div onClick={this.handleClick} style={{cursor: 'pointer'}}>
          <img style={{display: 'inline'}} id="index-icon" src="index-light.svg" width="22px" height="10px" />
          <span className="view-title">Index</span>
        </div>
        {
          this.state.isViewing &&
            <div id="index-wrapper">
              {this.state.images.map((image, index) => (
                <div key={index} className="index-thumb" style={{width: 'auto', maxHeight: '207px'}}>
                  <img src={image} width="auto" height="207px"/>
                  <span onClick={this.handleSelect} id={index} className="image-title">{imageTitles[index]}</span>
                </div>
              ))}
            </div>
        }
        {
          this.state.image &&
            <div id="image-view">
              <img src={this.state.images[this.state.imageIndex]} />
            </div>
        }
      </div>
    )
  }
}

export default IndexView
