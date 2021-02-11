import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getAuthData, postAuthData, deleteAuthData } from '../../helpers/fetch'
import { Comment } from './Comment'
import { AppContext } from "../../context/ContextProvider"
import Style from './comments.module.scss'

export function CommentSection () {

    const { loginData } = useContext(AppContext)
    
    
    let { productId } = useParams()

    
    let [commentArr, setCommentArr] = useState()
    let [comment, setComment] = useState('')
    let [title, setTitle] = useState('')
    
    let username = loginData.username
    
   
    const getComments = async () => {
        
        let key = loginData.access_token
       
        let url = `https://api.mediehuset.net/bakeonline/comments/${productId}`
        
        let res = await getAuthData(url, key)
        console.log(res)
        setCommentArr(res)
    }
    
    
    useEffect(() => {   
        if (username && !commentArr){
            getComments()
        }
        return null
    })

    
    const sendComment = async (e) => {

        if (comment.length > 0 && title.length  > 0){
            e.preventDefault()
            
            let url= `https://api.mediehuset.net/bakeonline/comments`
            
            let formData = new FormData()
            
            let key = loginData.access_token
            formData.append('title', title)
            formData.append('comment', comment)
            formData.append('user_id', loginData.user_id)
            formData.append('product_id', productId)
            formData.append('active', 'true')

            let res = await postAuthData(url, key, formData)
            console.log(res)
            setTitle('')
            setComment('')
            getComments()
        }

            else {
                e.preventDefault()
            }
        }
        
    
    const deleteComment = async (id) => {
        
        let key = loginData.access_token
        
        let url = `https://api.mediehuset.net/bakeonline/comments/${id}`
        
        let res = await deleteAuthData(url, key)
        console.log(res)
        getComments()
        }

      
    return (
        loginData.username ? 
        <>
        <section className={Style.commentInput}>

            <div>
                <h3>kommentar</h3>
            </div>

            <form>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Titel"></input>
                <input type='text' value={comment} onChange={(e) => {setComment(e.target.value)}} placeholder="fortæl os hvad du syntes.."></input>
                <button onClick={(e) => sendComment(e)}>Indsæt</button>
            </form>

        </section>

        {commentArr && commentArr.items && commentArr.items.slice(0).reverse().map((item, i ) => {
            return <Comment username={loginData.username} delete={deleteComment} key={i} comment={item}/>
        })}
        </>   
        :

        <h3>Du skal logge ind for at kunne kommentere</h3>
    )
}