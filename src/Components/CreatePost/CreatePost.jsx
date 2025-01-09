import React from 'react'
import { Button } from 'antd';
import { StarFilled } from '@ant-design/icons';

const CreatePost = () => {
  return (
    <>

      <div className="card div1">
            <h1>Create and <br/> schedule <br/>content<br/><span className="quick">quicker</span >.</h1>
            <button className="post">Create Post <StarFilled/><i></i></button>
        </div>

    </>
  )
}

export default CreatePost;