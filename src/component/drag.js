import React from 'react'

export default class Drag extends React.Component{

  // 组件移动事件
  move = (e) => {
    e.persist()
    const touchX = e.pageX - this.props.x
    const touchY = e.pageY - this.props.y

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

  // 修改组件尺寸
  resize = (e, type) => {
    e.persist()
    const touchX = e.pageX 
    const touchY = e.pageY
    const initW = this.props.w
    const initH = this.props.h
    let w = initW
    let h = initH

    document.onmousemove = (ev) => {
      const moveX = ev.pageX - touchX
      const moveY = ev.pageY - touchY

      if(type === 'w'){
        w = moveX + initW
      } else if(type === 'h'){
        h = moveY + initH
      } else {
        w = moveX + initW
        let rate = w / initW
        h = initH * rate
      }
      this.props.resize(w, h, this.props.index)
    }

    document.onmouseup= () => {
      document.onmousemove = null
    }
  }

  render(){
    const { x, y, w, h, isEdit} = this.props
    const style = {
      top: y || 0 + 'px',
      left: x || 0 + 'px',
      width: w + 'px',
      height: h + 'px'
    }

    let className = 'drag'
    isEdit && (className += ' isEdit')

    return <div className="chart-component" style={style} onMouseDown={this.props.select}>
      <div className={className} >
        <div className="grid-line">
          <div className="grid-line-top"></div>
          <div className="grid-line-left"></div>
          <div className="grid-line-label">{x}, {y}</div>
        </div>
        <div className="resize-handle-wrapper">
          <span className="move-width" onMouseDown={(e) => {
            e.persist()
            this.resize(e, 'w')
          }}></span>
          <span className="move-height" onMouseDown={(e) => {
            e.persist()
            this.resize(e, 'h')
          }}></span>
          <span className="move-resize" onMouseDown={(e) => {
            e.persist()
            this.resize(e)
          }} ></span>
        </div>
        <div className="move-tap" onMouseDown={this.move}></div>
      </div>
      {this.props.children}
    </div>
  }
}

