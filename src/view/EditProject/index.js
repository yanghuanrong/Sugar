import React from 'react';
import Toolbar from './toolbar'
import charts from '@/component/chart'
import { Slider } from 'antd';

/**
 * 创建组件
 * @param {*} type
 * @param {*} compList
 * @returns
 */
function createdComp({type, name}, compList) {

  let iNow = 0
  const compListLen = compList.length
  compListLen && compList.forEach((item) => {
    if(item.type === type){
      iNow ++
    }
  })

  const spacing = 20
  let x = spacing
  let y = spacing
  let w = null
  let h = null
  let isEdit = true
  if (iNow) {
    name+=iNow
  }

  if(compListLen){
    y = x = spacing * (compListLen + 1)
  }
  return {x,y,w,h,name,type,isEdit}
}


class EditProject extends React.Component{
  state = {
    compList: []
  }
  /**
   * 顶部区域的操作返回的具体操作
   * @param {string} type 操作类型;
   * @param {boolean} isComp 是否为组件;
   */
  TopBarOperation = (type, isComp) => {
    if(isComp){
      const compList = [...this.state.compList]
      compList.map((item) => (item.isEdit = false))
      compList.push(createdComp(type, compList))
      this.setState({
        compList: compList
      })
    }
  }

  move(x,y,i){
    const compList = [...this.state.compList]
    compList[i].x = x
    compList[i].y = y
    this.setState({
      compList: compList
    })
  }

  render(){
    return <div className="editor-container">
      <Toolbar operation={this.TopBarOperation}/>
      <div className="editor-ctrl__left"></div>
      <div className="editor-ctrl__info">
        <div className="title">我的第一个项目</div>
      </div>
      <div className="editor-ctrl__body">
        <div style={{
          position: 'relative'
        }}>
          <div className="dashboard-container" style={{
            width: 500,
            height: 500
          }}>
            {
              this.state.compList.map(({type, ...rest}, i) => {
                const Comp = charts[type]
                return <Comp {...rest} key={i} index={i} move={({x,y},i) => this.move(x,y,i)} />
              })
            }
          </div>
        </div>
      </div>
      <div className="editor-ctrl__right"></div>
      <div className="editor-ctrl__bottom">
        <div className="zoom-tips">面板缩放百分比</div>
        <div className="zoom-slider">
          <Slider marks={{
            10: '10',
            105: '105',
            200: '200',
          }} min={10} max={200} defaultValue={100} />
        </div>
      </div>
    </div>
  }
}

export default EditProject