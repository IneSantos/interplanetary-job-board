import React from "react";
import { render } from '@testing-library/react';
import CardBody from "./card-body";

describe("CardBody atom tests", () => {
  test(`CardBody component render`, () => {
    const { container } = render(
      <CardBody skills={[]} description="This is a description"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
