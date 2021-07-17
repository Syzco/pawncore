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
import Error404 from '@Templates/error404'
import Session from 'classes/Session'

export default class App extends React.Component {
     constructor (props) {
          super(props)

          this.state = {
               page: {
                    current: "dashboard"
               },
               session: new Session(1, 300)
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
               case 'default':
                    return (
                         <Error404 {...props} />
                    )
          }
     }
     changeTemplate(template) {
          this.setState({ page: { current: template }})
     }

     /*
      * Transaction Handling
      */
     changeTransaction = (transaction) => {
          this.setState({ session: { transaction: transaction } })
     }
     getTransaction = () => {
          return this.state.session.transaction
     }

     /*
      * Customer Handling
      */
     changeCustomer = (customer) => {
          this.setState({ session: { customer: customer } })
     }
     removeCustomer = (removeCustomer) => {
          this.setState({ session: { customer: "" } })
     }
     

     //Render the content.
     render() {
          return (
               <div className="main-container">
                    <Head>
                         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    </Head>

                    <Navigation navFunc={this.changeTemplate} active={this.state.page.current} />

                    {this.loadTemplate({  session: this.state.session,  update: this.updateIndexData, retrieve: this.getIndexData })}
               </div>
          )
     }
}

// TODO: GET SERVERSIDE PROPS FOR CONSTANT VALUES (TICKET_COUNT, INV_COUNT, TRANSACTION_COUNT, CUSTOMER COUNT)