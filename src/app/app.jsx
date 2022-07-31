import React from 'react'
import Logo from '../../static/logo-sk.svg'

const App = (props) => {
    return (
        <div className={"container text-center pt-5 align-middle"}>
            <div className="">
                <Logo width={'120px'} height={"120px"} style={{marginBottom:"30px"}}/>
                <h1 style={{fontSize:"70px"}}>Sharwan Kami</h1>
                <p>I am Senios Web Developer at Samnet.no, living in Norway.</p>
            </div>

        </div>
    )
}

export default App
