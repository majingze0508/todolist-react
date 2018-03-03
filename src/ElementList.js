import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';

const DataList = ({datas, handleItemClick}) => (
  <List>
  {datas.map((data, index) => <ListItem primaryText={data} key={index} onClick={handleItemClick}/>)}
  </List>
);

export class ElementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      datas: []
    }
  }

  onChange = (event) => {
    this.setState({currentValue: event.target.value})
  }

  onAdd = () => {
    this.setState({
      currentValue: '',
      datas: [...this.state.datas, this.state.currentValue]
    })
  }

  onDelete = () => {
    if(this.state.currentValue) {
      let arrayTem = this.state.datas;
      let index = arrayTem.indexOf(this.state.currentValue);
      arrayTem.splice(index, 1);
      this.setState({
        currentValue: '',
        datas: arrayTem})
    }
  }

  handleItemClick = (event) => {
    let val = event.target.innerHTML
    val = val.replace("<div>", "");
    val = val.replace("</div>", "");
    this.setState({currentValue: val})
  }

  render() {
    return (
      <div className="data-area">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="dataHandle">
            <TextField hintText="Please input a value" value={this.state.currentValue} onChange={this.onChange} />
            <RaisedButton label="Add" primary={true} onClick={() => this.onAdd()} />
            <RaisedButton label="Delete" secondary={true} onClick={() => this.onDelete()} />
            <DataList datas={this.state.datas} handleItemClick={this.handleItemClick}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default ElementList;
