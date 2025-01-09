import React from 'react';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import ScheduleMedia from './Components/ScheduleMedia/ScheduleMedia';
import Manage from './Components/ManageAcc/Manage';
import MaintainSchedule from './Components/MaintainSchedule/MaintainSchedule';
import FollowerGrowth from './Components/FollowerGrowth/FollowerGrowth';
import CreatePost from './Components/CreatePost/CreatePost';
import ControlAi from './Components/ContentAI/ControlAI';
import AudiencePage from './Components/AudienceGrow/AudienceGrowth';

function App() {

  return (
    <>
    <div className='container'>
      <CreatePost/>
      <SocialMedia/>
      <ScheduleMedia/>
      <ControlAi/>
      <Manage/>
      <MaintainSchedule/>
      <FollowerGrowth/>
      <AudiencePage/>
    </div>
   
    </>
  )
}

export default App
