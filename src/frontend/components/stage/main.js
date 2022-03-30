import CustomerCard from 'components/customer-card'
import React from 'react'
import BackButton from '@Components/back-button'

export default class Stage extends React.Component {
     constructor(props) {
          super(props)
          this.title = ""
          this.hasCustomerCard = true
          this.hasBackButton = false
     }

     //Call in contstuctor to set title of pages. 
     setTitle(title) {
          this.title = title
     }

     showCustomerCard(bool) {
          this.hasCustomerCard = bool
     }

     showBackButton(bool) {
          this.hasBackButton = bool
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
                    <CustomerCard customer={this.props.session.customer}/>
               )
          }

          return;
     }

     //Abstract
     backButtonFunc() {
          return;
     }

     showBack() {
          if (this.hasBackButton) {
               return (
                    <BackButton func={this.backButtonFunc} />
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
                         <div className="side-stage" style={{ marginTop: ( (this.hasCustomerCard) ? ((this.props.session.customer) ? "300px" : "200px") : "" ) }}>
                              {this.populateSideStage()}
                         </div>
                    </div>

                    {this.showCustomer()}
                    {this.showBack()}
               </div>
          )
     }
}