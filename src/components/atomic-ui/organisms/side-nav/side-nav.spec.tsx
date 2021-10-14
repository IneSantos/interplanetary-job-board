import React from "react";
import { render } from '@testing-library/react';
import SideNav from "./side-nav";

describe("SideNav atom tests", () => {
  test(`SideNav component render with no lists`, () => {
    const { container } = render(
      <SideNav clearFilters={jest.fn()} accordionOptions={[]} searchInput="This is a search input" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
