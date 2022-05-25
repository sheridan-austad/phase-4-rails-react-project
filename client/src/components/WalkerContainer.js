import React, { useEffect, useState } from 'react'
import WalkerList from './WalkerList'

const WalkerContainer = () => {
  const [walkers, setWalkers] = useState([]);

  console.log("WALKER CONTAINER")

  useEffect(() => {
    fetch("/api/walkers").then((r) => r.json()).then(walkers => setWalkers(walkers))
    console.log("Walkers")
    console.log(walkers)

  }, []);


  return (
    <div>
      <WalkerList walkers={walkers} />
    </div>
  )
}

export default WalkerContainer

// Walker container - fetch and pass list to walker list
