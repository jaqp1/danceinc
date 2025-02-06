import React from 'react'
import {Col} from 'react-bootstrap'

export default function Card({title,description,imgUrl}) {
  return (
    <Col sm={6} md={4}>
        <div className="real-imgbx">
            <img src={imgUrl}/>
            <div className="real-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}
