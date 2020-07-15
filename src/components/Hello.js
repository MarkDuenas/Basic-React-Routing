import React from 'react'

const Hello = (props) => {
    return (
        <div>
            {
                isNaN(props.wordOrNum) ?
                    <h1> The Word is: {props.wordOrNum}</h1>
                    :
                    <h1> The Number is: {props.wordOrNum}</h1>
                
            }
        </div>
    )
}

export default Hello
