// https://icons8.com/license
// Icon License: Free aslong as given credit : 

import Navigation from '@Nav/main.js'
import React from 'react'
import Head from 'next/head'

import Dashboard from '@Templates/dashboard'
import Customer from '@Templates/customer'
import Inventory from '@Templates/inventory'
import Ticket from '@Templates/tickets'
import Transaction from '@Templates/transaction'

export default class App extends React.Component {
     constructor (props) {
          super(props)

          this.state = {
               page: {
                    current: "dashboard"
               },
               session: {
                    customer: {
                         fname: "Harry",
                         lname: "Langsten",
                         phone: "(272) 300-2930",
                         address: "1234 Main St.",
                         city: "Lakeland",
                         state: "FL",
                         zipCode: "33805"
                    },

                    transaction: ""
               }
          }

          this.changeTemplate = this.changeTemplate.bind(this);
     }

     /*
      * Template Handling
      */
     loadTemplate(props) {
          switch (this.state.page.current) {
               case 'dashboard': 
                    return (
                         <Dashboard {...props} />
                    )
                    break;
               case 'customer':
                    return (
                         <Customer {...props} />
                    )
                    break;
               case 'inventory':
                    return (
                         <Inventory {...props} />
                    )
                    break;
               case 'tickets':
                    return (
                         <Ticket {...props} />
                    )
                    break;
               case 'transactions':
                    return (
                         <Transaction {...props} />
                    )
                    break;
          }
     }
     changeTemplate(template) {
          this.setState({ page: { current: template }})
     }


     //Render the content.
     render() {
          return (
               <div className="main-container">
                    <Head>
                         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    </Head>

                    <Navigation navFunc={this.changeTemplate} active={this.state.page.current} />

                    {this.loadTemplate({  session: this.state.session })}
               </div>
          )
     }
}