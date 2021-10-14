import React from "react";
import { render } from '@testing-library/react';
import JobDescription from "./job-description";

describe("JobDescription atom tests", () => {
  test(`JobDescription component render`, () => {
    const { container } = render(
      <JobDescription description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
