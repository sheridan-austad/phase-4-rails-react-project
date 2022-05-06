import React from 'react'

function OwnerCard({user}) {
  return (
      <div>
        
        <div className="box"> Welcome {user.username}</div>
        <OwnerCard key={user.username} {...user}/>
    
    </div>
  )
}

export default OwnerCard