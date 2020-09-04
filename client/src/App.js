import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {withStyles} from '@material-ui/core/styles'; //CSS를 사용하기위해 불러와야하는 라이브러리
import Paper from '@material-ui/core/Paper';


const styles = theme =>({
  root:{
    witdh: '100%',
    marginTop:theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

// 하위 컴포넌트에게 props로 전달할 정보
const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'John Smith',
  'birthday':'990706',
  'gender':'Male',
  'occupation':'Student'
},{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'Amy Jane',
  'birthday':'000101',
  'gender':'Female',
  'occupation':'Receptionist'
},{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'Neil Armstrong',
  'birthday':'881225',
  'gender':'Male',
  'occupation':'Developer'
}]

class App extends Component{
  render(){
    const {classes} = this.props; //위에서 정의한 style을 적용시킬 수 있도록 하는 변수
    // 자바스크립트는 map이라는 함수를 제공한다
    // customers 배열에 각 원소를 c로 접근하여 해당 원소마다 컴포넌트를 return하자.
    // map을 사용할때는 각 element를 구분하기위해 컴포넌트에 key라는 속성(prop)을 넣어주어야 한다.
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id(#)</TableCell>
              <TableCell>photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Occupation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return(<Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  occupation={c.occupation}
                />);
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  };
}

export default withStyles(styles)(App); //wirthStyles를 적용한 상태로 내보내기