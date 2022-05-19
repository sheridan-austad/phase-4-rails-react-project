// import { useContext } from "react";
import WalkerCard from './WalkerCard';
// import { UserContext } from "./User";

const WalkerList = ({walkers}) => {
   console.log(walkers)
  return (
    <div>
      <h1>Please Choose a Walker</h1>
        <div className='wrapper'>
        {walkers.map((walker) => (<WalkerCard key={walker.id}{...walker}/>))
          }
        </div>
    </div>
  )
}

export default WalkerList
// walker profile/card - displays everything