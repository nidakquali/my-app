import React, { Component} from 'react'
import ComponentTwo from './ComponentTwo'
import ComponentThree from './ComponentThree'
class ComponentOne extends Component {
   render() {
       return(
           <div>
           <div id="componentone">Hello ComponentOne</div>
           <ComponentTwo />
           <ComponentThree />
           </div>
       )
   }
}
export default ComponentOne