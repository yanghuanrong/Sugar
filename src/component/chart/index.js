import React from 'react'

class Rect extends React.Component{
  
  render(){
    const { x, y, w, h} = this.props
    const style={
      top: y || 0 + 'px',
      left: x || 0 + 'px',
      width: w + 'px',
      height: h + 'px'
    }
    return <div className="chart-component" style={style}>
      <div className="chart-rect">
        我是边框
      </div>
    </div>
  }
}

class MinIcon extends React.Component{
  render(){
    return <div>我是图标</div>
  }
}

export default {
  Rect,
  MinIcon
}
