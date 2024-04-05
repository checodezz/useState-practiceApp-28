import { useState } from "react";

const UserInfo = ({ username, email, age }) => {
  const [details, setDetails] = useState(false);

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Username:</strong>
        {username}
      </p>
      {
        details ? (
          <>
          <p><strong>Email: </strong>{email}</p>
            <p><strong>Age: </strong>{age}</p>
          </>
        ) : (
          <button onClick={()=>setDetails(true)}>See Profile</button>
        )
      }
    
    </div>
  );
};

export default UserInfo