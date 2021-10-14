import React from "react";
import { render } from '@testing-library/react';
import JobSkill from "./job-skill";

describe("JobSkill atom tests", () => {
  test(`JobSkill component render`, () => {
    const { container } = render(
      <JobSkill skill="This is a skill"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
