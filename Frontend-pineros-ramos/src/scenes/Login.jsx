import { Box } from '@mui/material';
import React, { Component, useState } from 'react';
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [form, setForm] = useState(
        {
            username : '',
            password : '',
            redirecToDashboard: false,
        }
    )

    const handleInputChange = (e) =>{
        setForm({[e.target.name]:e.target.value});
    }

    const handleLogin = () => {
        setForm({redirecToDashboard:true});
    }

    return (
        <Box
            style={
                {
                    width: "100vw",
                    height: "100vh",
                    paddingTop: "20px"
                }
            }
            sx={{ bgcolor: '#1F2A40!important;'}}
        > 
            <Box 
                style={
                    {
                        display: "flex",  // Utiliza flexbox
                        justifyContent: "center",  // Centra horizontalmente
                        alignItems: "center",  // Centra verticalmente
                        background: "green",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "50px",
                    }
                }
            >
                JVPayRoll
            </Box>

            <Box
                style={
                    {
                        width: "50vw",
                        height:"50vh",
                        background: "blue",
                        margin:"auto"
                    }
                }
            >
                
            </Box>
        </Box>
        
    );
};

export default Login;
