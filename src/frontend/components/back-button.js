import React from "react"

export default class BackButton extends React.Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <button className={"back-button " + (this.props.className || "")} onClick={this.props.func}>
                    <i className="fa fa-arrow-circle-left"></i>
               </button>
          )
     }
}