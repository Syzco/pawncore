import React from "react";
import SearchBox from "./search-box";
import Table from './table/main';

export default class SearchListTemplate extends React.Component {
     constructor(props) {
          super(props)
          
          this.search = React.createRef()
          this.table = React.createRef()
          
          this.searchFunc = this.props.searchFunc

          this.state = {
               buttons: this.props.buttons || []
          }
     }

     componentDidMount() {
          this.table.current.setColumns(["Inventory Number", "Product", "Type", "Amount"])
     }  

     //Search
     setSearchFunc = (func) => {
          this.searchFunc = func
     }

     getSearchValue = () => {
          return this.search.current.getValue()
     }

     addButton = (btn) => {
          if (btn.length) this.setState({buttons: [...this.state.buttons, ...btn]})
          else this.setState({buttons: [...this.state.buttons, btn]})
     }

     renderSearchSection = (className) => {
          return (
               <div className={"search-section" + (className || "")}>
                    <SearchBox ref={this.search} searchFunc={this.searchFunc} />
                    {
                         this.state.buttons.map((v, i) => {
                              return (
                                   <button className={"search-section-button" + (v.className || "")} onClick={v.func} key={i}>{v.name}</button>
                              )
                         })
                    }
               </div>
          )
     }

     //List
     addListItem = (listItem) => {
          this.table.current.addRow(listItem)
     }
     
     renderListSection = (className) => {
          return (
               <div className={"list-section" + (className || "")}>
                    <Table ref={this.table} className="list-table" rows={this.props.rows || null}/>
               </div>
          )
     }

     render() {
          return (
               <div className={"search-list" + (this.props.class || "")}>
                    {(this.props.searchSection) ? this.props.searchSection() : this.renderSearchSection()}
                    <div className="search-list-split"/>
                    {(this.props.listSection) ? this.props.listSection() : this.renderListSection()}
               </div>
          )
     }
}