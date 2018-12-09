import React, { useEffect } from 'react'
import { Button } from 'antd'
import { Prompt } from 'react-router-dom'

export default ({props}) => {

    useEffect(() => {
        console.log(props)
    })

    return (
        <div>
            <Button type='primary'>Home</Button>
        </div>
    )
}
