import React from 'react'
import Logo from '../../static/logo-sk.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "@mui/icons-material";
import {Button} from "@mui/material";

const App = (props) => {
    return (
        <div className={'container text-center pt-5 align-middle'}>
            <div className="">
                <Logo
                    width={'120px'}
                    height={'120px'}
                    style={{ marginBottom: '30px' }}
                />
                <h1 style={{ fontSize: '60px' }}>Sharwan Kami</h1>
                <p>I am Senios Web Developer at Samnet.no, living in Norway.</p>
                <p>
                    <Button
                        variant="link"
                        color="default"
                        startIcon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/sharwan/"
                    />

                    <Button
                        variant="link"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/sharwankami/sharwankami.github.io/"
                    />
                </p>
            </div>
        </div>
    )
}

export default App
