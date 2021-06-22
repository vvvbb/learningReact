import React from "react";

export default function WelcomeTiltle(props) {
  // console.log(props.primary);
  const CustomTag = props.primary ? `h1` : `h6`;

  return (
    <>
      <CustomTag>
        Welcome{props.user ? ` ${props.user}` : null}!
        {/* <u>{String(props.primary)}</u> */}
      </CustomTag>
    </>
  );
}
