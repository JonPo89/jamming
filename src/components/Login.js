import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/authorisation/authorisationSlice";
import './login.css';

export function Login () {
    const loginLink = useSelector(selectLogin);
    const [ rotate, setRotate ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotate(rotate + 1);
        }, 10);
        return () => clearInterval(interval);
    })

    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    console.log(clientSecret)
    
   
    return (
        <div className="login">
            <div id="loginLogo">
                <a href={loginLink}>
                    <h3 className="loginLogo">ja<div className="loginSpinLogo" style={{rotate:`${rotate}deg`}}>mmm</div>ing</h3>
                </a>
            </div>
        </div>

    )
}