import React, { useState, useRef } from "react"
import { css } from "@emotion/core"
import { backgroundWhite, fontBlackPrimary, boxShadow, mq } from "../../theme"
import {
  textRegex,
  emailRegex,
  telephoneRegex,
  textAreaRegex,
} from "../../helpers/formRegex"
import FormSection from "./FormSection"
import FormTextInput from "./FormTextInput"
import FormRadioInput from "./FormRadioInput"
import FormTextareaInput from "./FormTextareaInput"
import FormCheckboxInput from "./FormCheckboxInput"
import Button from "../Button"

const INITIAL_FORM_DATA = {
  fullName: "",
  eMail: "",
  phoneNum: "",
  textMsg: "",
  RSVP: "I'm Comming!",
  wantsSubscription: false,
  wantsReminder: false,
}

const INITIAL_FORM_ERRORS = {
  fullName: {
    isError: false,
    errMsg: "Please enter valid full name!",
  },
  eMail: {
    isError: false,
    errMsg: "Please enter valid email!",
  },
  phoneNum: {
    isError: false,
    errMsg: "Please enter valid phone number!",
  },
  textMsg: {
    isError: false,
    errMsg: "Please enter valid message!",
  },
}

const SignUpForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  })
  const [formErrors, setFormErrors] = useState({
    ...INITIAL_FORM_ERRORS,
  })

  const handleForm = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    if (name === "fullName") {
      setFormErrors(state => {
        return {
          ...state,
          [name]: {
            ...state[name],
            isError: !textRegex.test(value),
          },
        }
      })
    }

    if (name === "eMail") {
      setFormErrors(state => {
        return {
          ...state,
          [name]: {
            ...state[name],
            isError: !emailRegex.test(value),
          },
        }
      })
    }

    if (name === "phoneNum") {
      setFormErrors(state => {
        return {
          ...state,
          [name]: {
            ...state[name],
            isError: !telephoneRegex.test(value),
          },
        }
      })
    }

    if (name === "textMsg") {
      setFormErrors(state => {
        return {
          ...state,
          [name]: {
            ...state[name],
            isError: !textAreaRegex.test(value),
          },
        }
      })
    }

    setFormData(state => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const checkRequiredFieldValidity = (fieldData, fieldErr) => {
      const isDataValid = fieldData.replace(/\s/g, "").length > 0 && fieldErr
      return isDataValid
    }

    if (
      checkRequiredFieldValidity(formData.fullName, formErrors.fullName) &&
      checkRequiredFieldValidity(formData.eMail, formErrors.eMail) &&
      checkRequiredFieldValidity(formData.phoneNum, formErrors.phoneNum)
    ) {
      //send the data or whaatever you wanna do

      //reset form
      setFormData({ ...INITIAL_FORM_DATA })
      setFormErrors({ ...INITIAL_FORM_ERRORS })
      window.scrollTo(0, 0)
      alert("SUCCESS")
    } else {
      formRef.current.scrollIntoView()
      alert("WOOPS SOMETHING WENT WRONG")
    }
  }

  const cssTitle = css({
    color: fontBlackPrimary,
    fontWeight: "600",
    fontSize: "2.4rem",
    textAlign: "center",
    textTransform: "capitalize",
    paddingBottom: "4rem",

    [mq[0]]: {
      maxWidth: "35rem",
      margin: "0 auto",
    },
  })

  const cssForm = css({
    backgroundColor: backgroundWhite,
    width: "100%",
    boxShadow: boxShadow,
    borderRadius: "4px",
    padding: "0 1.5rem 2rem 1.5rem",
    position: "relative",

    [mq[0]]: {
      width: "70%",
      margin: "0 auto",
    },

    [mq[2]]: {
      width: "50%",
    },
  })

  const cssFormBtn = css({
    position: "absolute",
    bottom: "-2.5rem",
    left: "50%",
    transform: "translateX(-50%)",
  })

  const cssNoBorder = css({
    border: "none",
  })

  const cssRequred = css({
    color: "red",
    fontSize: "1.4rem",
    position: "absolute",
    top: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& span": {
      marginLeft: ".5rem",
      fontSize: "1.2rem",
    },
  })

  return (
    <>
      <h3 css={cssTitle}>Quick, join up before we drink all the beer!</h3>
      <form ref={formRef} css={cssForm} onSubmit={handleFormSubmit}>
        <div css={cssRequred}>
          Required <span>&#10033;</span>
        </div>
        <FormSection title="Personal Information">
          <FormTextInput
            id="UserName"
            placeholder="Full name"
            type="text"
            name="fullName"
            error={formErrors.fullName}
            value={formData.fullName}
            handleChange={handleForm}
            isRequired={true}
          />
        </FormSection>
        <FormSection title="Contact Information">
          <FormTextInput
            id="EMail"
            placeholder="Email"
            type="email"
            name="eMail"
            error={formErrors.eMail}
            value={formData.email}
            handleChange={handleForm}
            isRequired={true}
          />
          <FormTextInput
            id="PhoneNumber"
            placeholder="Phone number"
            type="tel"
            name="phoneNum"
            error={formErrors.phoneNum}
            value={formData.phoneNum}
            handleChange={handleForm}
            isRequired={true}
          />
        </FormSection>
        <FormSection title="RSVP">
          <FormRadioInput
            id="Comming"
            name="RSVP"
            value="I'm Comming!"
            defaultChecked={true}
            handleChange={handleForm}
          />

          <FormRadioInput
            id="Maybe"
            name="RSVP"
            value="Maybe?"
            handleChange={handleForm}
          />
          <FormRadioInput
            id="Cant"
            name="RSVP"
            value="Can't make it"
            handleChange={handleForm}
          />
          <FormTextareaInput
            id="Message"
            placeholder="Something you'd like to add?"
            name="textMsg"
            value={formData.textMsg}
            error={formErrors.textMsg}
            handleChange={handleForm}
          />
        </FormSection>
        <FormSection css={cssNoBorder}>
          <FormCheckboxInput
            id="Subscription"
            name="wantsSubscription"
            content="Let me know about future beerups!"
            handleChange={handleForm}
            value={formData.wantsSubscription}
          />
          <FormCheckboxInput
            id="Reminder"
            name="wantsReminder"
            content="Remind me one day before this beerup!"
            handleChange={handleForm}
            value={formData.wantsReminder}
          />
        </FormSection>
        <Button type="submit" title="Join up" css={cssFormBtn} />
      </form>
    </>
  )
}

export default SignUpForm
