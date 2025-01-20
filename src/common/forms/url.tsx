'use client'

import { FormEvent, useState } from 'react'
import TextInput from '@component/common/forms/textInput'
import SvgImg from '@component/common/svg'
import { ErrorProps, FormValuesProps, InputProps } from '@component/common/types'
import { emailRegex, urlRegex } from '@component/common/functions'

function FormURL() {
  const [formError, setFormError] = useState<ErrorProps[] | undefined>(undefined)
  const [formSubmission, setFormSubmission] = useState<boolean | undefined>(false)
  const [formValues, setFormValues] = useState<FormValuesProps>({formURL: ''})
  const [formStep, setFormStep] = useState<number>(1)

  function isValid(value: string, isEmail?: boolean, isURL?: boolean): boolean {
    if (
      (!!value && value?.trim() !== '')
      && ((isEmail && emailRegex.test(value)) || !isEmail)
      && ((isURL && urlRegex.test(value)) || !isURL)
    ) return true
    
    return false
  }

  function handleOnChange(input: InputProps, isRequired?: boolean, feedback?: string) {
    const { name, value } = input
    setFormValues((prev) => ({ ...prev, [name]: value }))
    !!isRequired && handleErrors(input, isRequired && !!feedback ? feedback : '')
  }

  function handleOnBlur(input: InputProps, isRequired?: boolean, feedback?: string, isEmail?: boolean, isURL?: boolean) {
    !!isRequired && handleErrors(input, isRequired && !!feedback ? feedback : '', isEmail, isURL)
  }
 
  function handleErrors(input: InputProps, errorMessage: string, isEmail?: boolean, isURL?: boolean) {
    const { name, value } = input
    const errorObj = { input: name, message: errorMessage } as ErrorProps
    const activeError = !!formError?.find(error => error?.input === name)
    if (formSubmission || formSubmission === undefined) resetSubmissionError()

    if (!isValid(value, isEmail, isURL) && !activeError) {
      setFormError(
        errors => errors && errors?.length > 0 ?
        [...errors, errorObj] :
        [errorObj]
      )
      return
    }

    if (isValid(value, isEmail, isURL) && activeError) {
      setFormError(errors => errors?.filter(error => error?.input !== name))
      return
    }
  }

  function handleResetInput(inputName: string) {
    setFormValues((prev) => ({ ...prev, [inputName]: '' }))
    setFormError(errors => errors?.filter(error => error?.input !== inputName))
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
      <div className='form-group'>
        <h2><strong>Step 1</strong></h2>
        <p>Type or paste a URL in the field below and we can start generating some content.</p>
        <TextInput
          type={'url'}
          name={'formURL'}
          value={formValues.formURL}
          error={formError?.find(error => error?.input === 'formURL')}
          label={'Webpage URL'}
          handleOnChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          handleResetInput={handleResetInput}
          feedbackMessage={'Please provide a valid URL'}
          isRequired={true}
          helperText={'Example: https://www.informaticsinc.com'}
          isURL={true}
        />
      </div>
      {formStep > 1 ? (
        <>
          <hr className='form-group-divider' />
          <div className='form-group'>
            <h2><strong>Step 2</strong></h2>
            <p>Type or paste a URL in the field below and we can start generating some content.</p>
          </div>
        </>
      ) : null}
      <div className='form-group form-actions'>
        {formSubmission === undefined ? (
          <em className="loader"><span className="loader-icn"><span></span><span></span><span></span><span></span></span> Loading</em>
        ) : (
          <>
            {formStep > 1 ? (
              <button
                type="button"
                className='btn btn-icn'
                aria-label='Previous Step'
                onClick={() => { setFormStep(currentStep => currentStep - 1) }}
              >
                <SvgImg name={'back'} type={'icn'} role={'img'} width={16} height={16} /> Previous Step
              </button>
            ) : null}
            <button
              type="button"
              className='btn btn-icn'
              aria-label='Next Step'
              disabled={!formValues.formURL ? true : false}
              onClick={() => { setFormStep(currentStep => currentStep + 1) }}
            >
              Next Step <SvgImg name={'next'} type={'icn'} role={'img'} width={16} height={16} />
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default FormURL