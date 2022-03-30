import React from 'react'

/*
 * Props:
 *   - class
 *   - type
 *   - pattern
 *   - searchFunc
 */

export default class SearchBox extends React.Component {
     constructor(props) {
          super(props)

          this.state = {
               searchValue: "",
          }
     }

     updateValue = e => {
          this.setState({
               searchValue: e.target.value
          })
     }

     getValue = () => {
          return this.state.searchValue
     }

     onKeyPress = e => {
          if (e.keyCode !== 13) return;
          if (!this.props.searchFunc) return;

          this.props.searchFunc();
     }

     render() {
          return (
               <div className={"search-box " + (this.props.className || "")}>
                    <input className={this.props.class || "search-input"} type={this.props.type || "text"} pattern={this.props.pattern || ""} placeholder="" onChange={this.updateValue} onKeyDown={this.onKeyPress}/>
                    <button className="search-button" onClick={this.props.searchFunc}><i className="fa fa-arrow-circle-o-right"></i></button>
               </div>
          )
     }
}