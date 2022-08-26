import React, {useEffect, useState} from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    const getUsers = async () =>{
      const usersCollectionRef = collection(db, 'users');
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  }, [])
 
  return (
    <div classame='App'>
      {users.map((user)=>{
        return(
          <div>
            {" "}
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App;