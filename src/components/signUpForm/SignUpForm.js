import React from "react"
import { css } from "@emotion/core"
import {
  backgroundWhite,
  fontBlackPrimary,
  fontBlackDisabled,
  boxShadow,
} from "../../theme"
import FormSection from "./FormSection"
import FormTextInput from "./FormTextInput"
import FormRadioInput from "./FormRadioInput"
import FormTextareaInput from "./FormTextareaInput"
import FormCheckboxInput from "./FormCheckboxInput"
import Button from "../Button"

const SignUpForm = () => {
  const cssTitle = css({
    color: fontBlackPrimary,
    fontWeight: "600",
    fontSize: "2.4rem",
    textAlign: "center",
    textTransform: "capitalize",
    paddingBottom: "4rem",
  })

  const cssForm = css({
    backgroundColor: backgroundWhite,
    width: "100%",
    boxShadow: boxShadow,
    borderRadius: "4px",
    padding: "0 1.5rem 2rem 1.5rem",
    position: "relative",
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

  return (
    <>
      <h3 css={cssTitle}>Quick, join up before we drink all the beer!</h3>
      <form css={cssForm}>
        <FormSection title="Personal Information">
          <FormTextInput id="UserName" placeholder="Full name" type="text" />
        </FormSection>
        <FormSection title="Contact Information">
          <FormTextInput id="EMail" placeholder="Email" type="email" />
          <FormTextInput
            id="PhoneNumber"
            placeholder="Phone number"
            type="tel"
          />
        </FormSection>
        <FormSection title="RSVP">
          <FormRadioInput id="Comming" name="RSVP" value="I'm Comming!" />
          <FormRadioInput id="Maybe" name="RSVP" value="Maybe?" />
          <FormRadioInput id="Cant" name="RSVP" value="Can't make it" />
          <FormTextareaInput
            id="Message"
            placeholder="Something you'd like to add?"
          />
        </FormSection>
        <FormSection css={cssNoBorder}>
          <FormCheckboxInput
            id="Subscription"
            name="wantsSubscription"
            value="Let me know about future beerups!"
          />
          <FormCheckboxInput
            id="Reminder"
            name="wantsReminder"
            value="Remind me one day before this beerup!"
          />
        </FormSection>
        <Button type="submit" title="Join up" css={cssFormBtn} />
      </form>
    </>
  )
}

export default SignUpForm
