import React from "react";
import { render } from '@testing-library/react';
import JobList from "./job-list";

describe("JobList atom tests", () => {
  test(`JobList component render with no list`, () => {
    const { container } = render(
      <JobList jobs={[]}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
