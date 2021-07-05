// https://icons8.com/license
// Icon License: Free aslong as given credit : 

import Navigation from '@Nav/main.js'
import React from 'react'

import Dashboard from '@Templates/dashboard'

export default class App extends React.Component {
     constructor (props) {
          super(props)

          this.curTemplate = "dashboard"
     }

     loadTemplate() {
          switch (this.curTemplate) {
               case 'dashboard': 
                    return (
                         <Dashboard />
                    )
                    break;
          }
     }

     changeTemplate() {

     }

     render() {
          return (
               <div className="main-container">
                    <Navigation />

                    {this.loadTemplate()}
               </div>
          )
     }
}