import React from 'react'

export default function Footer(props) {

    let { title, mode } = props;
    return (
        <>
            
            <div className={`text-center fixed-bottom footer`} ><hr/>{title}</div>
        </>
    )
}
