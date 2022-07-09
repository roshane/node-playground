import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("<LoginForm/>", () => {
  it(" [2 < undefined] should return false", () => {
    expect(2 < undefined).toBe(false);
  });

  it("<LoginForm/> should be initially empty", () => {
    let { getByPlaceholderText, getByTestId } = render(<LoginForm />);
    let userNameInputElement = getByPlaceholderText(/user name/i);
    let pOutputElement = getByTestId(/user-name-output/i);
    expect(userNameInputElement.value).toBe("");
    expect(pOutputElement.innerHTML).toBe("");
  });

  it("<LoginForm/> should display username correctly on change", async () => {
    let { getByTestId, getByPlaceholderText } = render(<LoginForm />);
    let userNameInputElement = getByPlaceholderText(/user name/i);
    const fakeUserName = "John Doe";
    await userEvent.type(userNameInputElement, fakeUserName);
    let paragraphUserName = getByTestId(/user-name-output/i);
    expect(paragraphUserName.innerHTML).toBe(fakeUserName);
  });
});
