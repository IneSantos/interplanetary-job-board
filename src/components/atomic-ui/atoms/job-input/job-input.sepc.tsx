import React from "react";
import { render } from '@testing-library/react';
import JobInput from "./job-input";

describe("JobInput atom tests", () => {
  test(`JobInput component render`, () => {
    const { container } = render(
      <JobInput input="" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
