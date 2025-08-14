import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UserDetail(){
    const {id} = useParams();
    const [user,setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>setUser(res.data))
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res=>setPosts(res.data))
        
    },[id])

    if(!user) return <p>Loading...</p>

    return (
        <>
            <h2>{user.name}</h2>
            <h3>@{user.username}</h3>
            <p>{user.email}</p>

            <h4>Posts</h4>
            {posts.map(p=>(
                <div key = {user.id}>
                    <h5>{p.title}</h5>
                    <p>{p.body}</p>
                </div>
            ))}
        </>
    )
}
export default UserDetail;