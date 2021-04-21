import React from 'react'


export default function Item({title, year, rating, released, runtime}){

  
  return(
    <div>
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <p>Date Release: {released}</p>
      <p>Runtime: {runtime}</p>
    </div>
  )
}