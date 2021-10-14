import React from "react";
import { render } from '@testing-library/react';
import JobTitle from "./job-title";

describe("JobTitle atom tests", () => {
  test(`JobTitle component render`, () => {
    const { container } = render(
      <JobTitle position="This is a position"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
