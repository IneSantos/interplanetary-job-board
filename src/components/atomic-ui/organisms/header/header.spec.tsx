import React from "react";
import { render } from '@testing-library/react';
import Header from "./header";

describe("Header atom tests", () => {
  test(`Header component render`, () => {
    const { container } = render(
      <Header searchInput="This is an input" handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
