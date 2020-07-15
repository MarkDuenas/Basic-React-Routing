import React from 'react'

const HellWithBg = (props) => {
    return (
        <div>
            <h1 style ={{ background: props.bg, color: props.color }}>The word is: { props.word } </h1>
        </div>
    )
}

export default HellWithBg
