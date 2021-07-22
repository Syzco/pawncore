// https://icons8.com/license
// Icon License: Free aslong as given credit : 

import Navigation from '@Nav/main.js'
import React from 'react'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import axios from 'axios'

import Dashboard from '@Templates/dashboard'
import Customer from '@Templates/customer'
import Inventory from '@Templates/inventory'
import Ticket from '@Templates/tickets'
import Transaction from '@Templates/transaction'
import Error404 from '@Templates/error404'
import NewTicket from '@Templates/transaction/new_ticket'
import ItemSearch from '@Templates/transaction/item_search'

const DEFAULT_PAGE = "dashboard"
const TILL_ID = 1
const TILL_STARTING_AMOUNT = 10000
const SERVER_BASE_URL = "http://localhost:3003"

export default class App extends React.Component {
     constructor (props) {
          super(props)

          this.state = {
               page: {
                    current: DEFAULT_PAGE
               },
               session: {
                    till: {
                         id: TILL_ID,
                         amount: TILL_STARTING_AMOUNT
                    },
                    customer: null,
                    transaction: null
               }
          }

          this.updateMethods = {
               /*
               * Template Handling
               */
               changeTemplate: (template) => {
                    this.setState({ page: { current: template }})
                    localStorage.setItem("page", template)
               },

               /*
               * Transaction Handling
               */
               changeTransaction: (transaction) => {
                    this.setState({ session: { transaction: transaction } })
               },
               getTransaction: () => {
                    return this.state.session.transaction
               },

               /*
               * Customer Handling
               */
               changeCustomer: (customer) => {
                    this.setState({ session: { customer: customer } })
               },
               removeCustomer: (removeCustomer) => {
                    this.setState({ session: { customer: null } })
               },

               /*
               * Till Handling
               */
               adjustTill: (amt) => {
                    this.setState({ session: { till: { amount: (this.state.session.till.amount + amt) } } })
               },
               getTill: () => {
                    return this.state.session.till.id
               },
               getTillAmount: () => {
                    return this.state.session.till.amount
               }
          }
     }

     componentDidMount() {
          this.setState({page: {current: localStorage.getItem("page") || DEFAULT_PAGE}})
     }

     /*
      * Template Handling
      */
     loadTemplate = (props) => {
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
               case 'transaction':
                    return (
                         <Transaction {...props} />
                    )
                    break;
               case 'new-ticket':
                    return (
                         <NewTicket {...props} /> 
                    )
                    break;
               case 'item-search':
                    return (
                         <ItemSearch {...props} />
                    )
               default:
                    return (
                         <Error404 {...props} />
                    )
          }
     }
     

     //Render the content.
     render() {
          return (
               <SWRConfig value={
                    {
                         fetcher: (url) => axios.get(SERVER_BASE_URL + url).then(res => res.data)
                    }
               }>
                    <div className="main-container">
                         <Head>
                              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                         </Head>

                         <Navigation navFunc={this.updateMethods.changeTemplate} active={this.state.page.current} />

                         {this.loadTemplate({  session: this.state.session, update: this.updateMethods  })}
                    </div>
               </SWRConfig>
          )
     }
}

// TODO: GET SERVERSIDE PROPS FOR CONSTANT VALUES (TICKET_COUNT, INV_COUNT, TRANSACTION_COUNT, CUSTOMER COUNT)