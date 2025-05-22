import { FieldProps } from "simple-react-form"

export const InputComponent = (props: FieldProps) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={event => {
          props.onChange?.(event.target.value)
        }}
      />
    </div>
  )
}