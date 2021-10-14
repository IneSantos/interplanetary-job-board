import React from "react";
import { render } from '@testing-library/react';
import AccordionCheckbox from "./accordion-checkbox";

describe("AccordionCheckbox atom tests", () => {
  test(`AccordionCheckbox component render`, () => {
    const { container } = render(
      <AccordionCheckbox id={"accordion1"} label="accordion1" clearFilter={false} options={[]}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
