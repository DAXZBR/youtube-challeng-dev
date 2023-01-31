import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import Video from './videos/bora tomá uma - vídeo original - sid dançando qualidade 4K 😎👍-uX2R6IRqIqo.mp4'
import { RxGear } from 'react-icons/rx'
import { BsFillSkipEndFill } from 'react-icons/bs'
import { BiFullscreen, BiPlay, BiPause } from 'react-icons/bi'
import { FiVolume2 } from 'react-icons/fi'
import { TbRectangle } from 'react-icons/tb'

import thumbnail from './assets/maxresdefault.jpg'

const videoUrl = "https://youtu.be/FcI0KyiNrqQ"

type VideoDisplayWrapperProps = {
  primary?: boolean;
}

type VideosYoutube = {
  id: number,
  videoTitle: string,
  channelName: string,
  thumbnail: string,
  verified: boolean,
  isVideoNew: boolean,
  viewsAmount: number,
  durationVideo: string,
  lauchendVideoData: number
}

const dataVideos = [
  { 
    id: 1,
    videoTitle: 'Bora tomar uma',
    channelName: 'Fatos Desconhecidos',
    thumbnail: '',
    verified: true,
    isNew: true,
    viewsAmount: 90,
    durationVideo: '20:20',
    lauchendVideoData: 2
  },
  { 
    id: 2,
    videoTitle: 'Bora tomar duas o retorno',
    channelName: 'Fatos Desconhecidos',
    thumbnail: '',
    verified: true,
    isNew: true,
    viewsAmount: 90,
    durationVideo: '20:20',
    lauchendVideoData: 2
  }
]

export const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '75%', minHeight: '100vh' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', backgroundColor: 'pink', width: "inherite", height: '75vh'}}>
          <h2>Video Here</h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor: 'orange', width: "inherite", height: '25vh' }}>
          <h2 style={{display:'inline', color: '#fff', fontWeight:'bold'}}>Homem aranha de volta pra cachaça</h2>
          <div style={{width:'100%', height: '100px', backgroundColor: 'blue', borderRadius:'10px', padding: '6px'}}>
            teste 
          </div>           
        </div>
      </div>
      <div style={{ backgroundColor: 'green', minWidth: '25%', minHeight: '100vh' }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: 'inherite', height:'50px', backgroundColor: 'red'}}>
          <h2>Filter Buttons</h2> 
        </div>
        <div style={{}}>
          
            {
              dataVideos.map((elements) => (
                <div style={{display:'flex', width: '313px', height:'100px', backgroundColor: 'purple'}} key={elements.id} >
                  <div style={{width: '50%', backgroundColor: 'gray'}}>
                    <img src={elements.thumbnail} alt={elements.videoTitle} />                  
                  </div>
                  <div style={{width: '50%', backgroundColor:'blue'}}>
                    <div>
                      <h2>{elements.videoTitle}</h2>
                    </div>
                    <div>
                      <p>{elements.channelName} { elements.verified && <span>Verified</span> }</p>
                      <p>{elements.viewsAmount} mil visualizações - há {elements.lauchendVideoData} dias</p>
                      <span>{elements.isNew && <p>Novo</p>}</span>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}
