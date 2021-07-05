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
               curTemplate: "dashboard"
          }

          this.changeTemplate = this.changeTemplate.bind(this);
     }

     loadTemplate() {
          switch (this.state.curTemplate) {
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
          console.log("Ran the change")
          this.setState({ curTemplate: template })
     }

     render() {
          return (
               <div className="main-container">
                    <Navigation navFunc={this.changeTemplate}/>

                    {this.loadTemplate()}
               </div>
          )
     }
}