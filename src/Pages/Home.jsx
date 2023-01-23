import React, { useState, useEffect } from 'react';
import VerifyEmail from './VerifyEmail';
import TrackApplication from './components/TrackApplication';
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextApi/UserContext";
import FormField from './FormField';

export default function Home() {
    const [userInfo, setuserInfo] = useState({
    });

    const [step, setStep] = useState({
        trackAppl: false,
        verifyEmail: false,
        currentStep: 1,
        form: true,
        review: false
    });

    let navigate = useNavigate();

    useEffect(() => {
        let getUserinfo = JSON.parse(localStorage.getItem("userInfo"));
        if (getUserinfo) {
            setuserInfo(getUserinfo || null)
        } else {
            navigate("/");
        }
    }, [navigate])

    useEffect(() => {
        if (userInfo.name) {
            console.log(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }, [userInfo])

    return (
        <>
            <UserContext.Provider value={{ userInfo, setuserInfo, setStep, step }}>
                {step.verifyEmail && <VerifyEmail />}
                {step.trackAppl && <TrackApplication />}
                {step.currentStep && <FormField />}
            </UserContext.Provider>
        </>
    )
}
