// import type { ReactNode } from 'react';
// import React from 'react';

export interface Props {
  children: React.ReactNode;
}

export function NiceButton(props: Props) {
  return <button style={{ backgroundColor: "blue" }} {...props} />;
}