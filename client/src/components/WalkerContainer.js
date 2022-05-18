import React from 'react'

const WalkerContainer = () => {
    fetch("/api/walkers").then((r) => r.json()).then(walkers => console.log(walkers))
  return (
    <div>I want to grab the walkers and put them here</div>
  )
}

export default WalkerContainer

// Walker container - fetch and pass list to walker list
