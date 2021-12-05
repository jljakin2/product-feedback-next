/**
 * @jest-environment jsdom
 */
import React from "react";

import { screen, render } from "@testing-library/react";
import MainMenu from "../components/MainMenu";

describe("MainMenu", () => {
  it("renders on screen", () => {
    const { debug } = render(<MainMenu />);
    debug();
    const menuEl = screen.getByTestId("menu");
    expect(menuEl).toBeInTheDocument();
  });
});
