import React, {useState} from "react";
import {Radio } from "antd";
import SupervisorReg from "./Sections/SupervisorReg";
import StudentReg from "./Sections/StudentReg"
import PanelmemberReg from "./Sections/PanelmemberReg"

function RegisterPage(props) {

    const [regType,setRegType] = useState(0);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setRegType(e.target.value);
    };

    return (
        <div className="app">
            <h2>Sign Up</h2>
            <Radio.Group
                /*options={options}*/
                onChange={onChange}
                value={regType}
                optionType="button"
                defaultValue="0"
                /*buttonStyle="solid"*/
            >
                <Radio.Button value="0">Supervisor</Radio.Button>
                <Radio.Button value="1">Studentr</Radio.Button>
                <Radio.Button value="2">Panel Member</Radio.Button>
            </Radio.Group>

            { regType=="0"  ?
                <>
                    <SupervisorReg/>
                </>

                : null }
            { regType=="1"  ?
                <>
                    <StudentReg/>
                </>

                : null }
            { regType=="2"  ?
                <>
                    <PanelmemberReg/>
                </>

                : null }

        </div>
    );
};

export default RegisterPage
