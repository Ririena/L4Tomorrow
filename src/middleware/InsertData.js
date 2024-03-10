import {getUserByEmail, getUserFromTable} from "../libs/UserLibs.jsx"
import {useState, useEffect} from 'react'

export const mustInsert() {
  const [userData, setUserData] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  useEffect(() => {
   async function getData() {
    try {
      const user = await getUserByEmail()

      const userDataFromTable = await getUserFromTable(user.email)

      if(error) {
        console.error(error.message)
      }
    } catch(error){
      console.error(error.message)
    }
   } 
getData()
  },[]
  ) 