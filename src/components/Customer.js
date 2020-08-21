import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// Customer 컴포는터는 한명의 고객에 대한 정보를 출력한다.

class Customer extends React.Component{
//props는 기본적으로 React.Component가 갖고 있는 내용이다. 그러므로 props를 불러올때는
//{this.props.프롭스이름} 식으로 불러오면 된다. 불러온 props를 하위 컴포넌트에게 전달 할 수 있다.
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt='profile'/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.occupation}</TableCell>
            </TableRow>
        )
    };
}

//CustomerProfile 컴포넌트는 고객의 사진, 이름, 아이디를 담당한다
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    };
}

// CustomerInfo는 고객의 생일, 성별, 직업을 담당한다
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.occupation}</p>
            </div>
        )
    };
}

export default Customer