import React from "react";
import { render } from '@testing-library/react';
import Checkbox from "./Checkbox";

describe("Checkbox atom tests", () => {
  test(`Checkbox component render`, () => {
    const { container } = render(
      <Checkbox label="checkbox" parent="checkbox" clearFilter={false} onChange={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
