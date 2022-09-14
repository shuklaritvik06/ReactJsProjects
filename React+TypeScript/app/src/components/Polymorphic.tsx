import React from "react";

type PolyProps<E extends React.ElementType> = {
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: React.ReactNode;
  as?: E;
};

type AllProps<E extends React.ElementType> = PolyProps<E> &
  Omit<React.ComponentProps<E>, keyof PolyProps<E>>;

export const Polymorphic = <E extends React.ElementType>({
  size,
  color,
  children,
  as,
}: AllProps<E>)=>{
  return <></>;
}

// as: prop for polymorphic component
