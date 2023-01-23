import React, { useContext } from 'react';
import { useState } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function TestPaper() {
    const { userInfo, setuserInfo, step } = useContext(UserContext);
    const [checkbox, setCheckbox] = useState(false)

    const handleChange = (e) => {
        setuserInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let dropdownValues = {
        subjects: ["English", "Hindi"]
    }

    return (
        <>
            <div className="form-body paperNotes">
                <p><strong>Note:</strong></p>
                <ul>
                    <li>I have read the rules for selection of test paper/Subject(s) desaulted in CUET (UG) - 2022 Information Bulletin.</li>
                    <li>Candidte must select Test paper/Subjects(s) based on the eligibility criteria of the Programme University in which the candidate wants to seek admission.</li>
                </ul>
                <div className="table-responsive">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>First Slot (Maximum 4 tests)</th>
                                <th>Second Slot (Maximum 5 tests)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Section I A: Only Language</p>
                                    <p>Section II 2: Domain Specific Subjects</p>
                                    <p>Section III: German Test</p>
                                </td>
                                <td>
                                    <p>Section IA + 1B: One (Two of the subjects are less than 4)</p>
                                    <p>Section II Maximum of 4 Subjects</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>1.  A Candidate can choose a maximum of any 3 languages from Section 1A and Section 1B taken together. (in case 3 languages are chosen then 1 needs to be in lieu of Domain specific subjects).</p>
                <p>2. Examination will be taken in two or morw slots on different days depending on the subjects/tests taken by the candidates. However, in Slot One which will be in morning shift a candidate may take upto 4 tests only, and in Slot 2 which will be in the afternoon shift a candidate can take upto 5 tests. Combining Slot 1 and Slot 2 together a candidate may take maximum 9 tests.</p>
                <hr />
            </div>
            <div className={`form-body ${step.review ? "reviewPage" : ""}`}>
                <div className='subTitle'>
                    <h4>Select Test Paper/Subject(s) selection for first slot</h4>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1LangSubj">Language from Section 1A</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1LangSubj"
                            name="slot1LangSubj"
                            required
                            className={userInfo.slot1LangSubj ? "valid" : ""}
                            value={userInfo.slot1LangSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1DomainSubj1">Domain-Specific Subject 1</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1DomainSubj1"
                            name="slot1DomainSubj1"
                            required
                            className={userInfo.slot1DomainSubj1 ? "valid" : ""}
                            value={userInfo.slot1DomainSubj1}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1DomainSubj2">Domain-Specific Subject 2</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1DomainSubj2"
                            name="slot1DomainSubj2"
                            required
                            className={userInfo.slot1DomainSubj2 ? "valid" : ""}
                            value={userInfo.slot1DomainSubj2}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1IsGenSubj">Do you want to apply for General Test Section III</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1IsGenSubj"
                            name="slot1IsGenSubj"
                            required
                            className={userInfo.slot1IsGenSubj ? "valid" : ""}
                            value={userInfo.slot1IsGenSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr />
                <div className='subTitle'>
                    <h4>Select Test Paper/Subject(s) selection for second slot</h4>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2LangSubj">Additional language from Section IA + Section IB</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2LangSubj"
                            name="slot2LangSubj"
                            required
                            className={userInfo.slot2LangSubj ? "valid" : ""}
                            value={userInfo.slot2LangSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2LangSubjAlternative">Additional language from Section IA + Section IB i lieu of domain specific subject</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2LangSubjAlternative"
                            name="slot2LangSubjAlternative"
                            required
                            className={userInfo.slot2LangSubjAlternative ? "valid" : ""}
                            value={userInfo.slot2LangSubjAlternative}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj3">Domain-Specific Subject 3</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj3"
                            name="slot2DomainSubj3"
                            required
                            className={userInfo.slot2DomainSubj3 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj3}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj4">Domain-Specific Subject 4</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj4"
                            name="slot2DomainSubj4"
                            required
                            className={userInfo.slot2DomainSubj4 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj4}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj5">Domain-Specific Subject 5</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj5"
                            name="slot2DomainSubj5"
                            required
                            className={userInfo.slot2DomainSubj5 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj5}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj) => (
                                <option key={uid(obj)} value={obj}>{obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr />
                <div className="formGroup checkbox">
                    <input
                        id="declaration"
                        type="checkbox"
                        required
                        checked={checkbox}
                        onChange={() => setCheckbox(checkbox ? false : true)}
                        disabled={step.review ? true : false}
                    />
                    <label htmlFor="declaration">
                        I hereby declare that I have selected above subjects for CUET (UG) -2022 examination and understand that the selected subject is not liable to change or modified in the later stage of the application and examination.
                    </label>
                </div>
            </div>
        </>
    )
}
