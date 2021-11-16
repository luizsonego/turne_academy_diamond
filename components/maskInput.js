import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import ReactInputMask from 'react-input-mask'
export default function MaskInput({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return (
    <>
      <ReactInputMask 
        ref={inputRef} 
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        onFocus={clearError}
        {...rest} />
      { error && <span className="error">{error}</span>}
    </>
  )
}