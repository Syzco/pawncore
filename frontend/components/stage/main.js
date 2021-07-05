import CustomerCard from 'components/customer-card'
import React from 'react'

export default class Stage extends React.Component {
     constructor(props) {
          super(props)
          this.title = ""
          this.hasCustomerCard = true
     }

     //Call in contstuctor to set title of pages. 
     setTitle(title) {
          this.title = title
     }

     setCustomerCard(bool) {
          this.hasCustomerCard = bool
     }

     //Abstract
     populateCenterStage() {
          return;
     }
     
     //Abstract
     populateSideStage() {
          return;
     }


     showCustomer() {
          if (this.hasCustomerCard) {
               return (
                    <CustomerCard />
               )
          }

          return;
     }

     render() {
          return (
               <div className="main-page">
                    <div className="center-pane">
                         <div className="page-title">
                              <h1>{ this.title }</h1>
                         </div>

                         <div className="center-stage">
                              {this.populateCenterStage()}
                         </div>
                    </div>

                    <div className="side-pane">
                         <div className="side-stage" style={{ marginTop: ( (this.hasCustomerCard) ? "" : "300px" ) }}>
                              {this.populateSideStage()}
                         </div>
                    </div>

                    {this.showCustomer()}
               </div>
          )
     }
}