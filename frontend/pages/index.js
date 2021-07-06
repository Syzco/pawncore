// https://icons8.com/license
// Icon License: Free aslong as given credit : 

import Navigation from '@Nav/main.js'
import React from 'react'

import Dashboard from '@Templates/dashboard'
import Customer from '@Templates/customer'

export default class App extends React.Component {
     constructor (props) {
          super(props)

          this.state = {
               theme: {
                    current: "dashboard"
               },
               session: {
                    customer: "",
                    transaction: ""
               }
          }

          this.changeTemplate = this.changeTemplate.bind(this);
     }

     /*
      * Template Handling
      */
     loadTemplate(props) {
          switch (this.state.theme.current) {
               case 'dashboard': 
                    return (
                         <Dashboard />
                    )
                    break;
               case 'customer':
                    return (
                         <Customer />
                    )
                    break;
          }
     }
     changeTemplate(template) {
          this.setState({ theme: { current: template }})
     }


     //Render the content.
     render() {
          return (
               <div className="main-container">
                    <Navigation navFunc={this.changeTemplate}/>

                    {this.loadTemplate()}
               </div>
          )
     }
}