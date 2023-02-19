//import { Component } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({monsters}) => (
  <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />
      })}
  </div>
);

// Another form of the same function
// const CardList = (props) =>{
//   const {monsters} = props;

//   return(
//     <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />
//         })}
//     </div>
//   );
// }


// class CardList extends Component {  
//   render() {
//     const { monsters } = this.props;
    
//     return(
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />
//         })
//       }
//     </div>)
//   }
// } 

export default CardList;