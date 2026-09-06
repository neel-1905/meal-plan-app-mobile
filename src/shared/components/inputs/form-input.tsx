// components/FormInput.tsx
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { BaseInput } from "./base-input";
import { TextInputProps } from "react-native";

interface FormInputProps<T extends FieldValues> extends Omit<
  TextInputProps,
  "value" | "onChangeText"
> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  rules?: object;
  rightElement?: React.ReactNode;
  containerClassName?: string;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  rules,
  rightElement,
  containerClassName,
  ...textInputProps
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <BaseInput
          label={label}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          error={error?.message}
          rightElement={rightElement}
          containerClassName={containerClassName}
          {...textInputProps}
        />
      )}
    />
  );
}
