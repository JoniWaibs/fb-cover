import React from 'react'
import { StoriesContainer } from './styles'
import Story from './Story'


const StoryReel = () => {
  return (
    <StoriesContainer>
      <Story
        title="Peter Franklin"
        userAvatar="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4246865.jpg"
        coverImage="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      <Story
        title="Ryan Ray"
        userAvatar="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg"
        coverImage="https://images-na.ssl-images-amazon.com/images/I/41ATvBtWL0L.jpg"
        />
      <Story
        title="Jessie James"
        userAvatar="https://thumbs.dreamstime.com/b/portrait-beautiful-nice-person-good-mood-arm-chin-looking-empty-space-teal-sweater-isolated-pink-color-background-204807562.jpg"
        coverImage="https://images.unsplash.com/photo-1549937915-3dd443a3583f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      />
      <Story
        title="Marie Douglas"
        userAvatar="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
        coverImage="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Story
         title="Brian Jhonson"
         userAvatar="https://miro.medium.com/max/4242/1*k-B13-IWqjtFx09A9LKTkg.jpeg"
         coverImage="https://images.unsplash.com/photo-1607152571560-ac7611d9abfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      <Story
         title="Freddy Gregory"
         userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa838jqoj90H3aupjQZgaMikxrmoKwCoLJETeTteAG1tq8npdK3w_aXl9WWNKN-KzT4g&usqp=CAU"
         coverImage="https://p0.piqsels.com/preview/636/250/478/assorted-colored-umbrella-decor-at-daytime.jpg"
      />
    </StoriesContainer>
  )
}

export default StoryReel
