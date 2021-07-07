import React from "react";

export default class CustomerCard extends React.Component {
     constructor(props) {
          super(props)
     }
     
     render() {
          if (typeof this.props.customer == 'string') {
               //No Current Customer
               return (
                    <div className="customer-card">
                         <h2>Helllo I am blank</h2>
                         <h2>My name is {this.props.customer} </h2>
                    </div>
               )
          } else {
               //Has Current Customer
               return (
                    <div className="customer-card">
                         <h2>Helllo I am customer card</h2>
                         <h2>My name is {this.props.customer} </h2>
                    </div>
               )
          }
     }
}