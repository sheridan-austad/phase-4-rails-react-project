import WalkerCard from './WalkerCard';

const WalkerList = ({walkers}) => {
   console.log(walkers)
   return (
     <div>
      {/* returning the words */}
      <h1>Please Choose a Walker</h1>
      {/* mapping through the walkers to display the walker card */}
        <div className='wrapper'>
        {walkers.map((walker) => (<WalkerCard key={walker.id}{...walker}/>))
          }
        </div>
    </div>
  )
}

export default WalkerList