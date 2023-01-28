import React, { useContext } from 'react';
import { useState } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function ExamForm() {
    const { userInfo, setuserInfo, step } = useContext(UserContext);
    const [state, setstate] = useState({
        statePref1: "",
        statePref2: "",
        statePref3: "",
        statePref4: ""
    })

    const handleChange = (e) => {
        setuserInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleState = (e) => {
        setstate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let dropdownValues = {
        subjects: ["English", "Hindi"],
        states: ["DELHI", "HARYANA", "UTTARPRADHESH"],
        DELHI: ["DELHI/NEW DELHI (DL01)"],
        HARYANA: ["FARIDABAD (HR03)", "GURUGRAM (HR04)"],
        UTTARPRADHESH: ["GHAZIBAD (UP 07)", "MERUTI (UP14)", "NOIDA/GREATER NOIDA (UP 09)"]
    }

    return (
        <div className={`form-body ${step.review ? "reviewPage" : ""}`}>
            <div className='subTitle'>
                <h4>Examination Center details</h4>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center">
                <label htmlFor="qPaperMedium">Question paper medium</label>
                <div className="form-input select-dropdown">
                    <select
                        id="qPaperMedium"
                        name="qPaperMedium"
                        required
                        className={userInfo.qPaperMedium ? "valid" : ""}
                        value={userInfo.qPaperMedium}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.subjects.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref1">Center City Preference 1</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref1"
                        name="statePref1"
                        required
                        className={state.statePref1 ? "valid" : ""}
                        value={state.statePref1}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref1"
                        name="cityPref1"
                        required
                        className={userInfo.cityPref1 ? "valid" : ""}
                        value={userInfo.cityPref1}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref1]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref2">Center City Preference 2</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref2"
                        name="statePref2"
                        required
                        className={state.statePref2 ? "valid" : ""}
                        value={state.statePref2}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref2"
                        name="cityPref2"
                        required
                        className={userInfo.cityPref2 ? "valid" : ""}
                        value={userInfo.cityPref2}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref2]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref3">Center City Preference 3</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref3"
                        name="statePref3"
                        required
                        className={state.statePref3 ? "valid" : ""}
                        value={state.statePref3}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref3"
                        name="cityPref3"
                        required
                        className={userInfo.cityPref3 ? "valid" : ""}
                        value={userInfo.cityPref3}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref3]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref4">Center City Preference 4</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref4"
                        name="statePref4"
                        required
                        className={state.statePref4 ? "valid" : ""}
                        value={state.statePref4}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref4"
                        name="cityPref4"
                        required
                        className={userInfo.cityPref4 ? "valid" : ""}
                        value={userInfo.cityPref4}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref4]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
