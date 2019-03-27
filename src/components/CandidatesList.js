import React from 'react'
import { Modal, Button} from 'react-materialize'
import AddCandidate from './addCandidate'

const CandidateList = ({candidateList}) =>{
    const trigger = <Button>Add Candidate</Button>;
    // const handleSearch = candidateList.map(search => {
    //     console.log(search)

    // })
    //const aCandidate = <addCandidate/>
    const CandidateListInfo = candidateList.length ? (
        candidateList.map(candidate => {
            return (
                <div className="collection-item" key={candidate.id} >
                    <div class="row">
                        < div class="col s24" >
                            <h1>{candidate.name} </h1>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col s24" > {candidate.description} </div>
                    </div>
                    <div class="row">
                        <div class="col s24" > <h4 className="center red-text">{candidate.position}</h4> </div>
                    </div>

                </div>
            )
        })
    ) : (
            <p className="center" > No Head Hunders 's left</p>
        )

    return (
        <div className="todos collection" >
    
            {/* {trigger} */}
            
            <Modal header="Add Candinate" hide-footer="true" trigger={trigger}>
                <AddCandidate/>
            </Modal>
            <h1 className="center blue-text">Candidate List</h1>
            {CandidateListInfo}
            
        </div>
    )

}

export default CandidateList