import { screen, render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import Login from "../Login"

describe("Login Component test",()=>{
    it("renders the login component", () => {
        render(<Login />)
        const element = screen.getByText(/login component/i);
        expect(element).toBeInTheDocument();
    })
    it("Button Rendered",()=>{
        render(<Login />)
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
    })
    it("Login Component working properly",()=>{
        render(<Login />)
        const input = screen.getByPlaceholderText(/email/i);
        fireEvent.change(input,{target:{value:"ritvikshukla@gmail.com"}})
        const button = screen.getByRole("button");
        fireEvent.click(button);
        const alert = screen.getByText(/logged/i);
        expect(alert).toBeInTheDocument();
    })
})
