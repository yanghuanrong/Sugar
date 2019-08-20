import React, {useState} from 'react';
import {Icon} from 'antd'

console.log(React)

const componentList = [
  {
    type: 'area-chart',
    name: '图表'
  },
  {
    type: 'picture',
    name: '媒体'
  },
  {
    type: 'font-size',
    name: '文本'
  },
  {
    type: 'shop',
    name: '素材',
    child: [{
      type: 'Border',
      name: '边框'
    }, {
      type: 'MinIcon',
      name: '小图标'
    }]
  },
]

/**
 * 每个独立的操作项。
 * 用于告诉父级操作了什么选项
 * @param {*} {operation, type, name}
 * @returns
 */
function ActionItems({operation, type, name}) {
  return <div className='btn-container' onClick={() => operation && operation(type)}>
  <Icon type={type} />
  <span>{name}</span>
  </div>
}

/**
 * 用于创建舞台元素的组合项
 * @param {*} {operation}
 * @returns
 */
function ActionGroup({operation}) {
  return componentList.map((item, i) => (<li key={i}>
      <ActionItems type={item.type} name={item.name} />
      { item.child && <div className="btn-item__list">
          <div className="list-container">
            <ul>
              {
              item.child.map((items, k) => (<li key={k} onClick={() => operation(items.type, true)}>
                  <div className="tool-item">
                    <div className="tool-item__icon"></div>
                    <span className="tool-item__name">{items.name}</span>
                  </div>
                </li>)
              )}                  
          </ul>
        </div>
      </div>
      }
  </li>))
}


class Toolbar extends React.Component{
  render(){
    const {operation} = this.props

    return <header className="editor-toolbar__top">
    <div className="navbar-header">
      <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    </div>
    <div className="editor-toolbar">
      <div className="editor-toolbar__left">
        <ul className="btns-box">
          <li>
            <ActionItems operation={operation} name="撤销" type="rollback" />
          </li>
          <li>
            <ActionItems operation={operation} name="重做" type="retweet" />
          </li>
        </ul>
      </div>
      <div className="editor-toolbar__center">
        <ul className="btns-box">
          <ActionGroup operation={operation}/>
        </ul>
      </div>
      <div className="editor-toolbar__right">
        <ul className="btns-box">
          <li>
            <ActionItems operation={operation} name="保存并预览" type="fullscreen" />
          </li>
          <li>
            <ActionItems operation={operation} name="保存" type="save" />
          </li>
          <li>
            <ActionItems operation={operation} name="退出" type="close" />
          </li>
        </ul>
      </div>
    </div>
  </header>
  }
}

export default Toolbar