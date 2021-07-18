import React from "react";

/**
 * rowInfo = {
 *         css: "", 
 *         columns: [
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}
 *         ]
 *    }
 * 
 *   props
 *        - className
 *        - rowFWrapperHTML
 *        - rowBWrapperHTML
 *        - headerFWrapperHTML
 *        - headerBWrapperHTML
 */

export default class Table extends React.Component {
     constructor(props) {
          super(props)

          this.state = {
               columns: this.props.columns || [],
               rows: this.props.rows || []
          }
     }
     
     setColumns = (columnInfo) => {
          if (typeof columnInfo != 'object') return

          this.setState({columns: columnInfo})
     }

     addRow = (rowInfo) => {
          if (rowInfo.length) this.setState({rows: [...this.state.rows, ...rowInfo]})
          else this.setState({rows: [...this.state.rows, rowInfo]})
     }

     render() {
          return (
               <table className={"tbl " + (this.props.className || "")}>
                    <thead>
                         <tr>
                              {
                                   this.state.columns.map((col, i) => {
                                        return (
                                             <th key={i}>{(this.props.headerFWrapperHTML || null)}{col}{(this.props.headerBWrapperHTML || null)}</th>
                                        )
                                   })
                              }
                         </tr>
                    </thead>
                    <tbody>
                         {
                              this.state.rows.map((row, i) => {
                                   return (
                                        <tr key={i} className={row.css}>
                                             {
                                                  row.columns.map((rowCol, i) => {
                                                       return (
                                                            <td key={i} className={(rowCol.css || null)}>{(this.props.rowFWrapperHTML || "")}{rowCol.html || ""}{(this.props.rowBWrapperHTML || null)}</td>
                                                       )
                                                  })
                                             }
                                        </tr>
                                   )
                              })
                         }
                    </tbody>
               </table>
          )
     }
}