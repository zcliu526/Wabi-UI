import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType} from "./Button";
import exp from "constants";

const defaultProps = {
    onClick: jest.fn(),
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps} >Hello</Button>);
    const element = wrapper.getByText("Hello") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct button based on different props", () => {
    const wrapper = render(<Button {...testProps} >Hello</Button>);
    const element = wrapper.getByText("Hello");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
    
  });
  it("should render a link when btyType is link && href is provided", () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.google.com">Link Button</Button>);
    const element = wrapper.getByText("Link Button");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it("should render disabled button when disabled set to be true", () => {
    const wrapper = render(<Button {...disabledProps}>Hello</Button>);
    const element = wrapper.getByText("Hello") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
