import {TextField, Button} from "@mui/material"
import {useState} from "react"
import axios from "axios"



const Createpost = () => {

    const [post, setPost] = useState("")


const addPost = () => {
    axios.post("http://localhost:4000/createpost", {

        post: post
    }).then((res) => {

        setPost("")
       console.log(res)
    

    }).catch((err) => {
        console.log(err)
        if(err.response.status === 401) {
            return alert("Login to create post")
        }
        alert(err.response.data[0].message)
    })
}
    return (
        <div className="w-full flex flex-col items-center">



  <TextField 
    onChange={e => setPost(e.target.value)}
    value={post}


  className="w-[200px] mt-2"
  variant="outlined" label="Post"/>
  <br/>
  <Button
  onClick={addPost}
  style={{backgroundColor: "#1877f2"}}
  className=" text-white w-[200px] mt-2"
  >Create Post</Button>
        </div>
    )
}

export default Createpost