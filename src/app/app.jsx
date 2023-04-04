import React from 'react'
import Logo from '../../static/logo-sk.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "@mui/icons-material";
import {Button} from "@mui/material";

const App = (props) => {
    const links=[
        {url:"https://www.linkedin.com/in/sharwan/", title:"", icon:<LinkedInIcon />},
        {url:"https://github.com/sharwankami/sharwankami.github.io/", title:"", icon:<GitHubIcon />},
    ];
    return (
        <div className={'container text-center pt-5 align-middle'}>
            <div className="">
                <Logo
                    width={'120px'}
                    height={'120px'}
                    style={{ marginBottom: '30px' }}
                />
                <h1 style={{ fontSize: '60px' }}>Sharwan Kami</h1>
                <p>I am Senior Web Developer at <a href="https://digitive.no">Digitive AS</a>, living in Moss, Norway.</p>

                <ul className={"nav justify-content-center"}>
                    {
                        links.map((lnk, index)=>{
                            return <li key={"link-"+index} className={"nav-item"}>
                                <a href={lnk.url} className="nav-link text-black-50" title={lnk.title} target={"_blank"}>{lnk.icon}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
