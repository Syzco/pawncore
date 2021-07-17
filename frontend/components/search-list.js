import React from "react";
import SearchBox from "./search-box";
import Table from './table/main';

export default class SearchListTemplate extends React.Component {
     constructor(props) {
          super(props)
          
          this.search = React.createRef()
          this.table = React.createRef()
          
          this.searchFunc = () => {}
     }

     componentDidMount() {
          this.table.current.setColumns(["Inventory Number", "Product", "Type", "Amount"])
     }  

     //Search
     setSearchFunc = (func) => {
          this.searchFunc = func
     }

     renderSearchSection = (className) => {
          return (
               <div className={"search-section" + className || ""}>
                    <SearchBox ref={this.search} searchFunc={this.searchFunc} />
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
                    <Table ref={this.table} className="list-table" />
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