'use client'

import { FormEvent, useState } from 'react'
import FileInput from '@component/common/forms/fileInput'
import { ErrorProps, FormValuesProps } from '@component/common/types'

type FileInputProps = {
  name: string;
  value: string;
  file?: FileList | null;
}

function FormUpload() {
  const [formError, setFormError] = useState<ErrorProps[] | undefined>(undefined)
  const [formSubmission, setFormSubmission] = useState<boolean | undefined>(false)
  const [formValues, setFormValues] = useState<FormValuesProps>({formFile: ''})
  const [currentFile, setCurrentFile] = useState<File>()

  function handleOnChange(input: FileInputProps, isRequired?: boolean, feedback?: string) {
    const { name, value, file } = input
    setFormValues((prev) => ({ ...prev, [name]: value }))
    !!file && file?.length > 0 && setCurrentFile(file?.[0])
    !!isRequired && handleErrors(input, isRequired && !!feedback ? feedback : '')
  }
 
  function handleErrors(input: FileInputProps, errorMessage: string) {
    const { name, file } = input
    const errorObj = { input: name, message: errorMessage } as ErrorProps
    const activeError = !!formError?.find(error => error?.input === name)
    if (formSubmission || formSubmission === undefined) resetSubmissionError()

    if ((!file || file?.length < 1) && !activeError) {
      setFormError(
        errors => errors && errors?.length > 0 ?
        [...errors, errorObj] :
        [errorObj]
      )
      return
    }

    if (!!file && file?.length > 0 && activeError) {
      setFormError(errors => errors?.filter(error => error?.input !== name))
      return
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setFormSubmission(undefined)

    const postError = false

    console.log("currentFile: ", currentFile)

    if (!postError) {
      setFormSubmission(true)
      resetFormInput()
      return
    }
  }

  function resetSubmissionError() {
    setFormSubmission(false)
    setFormError(undefined)
  }

  function resetFormInput() {
    setFormValues({formFile: ''})
  }

  return (
    <form className="form form-minimal" onSubmit={handleSubmit}>
      <FileInput
        type={'file'}
        name={'formFile'}
        accept={'application/pdf,application/msword,text/plain'}
        multiple={false}
        error={formError?.find(error => error?.input === 'formFile')}
        label={'Upload Document (pdf, docx, doc)'}
        handleOnChange={handleOnChange}
        handleResetInput={resetFormInput}
        feedbackMessage={'Please upload a .pdf, .docx, or .doc'}
        isRequired={true}
      />
      <div className='form-group'>
        {formSubmission === undefined ? (
          <em className="loader"><span className="loader-icn"><span></span><span></span><span></span><span></span></span> Loading</em>
        ) : (
          <>
            {!!formError && !!formError?.find(error => error?.input === 'formSubmit') && <em><strong>Error: </strong>{formError?.find(error => error?.input === 'formSubmit')?.message}</em>}
            <button type="submit" className="btn" disabled={!formValues.formFile ? true : false}>Submit</button>
            {formSubmission ? (
              <em className="form-feedback success">Your message is on its way</em>
            ) : (
              <small className="form-require-text"><em><sup>*</sup>File required</em></small>
            )}
          </>
        )}
      </div>
    </form>
  );
}

export default FormUpload