import React from "react";

export default class CustomerCard extends React.Component {
     constructor(props) {
          super(props)

          this.form = React.createRef()
          this.validate = this.validate.bind(this)
          this.searchCustomers = this.searchCustomers.bind(this)
     }

     validate() {
          this.form.current.reportValidity()
     }

     searchCustomers() {
          this.validate()
     }
     
     render() {     
          if (typeof this.props.customer.fname == 'string') {
               //No Current Customer
               return (                                              
                    <div className="customer-card">
                         <form className="customer-card-details" onSubmit={e => e.preventDefault()} ref={this.form}>
                              <div className="customer-input-name"><input type="text" name="fname" placeholder="First Name" /> <input type="text" name="lname" placeholder="Last Name" /></div>
                              <div className="customer-input-dob"><input type="text" name="dob" placeholder="Date of Birth" pattern="[0-1][0-9]/[0-3][0-9]/[0-9]{4}" /></div>
                              <div className="customer-input-phone"><input type="text" name="phone" placeholder="Phone Number" /></div>
                              <div className="customer-input-button"><button type="submit" onClick={this.searchCustomers}>Search Customer</button></div>
                        </form>
                    </div>
                    )
          } else {
               //Has Current Customer
               return (           
                    <div className="customer-card">
                         <div className="customer-card-details">
                              <img className="customer-img" src="/img/face2.png" />
                              <div className="customer-name">{this.props.customer.fname} {this.props.customer.lname}</div>
                              <div className="customer-phone">{this.props.customer.phone}</div>
                              <div className="customer-address">{this.props.customer.address}</div>
                              <div className="customer-citystate">{this.props.customer.city} {this.props.customer.state}, {this.props.customer.zipCode} </div>
                              <img className="edit-button" src="/img/icon_pencil.png" />
                         </div>
                    </div>              
              )
          }
     }
}