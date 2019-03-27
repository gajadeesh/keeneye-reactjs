import React from 'react'


const hHunsingle = ({headHunters}) => {

    const hHunterSInfor = headHunters.length ? (
        headHunters.map(hHunter => {
            return ( 
            <div className = "collection-item" key ={hHunter.id} >
                <span> 
                    {hHunter}
                </span>
                </div>
            )
        })
    ) : ( 
    <p className = "center" > No Head Hunders 's left</p>
    )

    return ( 
        <div className = "todos collection" > 
            {hHunterSInfor} 
        </div>
    )

}

export default hHunsingle