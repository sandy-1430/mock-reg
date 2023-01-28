import React, { useEffect } from 'react';
import { useState } from 'react';
import Registerform from './Registerform';
import RegisterReview from './RegisterReview';
import Formstatus from '../components/Formstatus';
import { useNavigate } from 'react-router';

export default function MockRegister() {
    const [register, setRegister] = useState({
        name: "",
        fathersName: "",
        mothersName: "",
        gname: "",
        dob: "",
        gender: "",
        nationality: "",
        identityType: "",
        identificationNo: "",
        presAddrPremiseNoName: "",
        presAddrSubLocality: "",
        presAddrLocality: "",
        presAddrCountry: "",
        presAddrState: "",
        presAddrDistrict: "",
        presAddrPincode: "",
        email: "",
        confirmEmail: "",
        mobNo: "",
        confirmMob: "",
        altMobNo: "",
        sameAdd: false,
        permAddrPremiseNoName: "",
        permAddrSubLocality: "",
        permAddrLocality: "",
        permAddrCountry: "",
        permAddrState: "",
        permAddrDistrict: "",
        permAddrPincode: "",
        pwd: "",
        confrimPass: "",
        secQues: "",
        secAns: "",
    })

    const [boolean, setBoolean] = useState({
        register: true,
        review: false
    });

    let navigate = useNavigate();

    useEffect(() => {
        let getUserinfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!getUserinfo) {
            navigate("/");
        }
    }, [navigate])

    return (
        <>
            <div className='d-flex col-gap-20'>
                <Formstatus statusActive="1" />
                <div className='register-form'>
                    {boolean.register && <Registerform register={register} setRegister={setRegister} setBoolean={setBoolean} />}
                    {boolean.review && <RegisterReview register={register} setBoolean={setBoolean} />}
                </div>
            </div>
        </>
    )
}
