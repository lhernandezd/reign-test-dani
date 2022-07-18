import styled from "styled-components";

export const Text = styled.p(
  ({
    size = "14",
    fontWeight = "400",
    color = "#343434",
    align = "left",
    lineHeight = 1.57,
    ...props
  }) => ({
    fontFamily: "Roboto",
    fontSize: `${size}px`,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    color: color,
    textAlign: align,
    margin: 0,
    ...props,
  })
);
export const Header = styled.h1(
  ({ size = "28", color = "#3b3b3b", align = "left", ...props }) => ({
    fontFamily: "Roboto",
    fontSize: `${size}px`,
    lineHeight: 1.57,
    color: color,
    textAlign: align,
    ...props,
  })
);
