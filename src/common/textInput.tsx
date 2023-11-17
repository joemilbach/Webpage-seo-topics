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

  type HelperTextProps = {
    value?: string;
  }

  function HelperText({ value }: HelperTextProps): React.ReactElement | null {
    if (!value || (!!value && value?.trim() === '')) return null;
    return (
      <small className={'form-helper-text'}><em>
        {value}
      </em></small>
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
        {textInputProps.type === 'search' || !!textInputProps?.isURL ? (
          <button
            type="button"
            className='btn-reset'
            aria-label='Reset Input'
            onClick={() => {
              !!textInputProps?.handleResetInput
              ? textInputProps.handleResetInput(textInputProps.name)
              : null
            }}
          >
            <span>Reset</span>
          </button>
        ) : null}
      </div>
      <HelperText value={!!textInputProps?.helperText ? textInputProps.helperText : ''} />
    </>
  );
})

export default TextInput