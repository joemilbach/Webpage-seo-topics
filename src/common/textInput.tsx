import React from 'react'
import { TextInputProps } from '@component/common/types'

const TextInput = React.memo(function TextInput(textInputProps: TextInputProps) {
  const required = !!textInputProps?.isRequired ? textInputProps.isRequired : false
  const feedback = !!textInputProps?.feedbackMessage ? textInputProps.feedbackMessage : 'Please fill in'
  const inputProps = {
    required,
    id: textInputProps.name,
    name: textInputProps.name,
    className: !!textInputProps?.value && textInputProps.value?.trim() !== '' ? `form-control form-control-${textInputProps.type} valid` : `form-control  form-control-${textInputProps.type}`,
    value: textInputProps?.value
  }

  function Suggestions(suggestionProps: any): React.ReactElement | null {
    return(
      <div className={!suggestionProps.list || suggestionProps.list?.length < 1 ? 'form-suggest' : 'form-suggest active'}>
         <ol className='form-suggest-list'>
          {textInputProps.suggestions}
        </ol>
      </div>
    )
  }

  return (
    <>
    <div className={!!textInputProps?.error ? 'form-group error' : 'form-group'}>
      {textInputProps.type === 'textarea' ? (
        <textarea
          key={textInputProps.name}
          {...{...inputProps}}
          rows={!!textInputProps?.rows ? textInputProps.rows : 3}
          onChange={input => textInputProps.handleOnChange(
            { name: input.target.name, value: input.target.value },
            required,
            feedback,
            false
          )}
          onBlur={input => textInputProps.handleOnBlur(
            { name: input.target.name, value: input.target.value },
            required,
            feedback,
            !!textInputProps?.isEmail ? textInputProps.isEmail : false,
            !!textInputProps?.isURL ? textInputProps.isURL : false
          )}
          onKeyUp={event => !!textInputProps.handleOnKeyUp ? textInputProps.handleOnKeyUp(event) : null}
        ></textarea>
      ) : (
        <input
          key={textInputProps.name}
          type={textInputProps.type}
          {...{...inputProps}}
          onChange={input => textInputProps.handleOnChange(
            { name: input.target.name, value: input.target.value },
            required,
            feedback,
            false
          )}
          onBlur={input => textInputProps.handleOnBlur(
            { name: input.target.name, value: input.target.value },
            required,
            feedback,
            !!textInputProps?.isEmail ? textInputProps.isEmail : false,
            !!textInputProps?.isURL ? textInputProps.isURL : false
          )}
          onKeyUp={event => !!textInputProps.handleOnKeyUp ? textInputProps.handleOnKeyUp(event) : null}
        />
      )}
      <label className="form-label" htmlFor={textInputProps.name}>
        {textInputProps.label}
        {required ? <sup>*</sup> : null}
      </label>
      {required && <em className="form-feedback">{textInputProps?.error?.message}</em>}
      {textInputProps.type === 'search' ? (
        <button type="button" className='btn-reset' aria-label='Reset Input' onClick={() => { !!textInputProps?.handleResetInput ? textInputProps.handleResetInput(textInputProps.name) : null }}>
          <span>Reset</span>
        </button>
      ) : null}
    </div>
    {!!textInputProps?.helperText ? textInputProps.helperText : null}
    <Suggestions list={!!textInputProps?.suggestions ? textInputProps.suggestions : []} />
    </>  
  );
})

export default TextInput