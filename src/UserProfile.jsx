import { useState } from "react"

const UserProfile = ({userProfileObj}) => {
  const [viewProfile, setViewProfile] = useState(false)
  const {username, imageUrl, bio, location} = userProfileObj
  return (
    <div>
    <h2>User Profile</h2>
      <p><strong>Username: </strong>{username}</p>
      {
        viewProfile ? (
          <>
          <img src={imageUrl} alt="image"/>
            <p><strong>Bio: </strong>{bio}</p>
            <p><strong>Location: </strong>{location}</p>

          </>
        ) : (
          <button onClick={()=> setViewProfile(true)}>View Profile</button>
        )
      }
    </div>
  )
}

export default UserProfile