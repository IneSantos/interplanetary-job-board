import React from "react";
import { render } from '@testing-library/react';
import JobBoard from "./job-board";

describe("JobBoard atom tests", () => {
  test(`JobBoard component render with no lists`, () => {
    const { container } = render(
      <JobBoard clearFilters={jest.fn()} jobs={[]} accordionOptions={[]} searchInput="This is a search input" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
