import React from "react";
import { render } from '@testing-library/react';
import JobDetails from "./job-details";

describe("JobDetails atom tests", () => {
  test(`JobDetails component render`, () => {
    const { container } = render(
      <JobDetails company="This is a company" location="This is a location" contract="This is a contract"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
