import React from "react";
import { render } from '@testing-library/react';
import Accordion from "./accordion";

describe("Accordion atom tests", () => {
  test(`Accordion component render`, () => {
    const { container } = render(
      <Accordion id={"accordion1"} label="accordion1" content={null} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
