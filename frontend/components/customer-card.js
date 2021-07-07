import React from "react";

export default class CustomerCard extends React.Component {
     constructor(props) {
          super(props)

          this.customer
     }
     
     render() {     
          if (typeof this.props.customer.fname == 'string') {
               //No Current Customer
               return (                                              
                    <div className="customer-card">
                         <div className="customer-card-details">
                              <div className="customer-input-name"><input type="text" name="fname" placeholder="First Name" /> <input type="text" name="lname" placeholder="Last Name" /></div>
                              <div className="customer-input-dob"><input type="text" name="dob" placeholder="Date of Birth" /></div>
                              <div className="customer-input-phone"><input type="text" name="phone" placeholder="Phone Number" /></div>
                              <div className="customer-input-button"> <a href="#">Search Customer</a></div>
                        </div>
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