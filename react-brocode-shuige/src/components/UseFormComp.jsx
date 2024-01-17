import React from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useInput } from "rooks"

export default function UseFormComp() {
  // react-hook-form
  const { register, control, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log("Form submitted", data)
  }

  // rooks - useInput
  const inputUserName = useInput("koma")
  const inputEmail = useInput("abc@gmail.com")
  const inputChannel = useInput("YT")

  return (
    <>
      <h4>react-hook-form 版本</h4>
      {/* 下面的button自动执行submit，即使没有任何link */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          {...register("username")}
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" {...register("email")} />
        <br />

        <label htmlFor="channel">Channel</label>
        <br />
        <input type="text" id="channel" {...register("channel")} />
        <br />

        {/* 由于button在form里面，所以不需要link onclick， 也自动会submit for the form */}
        <button>Submit</button>
        {/* <button onClick={handleSubmit(onSubmit)}>Submit=</button> */}
      </form>
      <DevTool control={control} />

      <h4>Rooks 版本</h4>
      {/* 下面的button自动执行submit，即使没有任何link */}
      <form>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          // name={name}
          // ref={ref}
          // onChange={onChange}
          // onBlur={onBlur}
          {...inputUserName}
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" {...inputEmail} />
        <br />

        <label htmlFor="channel">Channel</label>
        <br />
        <input type="text" id="channel" {...inputChannel} />
        <br />

        {/* 由于button在form里面，所以不需要link onclick， 也自动会submit for the form */}
        <button>Submit</button>
        {/* <button onClick={handleSubmit(onSubmit)}>Submit=</button> */}
      </form>
      <p>
        输入内容：<b>{inputUserName.value}</b>
        <br />
        <b>{inputEmail.value}</b>
        <br />
        <b>{inputChannel.value}</b>
        <br />
      </p>
    </>
  )
}
