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

     populateSidePane() {
          return;
     }

     render() {
          return (
               <div className="main-page">
                    <Title title={this.title} />

                    <div className="center-pane">
                         {this.populateCenterStage()}
                    </div>

                    <div className="side-pane">

                    </div>
               </div>
          )
     }
}