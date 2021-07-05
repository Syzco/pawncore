import Title from '@Tab/title'
import React from 'react'

export default class Stage extends React.Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <div className="main-page">
                    <Title title={this.props.title} />
               </div>
          )
     }
}