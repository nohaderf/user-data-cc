import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch(`https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo`)
    .then(r => r.json())
    .then(resultsObj => setUsers(resultsObj.results))
  }, [])

  const userRow = users.map(user => {
    return <UserRow key={user.id} user={user} />
  })

  return (
    <div className="users-table-div">
      <h1>User Data Table</h1>
      <table className="users-table">
          <tbody>
              <tr>
                  <th className="standings-header">First Name</th>
                  <th className="standings-header">Last Name</th>
                  <th className="standings-header">Date of Birth</th>
                  <th className="standings-header">State</th> 
                  <th className="standings-header">Country</th>   
              </tr>
              {userRow}
          </tbody>
      </table>
    </div>
  );
}

export default App;