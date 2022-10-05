import React from 'react'
import { GreetProps } from './Greet.type'

export const Greet = (props: GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "Prateek"}</div>
  )
}
