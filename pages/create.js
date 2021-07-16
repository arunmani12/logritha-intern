import React from 'react'
import Create from '../components/createAccount/CreateAccount'
import { useRouter } from 'next/router';


export default function Createa() {


    const router = useRouter()
    const onAddHandler = async(Data) => {  
     const response = await fetch('/api/create',{
       method:'POST',
       body:JSON.stringify(Data),
       headers:{
         'content-Type':'application/json'
       }
     })
     const data = response.json();
     console.log(data)
     router.push('/')
    }

    return (
        <>
            <Create onAddMeetup={onAddHandler}/>
        </>
    )
}
