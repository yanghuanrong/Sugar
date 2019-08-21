import React from 'react'

export default class Drag extends React.Component{
  down = (e) => {
    e.persist()
    const touchX = e.pageX - this.props.x
    const touchY = e.pageY - this.props.y

    this.props.select()

    document.onmousemove = (ev) => {
      const moveX = ev.pageX - touchX
      const moveY = ev.pageY - touchY
      const x = moveX
      const y = moveY
      this.props.move(x, y, this.props.index)
    }

    document.onmouseup= () => {
      document.onmousemove = null
    }
  }
  render(){
    const { x, y, w, h, isEdit} = this.props
    const style={
      top: y || 0 + 'px',
      left: x || 0 + 'px',
      width: w + 'px',
      height: h + 'px'
    }

    let className = 'drag'
    isEdit && (className += ' isEdit')

    return <div className="chart-component" style={style}>
      <div className={className} >
        <div className="grid-line">
          <div className="grid-line-top"></div>
          <div className="grid-line-left"></div>
          <div className="grid-line-label">{x}, {y}</div>
        </div>
        <div className="resize-handle-wrapper">
          <span className="move-width"></span>
          <span className="move-height"></span>
          <span className="move-resize"></span>
        </div>
        <div className="move-tap" onMouseDown={this.down}></div>
      </div>
      {this.props.children}
    </div>
  }
}

