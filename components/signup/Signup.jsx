import React, { useEffect, useState } from 'react'
import { doFetch } from '../../helpers/fetch'
import Style from './signup.module.scss'

export function Signup(){

    const [mail, setMail] = useState("")
    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        let timer = setTimeout(() => {
            setFeedback("")
        }, 4000)
        return (() => clearTimeout(timer))
        },[feedback])

    const sendMail = async (e) => {
        e.preventDefault()

        let formData = new URLSearchParams()
        formData.append('email', mail)
        let url = 'https://api.mediehuset.net/bakeonline/newsletter';
        let res = await doFetch(url, 'POST', formData)

        if (res.error !== ""){
            setFeedback("Du er allerede tilmeldt vores nyhedsbrev")
        }
        else {
            setFeedback("Tak. Du er nu tilmeldt vores nyhedsbrev")
        }
        console.log(res)
    }

    return (
        <section className={Style.signUp}>
            <div>
            <h2>Tilmeld dig vores nyhedsbrev</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odit.</p>
        
            <form onSubmit={(e)=>{sendMail(e)}}>
                <input onChange={(e)=>{setMail(e.target.value)}} value={mail} placeholder="indtast din mail"></input>
                <button>TILMELD</button>
            </form>
                <p>{feedback}</p>
            </div>
        </section>
    )
}