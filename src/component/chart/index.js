import React from 'react'

class Drag extends React.Component{
  render(){
    const {x,y,isEdit} = this.props
    let className = 'drag'
    isEdit && (className += ' isEdit')
    return <div className={className}>
      <div className="grid-line">
        <div className="grid-line-top"></div>
        <div className="grid-line-left"></div>
        <div className="grid-line-label">
          {x},{y}
        </div>
      </div>
    </div>
  }
}

class Rect extends React.Component{
  render(){
    const {x,y,w,h,isEdit} = this.props
    const style={
      top: y + 'px',
      left: x + 'px',
      width: w || 200 + 'px',
      height: h || 200 + 'px'
    }
    return <div className="chart-component" style={style}>
      <Drag x={x} y={y} isEdit={isEdit} />
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
