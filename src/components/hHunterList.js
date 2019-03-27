import React from 'react'
import { Modal, Button } from 'react-materialize'
import AddHeadhunter from './addHeadhunter'
import Calculator from './calculator'

const hHunsingle = ({headHunters}) => {
  //console.log(headHunters)
  const trigger = <Button>Add Head Hunter</Button>;
  const view = <Button>view</Button>
  const hHunterSInfor = headHunters.length ? (
    headHunters.map(hHunter => {
      return ( 
        <div className = "collection-item" key = {hHunter.id} >
         <div class = "row">
            < div class = "col s24" > 
              <h1>{hHunter.name} </h1> 
            </div>
           </div>
           <div class="row">
             <div class = "col s24" > {hHunter.description} </div>  
           </div>
          <Modal header="Head Hunter" hide-footer="true" trigger={view}>
            <h1>{hHunter.name} </h1> 
            <Calculator/>
          </Modal>
        </div>

        
      )
    })
  ) : ( 
    <p className = "center" > No Head Hunders 's left</p>
  )

  return ( 
    <div className = "todos collection" > 
      
      <Modal header="Add Head Hunter" hide-footer="true" trigger={trigger}>
        <AddHeadhunter />
        
      </Modal>
      <h1 className="center blue-text">Head Hunter List</h1>
      {hHunterSInfor}
    </div>
  )

}

export default hHunsingle