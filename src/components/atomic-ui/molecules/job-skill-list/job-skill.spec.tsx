import React from "react";
import { render } from '@testing-library/react';
import SkillList from "./job-skill-list";

describe("SkillList atom tests", () => {
  test(`SkillList component render`, () => {
    const { container } = render(
      <SkillList skills={["This is a skill"]}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
