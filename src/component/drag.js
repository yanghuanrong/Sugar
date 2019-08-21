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

  // 修改组件宽度
  resizeW = (e) => {
    e.persist()
    // 这个20是由于编辑模式下两边多出的像素
    const MARGIN = 20

    const touchX = e.pageX - this.props.x
    const initW = this.props.w
    const initH = this.props.h

    document.onmousemove = (ev) => {
      const moveX = ev.pageX - touchX
      const w = moveX + initW - MARGIN
      this.props.resize(w, initH, this.props.index)
    }

    document.onmouseup= () => {
      document.onmousemove = null
    }
  }

  // 修改组件高度
  resizeH = (e) => {
    e.persist()
    // 这个20是由于编辑模式下两边多出的像素
    const MARGIN = 20

    const touchY = e.pageY - this.props.y
    const initW = this.props.w
    const initH = this.props.h

    document.onmousemove = (ev) => {
      const moveY = ev.pageY - touchY
      const h = moveY + initH - MARGIN
      this.props.resize(initW, h, this.props.index)
    }

    document.onmouseup= () => {
      document.onmousemove = null
    }
  }

  // 修改组件高度
  resizeAll = (e) => {
    e.persist()
    // 这个20是由于编辑模式下两边多出的像素
    const MARGIN = 20

    const touchX = e.pageX - this.props.x
    const initW = this.props.w
    const initH = this.props.h

    document.onmousemove = (ev) => {
      const moveX = ev.pageX - touchX
      const w = moveX + initW - MARGIN
      const rate = w / initW
      const h = initH * rate
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
          <span className="move-width" onMouseDown={this.resizeW}></span>
          <span className="move-height" onMouseDown={this.resizeH}></span>
          <span className="move-resize" onMouseDown={this.resizeAll} ></span>
        </div>
        <div className="move-tap" onMouseDown={this.move}></div>
      </div>
      {this.props.children}
    </div>
  }
}

