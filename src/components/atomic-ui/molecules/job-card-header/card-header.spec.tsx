import React from "react";
import { render } from '@testing-library/react';
import CardHeader from "./card-header";

describe("CardHeader atom tests", () => {
  test(`CardHeader component render`, () => {
    const { container } = render(
      <CardHeader position="This is a position" company="This is a company" location="This is a location" contract="This is a contract"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
