import {render,screen, fireEvent} from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

it("should render the basic fields", () => {
    //1. Arrange
    render(<Form/>)

    //2.Act
    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i});

    //3. Assert
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
});

it("should not submit the form with invalid credentials and show warnings", () => {
    //1.Arrange
    render(<Form/>)

    //2.Act
    const nameInput = screen.getByRole("textbox", {name: /name/i})
    userEvent.type(nameInput, "")

    const emailInput = screen.getByRole("textbox", {name: /email/i});
    userEvent.type(emailInput, "notvalidemail")

    userEvent.click(screen.getByRole("button", {name: /Sign In/i}));

    //3.Assert
    const alert = screen.getByText("Sorry something went wrong");
    expect(alert).toBeTruthy();

    const success = screen.queryByText(/Thank you for submitting/i);
    expect(success).toBeFalsy();

})

it("should submit the form when valid credentials are input", () => {
    //1.Arrange
    render(<Form/>)

    //2.Act
    const nameInput = screen.getByRole("textbox", {name: /name/i});
    userEvent.type(nameInput, "John Doe");

    const emailInput = screen.getByRole("textbox", {name: /email/i});
    userEvent.type(emailInput, "john@gmail.com");

    userEvent.click(screen.getByRole("button", {name: /Sign In/i}));

    //Assert
    const alert = screen.queryByText(/Sorry something went wrong/i);
    expect(alert).toBeFalsy();

    const success = screen.getByText(/Thank you for submitting/i);
    expect(success).toBeTruthy();

})