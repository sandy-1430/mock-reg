import React, { useContext } from 'react';
import { useState } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";
import { YearPicker } from "react-dropdown-date";
import { State, City } from "country-state-city";

export default function EDForm() {
    const { userInfo, setuserInfo } = useContext(UserContext);

    let EducationVal = [
        {
            "clsXorXII": "X",
            "resultStatus": "",
            "passingYr": "",
            "qualifyingExam": "",
            "schoolingPlc": "",
            "schoolCollegType": "",
            "qualifyingExamCountry": "",
            "qualifyingExamState": "",
            "qualifyingExamDistrict": "",
            "boardName": "",
            "schoolCollegNameAndAddr": "",
            "schoolCollegNameAndPin": "",
            "rollNo": "",
            "resultMode": "",
            "maxMarks": "",
            "marksObtd": "",
            "percentage": "",
        },
        {
            "clsXorXII": "XII",
            "resultStatus": "",
            "passingYr": "",
            "qualifyingExam": "",
            "schoolingPlc": "",
            "schoolCollegType": "",
            "qualifyingExamCountry": "",
            "qualifyingExamState": "",
            "qualifyingExamDistrict": "",
            "boardName": "",
            "schoolCollegNameAndAddr": "",
            "schoolCollegNameAndPin": "",
            "rollNo": "",
            "resultMode": "",
            "maxMarks": "",
            "marksObtd": "",
            "percentage": "",
        },
    ];

    const [education, setEducation] = useState(userInfo.cuetPreRegXAndXIIDtlsBeanList ? userInfo.cuetPreRegXAndXIIDtlsBeanList : EducationVal);

    const UpdateState = () => {
        setEducation((prev) => ([...prev]))
        setuserInfo((prev) => ({
            ...prev,
            cuetPreRegXAndXIIDtlsBeanList: education
        }))
    }

    const handleChange = (e, index) => {
        education[index][e.target.name] = e.target.value;
        if (e.target.name === "resultMode") {
            education[index].marksObtd = "";
            education[index].maxMarks = "";
            education[index].percentage = "";
        }
        UpdateState();
    }

    const changeYear = (year, index) => {
        education[index]["passingYr"] = year;
        UpdateState();
    }

    const handleDepentText = (e, index) => {
        education[index][e.target.name] = e.target.value;
        let currentStd = education[index];
        if (currentStd.marksObtd && currentStd.maxMarks) {
            if (parseFloat(currentStd.maxMarks) >= parseFloat(currentStd.marksObtd)) {
                let marksobt = parseFloat(currentStd.marksObtd) * 100
                let percentage = marksobt / parseFloat(currentStd.maxMarks);
                currentStd.percentage = percentage;
            } else {
                currentStd.percentage = "";
            }
        }

        UpdateState();
    }

    return (
        <>
            {education.map((edu, index) => (
                <div key={uid(edu)} className="form-body bb-grey">
                    <div className="subTitle">
                        <h4>Class {edu.clsXorXII} or Equivalent Educational Details</h4></div>
                    <div className="form-container">
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"resultStatus" + index}>Result Status</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"resultStatus" + index}
                                    name="resultStatus"
                                    required
                                    className={edu.resultStatus ? "valid" : ""}
                                    value={edu.resultStatus}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="Passed"> Passed </option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"passingYr" + index}>Passing Year</label>
                            <div className="form-input d-flex dob col-gap-20">
                                <YearPicker
                                    defaultValue={'--Year--'}
                                    value={edu.passingYr}
                                    name="passingYr"
                                    reverse
                                    required
                                    onChange={(year) => changeYear(year, index)}
                                    classes={edu.passingYr ? "valid" : ""}
                                />
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"qualifyingExam" + index}>Qualifying Exam</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"qualifyingExam" + index}
                                    name="qualifyingExam"
                                    required
                                    className={edu.qualifyingExam ? "valid" : ""}
                                    value={edu.qualifyingExam}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="10th or Equivalent"> 10th or Equivalent </option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"schoolingPlc" + index}>Place of Schooling</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"schoolingPlc" + index}
                                    name="schoolingPlc"
                                    required
                                    className={edu.schoolingPlc ? "valid" : ""}
                                    value={edu.schoolingPlc}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="Urban"> Urban </option>
                                    <option value="Rural"> Rural </option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"schoolCollegType" + index}>Type of School / College</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"schoolCollegType" + index}
                                    name="schoolCollegType"
                                    required
                                    className={edu.schoolCollegType ? "valid" : ""}
                                    value={edu.schoolCollegType}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="Government School"> Government School </option>
                                    <option value="Government Aided Private"> Government Aided Private </option>
                                    <option value="Kendriya Vidyalaya(KV)"> Kendriya Vidyalaya(KV) </option>
                                    <option value="Jawahar Navodaya Vidyalaya(JNV)"> Jawahar Navodaya Vidyalaya(JNV) </option>
                                    <option value="Private Unaided"> Private Unaided </option>
                                    <option value="Central Board of Secondary Education School"> Central Board of Secondary Education School </option>
                                    <option value="Eklavya Model Residential School"> Eklavya Model Residential School </option>
                                    <option value="ODL (Open and Distance Learning)"> ODL (Open and Distance Learning) </option>
                                    <option value="Others"> Others </option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"qualifyingExamCountry" + index}>Qualifying Examination Country</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"qualifyingExamCountry" + index}
                                    name="qualifyingExamCountry"
                                    required
                                    className={edu.qualifyingExamCountry ? "valid" : ""}
                                    value={edu.qualifyingExamCountry}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="India"> India </option>
                                    <option value="Outside India"> Outside India </option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"qualifyingExamState" + index}>Qualifying Examination State</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"qualifyingExamState" + index}
                                    name="qualifyingExamState"
                                    required
                                    className={edu.qualifyingExamState ? "valid" : ""}
                                    value={edu.qualifyingExamState}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    {State?.getStatesOfCountry("IN").map((opt) => (
                                        <option key={uid(opt)} value={opt.isoCode}> {opt.name} </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"qualifyingExamDistrict" + index}>Qualifying Examination District</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"qualifyingExamDistrict" + index}
                                    name="qualifyingExamDistrict"
                                    required
                                    className={edu.qualifyingExamDistrict ? "valid" : ""}
                                    value={edu.qualifyingExamDistrict}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    {
                                        City.getCitiesOfState(
                                            "IN",
                                            edu.qualifyingExamState
                                        ).map((cou) => (
                                            <option key={uid(cou.name)} value={cou.name}>{cou.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"boardName" + index}>Board Name</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"boardName" + index}
                                    name="boardName"
                                    required
                                    className={edu.boardName ? "valid" : ""}
                                    value={edu.boardName}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="BOARD OF INTERMEDIATE EDUCATION (ANDHRA PRADESH)">BOARD OF INTERMEDIATE EDUCATION (ANDHRA PRADESH)</option>
                                </select>
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"schoolCollegNameAndAddr" + index}>School/College Name and Address</label>
                            <div className="form-input">
                                <input
                                    id={"schoolCollegNameAndAddr" + index}
                                    type="text"
                                    name="schoolCollegNameAndAddr"
                                    required
                                    placeholder="Enter School/College Name and Address"
                                    className={edu.schoolCollegNameAndAddr ? "valid" : ""}
                                    value={edu.schoolCollegNameAndAddr}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"schoolCollegNameAndPin" + index}>School/College Pincode</label>
                            <div className="form-input">
                                <input
                                    id={"schoolCollegNameAndPin" + index}
                                    type="text"
                                    name="schoolCollegNameAndPin"
                                    required
                                    placeholder="Enter School/College Pincode"
                                    className={edu.schoolCollegNameAndPin ? "valid" : ""}
                                    value={edu.schoolCollegNameAndPin}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"rollNo" + index}>Roll Number</label>
                            <div className="form-input">
                                <input
                                    id={"rollNo" + index}
                                    type="text"
                                    name="rollNo"
                                    required
                                    placeholder="Enter Roll Number"
                                    className={edu.rollNo ? "valid" : ""}
                                    value={edu.rollNo}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        </div>
                        <div className="formGroup d-flex col-gap-20 align-items-center">
                            <label htmlFor={"resultMode" + index}>Result Mode</label>
                            <div className="form-input select-dropdown">
                                <select
                                    id={"resultMode" + index}
                                    name="resultMode"
                                    required
                                    className={edu.resultMode ? "valid" : ""}
                                    value={edu.resultMode}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="percentage"> Percentage </option>
                                    <option value="grade"> Grade </option>
                                </select>
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "percentage" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"maxMarks" + index}>Maximum Marks</label>
                            <div className="form-input">
                                <input
                                    id={"maxMarks" + index}
                                    type="text"
                                    name="maxMarks"
                                    placeholder="Enter Maximum Marks"
                                    required
                                    className={edu.maxMarks ? "valid" : ""}
                                    value={edu.maxMarks}
                                    onChange={(e) => handleDepentText(e, index)}
                                />
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "percentage" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"marksObtd" + index}>Marks Obtained</label>
                            <div className="form-input">
                                <input
                                    id={"marksObtd" + index}
                                    type="text"
                                    name="marksObtd"
                                    placeholder="Enter Marks Obtained"
                                    required
                                    className={edu.marksObtd ? "valid" : ""}
                                    value={edu.marksObtd}
                                    onChange={(e) => handleDepentText(e, index)}
                                />
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "percentage" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"percentage" + index}>Percentage</label>
                            <div className="form-input">
                                <input
                                    id={"percentage" + index}
                                    type="text"
                                    name="percentage"
                                    disabled={true}
                                    required
                                    placeholder="Enter Percentage"
                                    className={edu.percentage ? "valid" : ""}
                                    value={edu.percentage}
                                />
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "grade" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"maxMarks1" + index}>Maximum Grade Point</label>
                            <div className="form-input">
                                <input
                                    id={"maxMarks1" + index}
                                    type="text"
                                    name="maxMarks"
                                    placeholder="Enter Maximum Grade Point"
                                    required
                                    className={edu.maxMarks ? "valid" : ""}
                                    value={edu.maxMarks}
                                    onChange={(e) => handleDepentText(e, index)}
                                />
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "grade" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"marksObtd1" + index}>CGPA Obtained</label>
                            <div className="form-input">
                                <input
                                    id={"marksObtd1" + index}
                                    type="text"
                                    name="marksObtd"
                                    placeholder="Enter CGPA Obtained"
                                    required
                                    className={edu.marksObtd ? "valid" : ""}
                                    value={edu.marksObtd}
                                    onChange={(e) => handleDepentText(e, index)}
                                />
                            </div>
                        </div>
                        <div className={`formGroup ${edu.resultMode === "grade" ? "d-flex" : "dependent"} col-gap-20 align-items-center`}>
                            <label htmlFor={"percentage1" + index}>CGPA Equivalent Percentage</label>
                            <div className="form-input">
                                <input
                                    id={"percentage1" + index}
                                    type="text"
                                    name="percentage"
                                    disabled={true}
                                    required
                                    placeholder="Enter CGPA Equivalent Percentage"
                                    className={edu.percentage ? "valid" : ""}
                                    value={edu.percentage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
