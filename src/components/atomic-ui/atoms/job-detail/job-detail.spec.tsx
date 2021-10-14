import React from "react";
import { render } from '@testing-library/react';
import { JobDetailsEnum } from "./job-type";
import JobDetail from "./job-detail";

describe("JobDescription atom tests", () => {
  test(`JobDescription component render COMPANY`, () => {
    const { container } = render(
      <JobDetail type={JobDetailsEnum.COMPANY} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`JobDescription component render LOCATION`, () => {
    const { container } = render(
      <JobDetail type={JobDetailsEnum.LOCATION} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`JobDescription component render CONTRACT`, () => {
    const { container } = render(
      <JobDetail type={JobDetailsEnum.CONTRACT} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`JobDescription component render NONE`, () => {
    const { container } = render(
      <JobDetail type={JobDetailsEnum.NONE} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  
});
