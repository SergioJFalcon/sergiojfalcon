import React, { Component } from "react";
import MaterialTable, { MTableToolbar } from "material-table";

var columns = [
  { title: "ID", field: "ID" },
  { title: "Category", field: "Category" },
  { title: "Views", field: "Views" },
  { title: "Claps", field: "Claps" }
];

var data = [
  {
    ID: "1",
    Category: "Technology",
    Views: "200",
    Claps: "5"
  },
  {
    ID: "2",
    Category: "Technology",
    Views: "300",
    Claps: "20"
  },
  {
    ID: "3",
    Category: "Music",
    Views: "100",
    Claps: "30"
  },
  {
    ID: "4",
    Category: "Music",
    Views: "50",
    Claps: "2"
  },
  {
    ID: "5",
    Category: "Art",
    Views: "500",
    Claps: "100"
  }
];

export default class TableExample extends Component {
  render() {
    return (
        <MaterialTable
          title={"Material Table"}
          options={{
            grouping: true,
            dense: true,
            //filtering: true,
            exportButton: true
          }}
          components={{
            Toolbar: props => <MTableToolbar {...props} />
          }}
          columns={columns}
          data={data}
        />
    );
  }
}