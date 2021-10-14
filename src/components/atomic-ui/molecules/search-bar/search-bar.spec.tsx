import React from "react";
import { render } from '@testing-library/react';
import SearchBar from "./search-bar";

describe("SearchBar atom tests", () => {
  test(`SearchBar component render`, () => {
    const { container } = render(
      <SearchBar searchInput="This is a input" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
