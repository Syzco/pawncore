import Title from './title'
import React from 'react'

export default class Stage extends React.Component {
     constructor(props) {
          super(props)
          this.title = ""
     }

     //Call in contstuctor to set title of pages. 
     setTitle(title) {
          this.title = title
     }

     //Abstract
     populateCenterStage() {
          return;
     }

     render() {
          return (
               <div className="main-page">
                    <Title title={this.title} />

                    {this.populateCenterStage()}
               </div>
          )
     }
}