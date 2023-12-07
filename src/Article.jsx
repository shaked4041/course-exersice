import React from 'react'

export default function Article(props) {
  return (
    <div>
         <div id="article">
            <div className='card'>
        <div> <img className="coverImage" src={props.coverImage}/></div>
        <div className='date'>{props.date}</div>
        <div className='title'>{props.title}</div>
        <div className='intro'> {props.intro.slice(0,200)}</div>
        {/* <a {props.link}/> */}
        </div>
    </div>
    </div>
  )
}
