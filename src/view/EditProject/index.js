import React from 'react';
import Toolbar from './toolbar'
import charts from '@/component/chart'

class EditProject extends React.Component{
  state = {
    compList: []
  }
  /**
   * @param string 
   * 顶部区域的操作返回的具体操作
   * type 具体的类型
   * isComp 有此参数代表是添加组件
   */
  TopBarOperation = (type, isComp) => {
    if(isComp){
      const compList = [...this.state.compList]
      compList.push(charts[type])
      this.setSate({
        compList: compList
      })
    }
  }

  render(){
    return <div className="editor-container">
      <Toolbar operation={this.TopBarOperation}/>
      <div className="editor-ctrl__left"></div>
      <div className="editor-ctrl__info"></div>
      <div className="editor-ctrl__body">
        <div style={{
          position: 'relative'
        }}>
          <div className="dashboard-container" style={{
            width: 500,
            height: 500
          }}></div>
        </div>
      </div>
      <div className="editor-ctrl__right"></div>
    </div>
  }
}

export default EditProject