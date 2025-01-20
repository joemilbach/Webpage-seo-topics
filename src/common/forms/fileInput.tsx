import React from 'react'
import { FileInputProps } from '@component/common/types'

type HelperTextProps = {
  value?: string;
}

const FileInput = React.memo(function TextInput(fileInputProps: FileInputProps) {
  const required = !!fileInputProps?.isRequired ? fileInputProps.isRequired : false
  const feedback = !!fileInputProps?.feedbackMessage ? fileInputProps.feedbackMessage : 'Please fill in'
  const inputProps = {
    required,
    id: fileInputProps.name,
    name: fileInputProps.name,
    className: `form-control form-control-${fileInputProps.type}`
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
      <div className={!!fileInputProps?.error ? 'form-group file-input error' : 'form-group file-input'}>
        <input
          key={fileInputProps.name}
          type={fileInputProps.type}
          {...{...inputProps}}
          onChange={input => fileInputProps.handleOnChange(
            { name: input.target.name, value: input.target.value, file: input.target.files },
            required,
            feedback,
            false
          )}
        />
        <label className="form-label" htmlFor={fileInputProps.name}>
          {fileInputProps.label}
          {required ? <sup>*</sup> : null}
        </label>
        {required && <em className="form-feedback">{fileInputProps?.error?.message}</em>}
        <button
          type="button"
          className='btn-reset'
          aria-label='Reset Input'
          onClick={() => {
            !!fileInputProps?.handleResetInput
            ? fileInputProps.handleResetInput(fileInputProps.name)
            : null
          }}
        >
          <span>Reset</span>
        </button>
      </div>
      <HelperText value={!!fileInputProps?.helperText ? fileInputProps.helperText : ''} />
    </>
  );
})

export default FileInput