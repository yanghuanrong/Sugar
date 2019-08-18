import React from 'react';

class NoMatch extends React.Component{
  render(){
    return <div>404, {this.props.location.pathname} 不存在</div>
  }
}

export default NoMatch