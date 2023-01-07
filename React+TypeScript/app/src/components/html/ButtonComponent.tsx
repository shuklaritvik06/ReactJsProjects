import React from 'react'

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    children: string;
} & Omit<React.ComponentProps<'button'>,'children'>;

export default function ButtonComponent({variant,children,...rest}: ButtonProps) {
  return (
    <>
        <button className={`${variant}}`} {...rest}>{children}</button>
    </>
  )
}
