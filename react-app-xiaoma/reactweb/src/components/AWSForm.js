import React, { Fragment, useState } from 'react';

const AwsForm = (props) => {

    // get form data
    const [txtAccessKey, setAccessKey] = useState(props.appdata.txtAccessKey);     // 注意 setAccessKey 是一个函数，要传入state变化后新的值
    const [txtSecretAccessKey, setSecretAccessKey] = useState(props.appdata.txtSecretAccessKey);
    const [txtRegionID, setRegionID] = useState(props.appdata.txtRegionID)   // 设定默认值

    // on change 之后更新原state的value
    
    // event： 这是一个事件对象，它包含有关事件的各种信息，例如事件的类型、触发事件的元素等。在这里，它代表输入框的变化事件。
    // event.target： 这是触发事件的元素，即事件发生的目标。在这里，它是指输入框元素。
    // event.target.value： 这是输入框的当前值。value 属性包含了用户在输入框中键入的文本。
    // setSecretAccessKey(event.target.value)： 这一行代码使用 setSecretAccessKey 函数来更新组件中的状态，将输入框的当前值设置为新的 "Secret Access Key"。这样，当用户在输入框中键入文本时，React 将会根据用户输入来更新状态，以保持状态和输入框的同步。
    // 总体而言，这段代码实现了一个输入框变化事件的处理函数，用于将输入框的当前值同步到 React 组件的状态中。

    const textAccessKey_onchange = (event) => {
        setAccessKey(event.target.value)
    }

    const textSecretAccessKey_onchange = (event) => {
        setSecretAccessKey(event.target.value)
    }

    const textRegionID_onchange = (event) => {
        setRegionID(event.target.value)
    }

    const btn_click = () => {
        // console.log("Access Key:", txtAccessKey)
        // console.log("Secret Access Key:", txtSecretAccessKey)
        // console.log("Region ID:", txtRegionID)
        props.onSave({
            txtAccessKey: txtAccessKey,
            txtSecretAccessKey: txtSecretAccessKey,
            txtRegionID: txtRegionID
        })

    }


    return (
        <Fragment>
            <div className='d-flex flex-column mx-3'>
                <h2 className='border-bottom pb2'>AWS表单</h2>
                
                <div className='mb-3 mt-3 mx-3'>
                    <label htmlFor='txtAccessKey' className='form-label'>Access Key</label>
                    <input type = 'text' className='form-control' id='txtAccessKey' value={txtAccessKey} onChange={textAccessKey_onchange} />
                </div>

                <div className='mb-3 mx-3'>
                    <label htmlFor='txtSecretAccessKey' className='form-label'>Secret Access Key</label>
                    <input type = 'password' className='form-control' id='txtAccessKey' value={txtSecretAccessKey} onChange={textSecretAccessKey_onchange} />
                </div>

                <div className='mb-3 mx-3'>
                    <label htmlFor='selectRegionID' className='form-label fs-6'>AWS区域</label>
                    <select className='form-select font12' id='selectRegionID' value={txtRegionID} onChange={textRegionID_onchange} >
                        <option value='us-east-1'>US East (N. Virginia)</option>
                        <option value='us-east-2'>US East (Ohio)</option>
                        <option value='us-west-1'>US West (N. California)</option>
                        <option value='us-west-2'>US West (Oregon)</option>
                        <option value='Asia Pacific'>Asia Pacific (Tokyo)</option>

                    </ select>    
                
                <div className='d-flex justify-content-center mt-3 align-items-center'>
                    <button  className='btn btn-success btn-lg' onClick={btn_click}>Submit</button>
                </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default AwsForm;