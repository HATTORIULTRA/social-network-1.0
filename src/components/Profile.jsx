import React from 'react';
import cinema from "../assets/cinema.webp";

const Profile = () => {
   return (
      <main className='content'>
         <div>
            <img src={cinema} alt="cinema"/>
         </div>
         <div>ava + desc</div>
         <div>my posts
            <div>new post</div>
            <div>
               <div>post1</div>
               <div>post2</div>
            </div>
         </div>
      </main>
   );
};

export default Profile;