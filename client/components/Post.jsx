import React from 'react'

const Post = ({title, created, thumbnail}) => {
 let date = convertEpochToDateString(created)
  return (
  <div><h2>{title}</h2> <br>
  </br> Date: {date} <br>
  </br> <img src={thumbnail}/></div>
)
}

const convertEpochToDateString = (epoch) => {
  return (new Date(epoch * 1000)).toString()
}

export default Post
