import React from 'react'

interface Props {
    title: string
    desc: string
}

export default function serviceCard(props: Props) {
  const {title, desc} = props
  return (
    <div className='serviceCard'>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
