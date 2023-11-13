'use client'

import { FormEvent, useState } from 'react'
import TextInput from '@component/common/textInput'
import { ErrorProps, FormValuesProps } from '@component/common/types'
import { emailRegex, urlRegex } from '@component/common/functions'

function Form() {
  const [formError, setFormError] = useState<ErrorProps[] | undefined>(undefined)
  const [formSubmission, setFormSubmission] = useState<boolean | undefined>(false)
  const [formValues, setFormValues] = useState<FormValuesProps>({formURL: ''})

  function handleOnChange(input: { name: string, value: string }, isRequired?: boolean, feedback?: string) {
    const { name, value } = input
    setFormValues((prev) => ({ ...prev, [name]: value }))
    !!isRequired && handleErrors(input, isRequired && !!feedback ? feedback : '')
  }

  function handleOnBlur(input: { name: string, value: string }, isRequired?: boolean, feedback?: string, isEmail?: boolean, isURL?: boolean) {
    !!isRequired && handleErrors(input, isRequired && !!feedback ? feedback : '', isEmail, isURL)
  }
 
  function handleErrors(input: { name: string, value: string }, errorMessage: string, isEmail?: boolean, isURL?: boolean) {
    const { name, value } = input
    const errorObj = { input: name, message: errorMessage } as ErrorProps
    const activeError = !!formError?.find(error => error?.input === name)
    if (formSubmission || formSubmission === undefined) resetSubmissionError()

    if (
      (
        (!value || value?.trim() === '')
        || (isEmail && !emailRegex.test(value))
        || (isURL && !urlRegex.test(value))
      ) && !activeError
    ) {
      setFormError(
        errors => errors && errors?.length > 0 ?
        [...errors, errorObj] :
        [errorObj]
      )
      return
    }

    if (
      (!!value && value?.trim() !== '')
      && ((isEmail && emailRegex.test(value)) || !isEmail)
      && ((isURL && !urlRegex.test(value)) || !isURL)
      && activeError
    ) {
      setFormError(errors => errors?.filter(error => error?.input !== name))
      return
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setFormSubmission(undefined)
    console.log("Form Submitted")
  }

  function resetSubmissionError() {
    setFormSubmission(false)
    setFormError(undefined)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        type={'url'}
        name={'formURL'}
        value={formValues.formURL}
        error={formError?.find(error => error?.input === 'formURL')}
        label={'Webpage URL'}
        handleOnChange={handleOnChange}
        handleOnBlur={handleOnBlur}
        feedbackMessage={'Please provide a valid url'}
        isRequired={true}
        helperText={'Example: https://www.informaticsinc.com'}
        isURL={true}
      />
      <div className='form-group'>
        {formSubmission === undefined ? (
          <em className="loader"><span className="loader-icn"><span></span><span></span><span></span><span></span></span> Loading</em>
        ) : (
          <>
            {!!formError && !!formError?.find(error => error?.input === 'formSubmit') && <em><strong>Error: </strong>{formError?.find(error => error?.input === 'formSubmit')?.message}</em>}
            <button type="submit" className="btn" disabled={!formValues.formURL ? true : false}>Submit</button>
            {formSubmission ? (
              <em className="form-feedback success">Your message is on its way</em>
            ) : (
              <small><em><sup>*</sup>All fields required</em></small>
            )}
          </>
        )}
      </div>
    </form>
  );
}

export default Form