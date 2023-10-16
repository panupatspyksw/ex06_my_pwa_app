import React from 'react'

const Card = ({ name, email, id }) => {
    let normal = `https://robohash.org/${id}?size=300x300`
    let small = `https://robohash.org/${id}?size=300x300`
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img
                alt='robots'
                width='200px'
                height='200px'
                srcSet={`${normal} 480w, ${small} 1080w`}
                src={normal}
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
