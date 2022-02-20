import React from "react";
import { render } from "@testing-library/react";
import { BasicErrorFallback } from "./error-fallback.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicErrorFallback />);
  const rendered = getByText("hello world!");
  expect(rendered).toBeTruthy();
});
