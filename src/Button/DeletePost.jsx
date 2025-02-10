import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DeletePost = ({userId}) => {
  const deletePost = async (id)=>{
    await axios.delete(`http://localhost:3000/users/${id}`,
       {method: "DELETE"}
     )
  } 
  const queryClient = useQueryClient();
  const id = useParams();

   const mutation = useMutation({
     mutationFn: deletePost,
     onSuccess: ()=> {
      queryClient.invalidateQueries({ queryKey: ["users"] });
     }
   })

   const handleDelete=()=>{
  mutation.mutate(userId)
   }
  return (


    <div>
        <button className='bg-green-500 px-4 py-2 rounded-xl' type='submit' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeletePost;