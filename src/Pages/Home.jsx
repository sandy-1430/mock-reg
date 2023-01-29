import React, { useState, useEffect } from 'react';
import VerifyEmail from './VerifyEmail';
import TrackApplication from './components/TrackApplication';
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextApi/UserContext";
import FormField from './FormField';
import Payment from './Payment/Payment';
import Loadingbox from './components/Loadingbox';

export default function Home() {
    const [userInfo, setuserInfo] = useState({
    });

    const [step, setStep] = useState({
        loading: false,
        trackAppl: true,
        verifyEmail: false,
        currentStep: null,
        form: true,
        review: false,
        payment: false,
    });

    let navigate = useNavigate();

    useEffect(() => {
        let getUserinfo = JSON.parse(localStorage.getItem("userInfo"));
        if (getUserinfo) {
            setuserInfo(getUserinfo || null)
        } else {
            navigate("/login");
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
            {step.loading && <Loadingbox />}
            <UserContext.Provider value={{ userInfo, setuserInfo, setStep, step }}>
                {step.verifyEmail && <VerifyEmail />}
                {step.trackAppl && <TrackApplication />}
                {step.currentStep && <FormField />}
                {step.payment && <Payment />}
            </UserContext.Provider>
        </>
    )
}
