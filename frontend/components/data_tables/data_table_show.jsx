import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SideBar from '../navbar/side_bar';
import {values} from 'lodash';
import NavBarContainer from '../navbar/navbar_container';

class DataTableShow extends React.Component{
  componentDidMount(){
    this.props.fetchOneDataTable(this.props.match.params.datatableId);
  }
  render(){
    let display;
    if(this.props.dataTable.title){
      let data = [];
      let tablerows = values(this.props.dataTable.table);
      display = (
        <div className="DataTables">
          <label className="showtableTitle">{this.props.dataTable.title}</label>
          <table className="datatables_table_show">
            <thead className="tableshead">
              <tr >
                {Object.keys(this.props.dataTable.table[0]).map((tableitem, idx)=>
                <td className="th-padding" key={idx}>
                  {tableitem}
                </td>)}
              </tr>
            </thead>
            <tbody>
              {Object.values(this.props.dataTable.table).map((tablerow, idx)=>
              <tr key={idx} className={`tablesrow${idx%2}`}>
                {Object.keys(this.props.dataTable.table[0]).map((tableitem, index)=>
                <td className="th-padding" key={index}>
                  {tablerow[tableitem]}
                </td>)}
              </tr>)}
            </tbody>
          </table>
        </div>
      );
    }else{
      display=(
        <div></div>
      );
    }
    return (
      <div>
        <NavBarContainer />
        <div className="dataTables">
          <SideBar currentPage="data_tables_show"/>
          {display}
        </div>
      </div>

    );
  }
}

export default withRouter(DataTableShow);
