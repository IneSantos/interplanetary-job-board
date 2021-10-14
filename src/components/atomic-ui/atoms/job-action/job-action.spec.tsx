import React from "react";
import { render } from '@testing-library/react';
import JobAction from "./job-action";

describe("JobAction atom tests", () => {
  test(`JobAction component render`, () => {
    const { container } = render(
      <JobAction />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
