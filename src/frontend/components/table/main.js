import React from "react";

/**
 * rowInfo = {
 *         id: 1
 *         css: "", 
 *         columns: [
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}, 
 *              {css: "", html: (<div></div>)}
 *         ]
 *    }
 * columnInfo = [
 *        {css: "", html: ""}
 * ]
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

     rowClickFunc = (e) => {
          return;
     }

     render() {
          return ( 
               <div className="scroll-table">
                    <table className={"tbl " + (this.props.className || "")}>
                         <thead>
                              <tr>
                                   {
                                        this.state.columns.map((col, i) => {
                                             return (
                                                  <th key={i} className={(col.css || "")}>{(this.props.headerFWrapperHTML || null)}{col.html}{(this.props.headerBWrapperHTML || null)}</th>
                                             )
                                        })
                                   }
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   this.state.rows.map((row, i) => {
                                        return (
                                             <tr key={i} className={row.css + ((this.props.clickable) ? " clickable" : "") + ((this.props.selected == row.id) ? " selected" : "")} onClick={this.rowClickFunc} data-id={row.id}>
                                                  {
                                                       row.columns.map((rowCol, i) => {
                                                            return (
                                                                 <td key={i} className={(rowCol.css || "")}>{(this.props.rowFWrapperHTML || "")}{rowCol.html || ""}{(this.props.rowBWrapperHTML || null)}</td>
                                                            )
                                                       })
                                                  }
                                             </tr>
                                        )
                                   })
                              }
                         </tbody>
                    </table>
               </div>
          )
     }
}