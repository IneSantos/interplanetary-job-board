import React from "react";
import { render } from '@testing-library/react';
import Board from "./board";

describe("Board atom tests", () => {
  test(`Board component render with no lists`, () => {
    const { container } = render(
      <Board clearFilters={jest.fn()} jobs={[]} accordionOptions={[]} searchInput="This is a search input" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
