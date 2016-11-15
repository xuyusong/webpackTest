'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

/*
 *  add by xuyusong  2016-11-05
 *  return one moudle of fix-data-table ，it's a table have three column
 *  function create a moudle to show the test of fix-data-table
 */
var ExampleApplication = React.createClass({
  render: function() {
     return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>王翠姣</Cell>}
          width={200}
        />
        <Column
            cell={<Cell>王苗</Cell>}
            width={200}
          />
       <Column
           cell={<Cell>陈瑞思傻瓜</Cell>}
           width={500}
          />
      </Table>
    );
  }
});
/*
 * add by xuyusong  2016-11-05
 * every react moudle muste contain this code ，it uses to create our view
 * fuction using to show our moudle
 * return null
 */
ReactDOM.render(
    <ExampleApplication  />,
    document.getElementById('container')
);

// the next test is not passed,should change some code by react gramer,please see https://github.com/facebook/react/
/*************************************************this is a beautiful divide line****************************************************************/
/*ReactDOM.render(
   <MyTable  />,
    document.getElementById('container')
);*/
/*class MyTable extends React.Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        // TODO: Add columns
        <Column
        cell={<Cell>Basic content</Cell>}
        width={200}
            />
            <Column
        cell={<Cell>Basic content</Cell>}
        width={200}
            />
      </Table>
    );
  }
}*/
/*var MyTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myTableData: [
                {name: 'Rylan'},
                {name: 'Amelia'},
                {name: 'Estevan'},
                {name: 'Florence'},
                {name: 'Tressa'},
            ],
        };
    }*/


/*class MyTable extends React.Component {
  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    );
  }
}

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={200}
        />
      </Table>
    );
  }
}


class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="name"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="email"
            />
          }
          width={200}
        />
      </Table>
    );
  }
}*/

