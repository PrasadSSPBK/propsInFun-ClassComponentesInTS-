import React from 'react'

interface Iprops {
    name:string;
}

const PropsInFunComponents:React.FC<Iprops>=({name})=>{

    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="card bg-success text-white  border-warning m-3">
                    <div className="card-body">
                        
                
                    <div className="card-header bg-warning text-center fw-bold">User Details in Function Component(by Props)</div>
                    
               
                <p className='card-title display-6 fw-bold'> Hello {name}</p>
                <p className='card-textdisplay-7 fw-bold'> {name} is born on 16-09-2021</p>
                

                </div>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        
    )

}
export default PropsInFunComponents