import React from "react";
import { render } from '@testing-library/react';
import SearchButton from "./search-button";

describe("SearchButton atom tests", () => {
  test(`SearchButton component render`, () => {
    const { container } = render(
      <SearchButton/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
