import React from "react";

export default class Table extends React.Component {
     constructor(props) {
          super(props)

          this.columns = this.props.columns || []
          this.rows = this.props.rows || []

          this.setColumns = this.setColumns.bind(this)
          this.addRow = this.addRow.bind(this)
     }

     //columnInfo = [ID, Name, Type, Price]
     setColumns(columnInfo) {
          if (typeof columnInfo != 'object') return

          this.columns = columnInfo
     }
     
     rowInfo = {
          css: "", 
          columns: [
               {css: "", html: (<div></div>)}, 
               {css: "", html: (<div></div>)}, 
               {css: "", html: (<div></div>)}, 
               {css: "", html: (<div></div>)}
          ]
     }

     addRow(rowInfo) {
          if (rowInfo.columns.length != this.columns.length || typeof rowInfo != 'object') return

          this.rows.push(rowInfo)
     }

     render() {
          return (
               <table className={"tbl " + (this.props.className || "")}>
                    <tr>
                         {
                              this.columns.map((col, i) => {
                                   return (
                                        <th key={i}>{col}</th>
                                   )
                              })
                         }
                    </tr>
                    {
                         this.rows.map((row, i) => {
                              return (
                                   <tr key={i} className={row.css}>
                                        {
                                             row.columns.map((rowCol, i) => {
                                                  return (
                                                       <td key={i} className={rowCol.css}>{rowCol.html}</td>
                                                  )
                                             })
                                        }
                                   </tr>
                              )
                         })
                    }
               </table>
          )
     }
}