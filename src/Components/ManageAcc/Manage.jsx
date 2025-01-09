import React from 'react'
import { InstagramFilled ,TwitchOutlined, TwitterOutlined} from '@ant-design/icons';

const Manage = () => {
  return (
    <>
      
      <div className="card card5 div5">
            <div className="accounts">
                <div className="account">
                    <InstagramFilled/>
                    <div className="text">
                        <p>@YourCo</p>
                        <p>12k Followers</p>
                    </div>
                </div>
                <div className="account">
                    <TwitterOutlined/>
                    <div className="text">
                        <p>@YourCo</p>
                        <p>12k Followers</p>
                    </div>
                </div>
            </div>
            <h1>Manage <br/>multiple <br/>accounts and <br/> platforms.</h1>
        </div>
    </>
  )
}

export default Manage;