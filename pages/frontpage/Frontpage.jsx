import React from 'react'
import { News } from '../../components/News/News'
import { Signup } from '../../components/Signup/Signup'
import { Slider } from '../../components/Slider/Slider'

export function FrontPage(){

    return (
        <>  
            <Slider/>
            <News/>
            <Signup/>
        </>
    )
}