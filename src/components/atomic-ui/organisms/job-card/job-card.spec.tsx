import React from "react";
import { render } from '@testing-library/react';
import JobCard from "./job-card";

describe("JobCard atom tests", () => {
  test(`JobCard component render`, () => {
    const { container } = render(
      <JobCard position="This is a position" company="This is a company" location="This is a location" contract="This is a contract" skills={[]} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
