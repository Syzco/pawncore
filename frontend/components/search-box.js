import React from 'react'

export default class SearchBox extends React.Component {
     constructor(props) {
          super(props)
     }

     getSearchValue() {
          return
     }

     render() {
          return (
               <input className={this.props.class || "search-box"} type={this.props.type || "text"} pattern={this.props.pattern || ""} placeholder=""/>
          )
     }
}