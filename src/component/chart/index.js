import React from 'react'

class Drag extends React.Component{
  
  down = (e) => {
    e.persist()
    let touchX = e.pageX - this.props.x
    let touchY = e.pageY - this.props.y
    
    document.onmousemove = (ev) => {
      const moveX = ev.pageX - touchX
      const moveY = ev.pageY - touchY
      const x = moveX
      const y = moveY
      this.props.move(x, y)
    }

    document.onmouseup= () => {
      touchX = null
      touchY = null
      document.onmousemove = null
  }
    // console.log(x, y)
  }
  render(){
    const {x,y,isEdit} = this.props
    let className = 'drag'
    isEdit && (className += ' isEdit')
    return <div className={className} >
      <div className="grid-line">
        <div className="grid-line-top"></div>
        <div className="grid-line-left"></div>
        <div className="grid-line-label">
          {x},{y}
        </div>
      </div>
      <div className="tap-move" onMouseDown={this.down}></div>
    </div>
  }
}

class Rect extends React.Component{
  move = (x, y) => {
    const {move, index} = this.props
    move({x, y}, index)
  }
  render(){
    const { x, y, w, h, isEdit} = this.props
    const style={
      top: y + 'px',
      left: x + 'px',
      width: w || 200 + 'px',
      height: h || 200 + 'px'
    }
    return <div className="chart-component" style={style}>
      <Drag x={x} y={y} isEdit={isEdit} move={this.move} />
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
