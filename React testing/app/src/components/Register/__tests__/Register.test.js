import { render, screen,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Register from "../Register"

describe("Register component", () => {
    it("should render Register component", () => {
        render(<Register />)
        const registerElement = screen.getByText(/register/i)
        expect(registerElement).toBeInTheDocument()
    })
    it("Button render",()=>{
        render(<Register />)
        const register = screen.getByRole("button")
        expect(register).toBeInTheDocument()
    })
    it("Register Component Work",()=>{
        render(<Register />)
        const input = screen.getByPlaceholderText("email");
        fireEvent.change(input,{target: { value: "ritvikshukla261@gmail.com" }})
        const register = screen.getByRole("button")
        fireEvent.click(register)
        expect(screen.getByText(/registered/i)).toBeInTheDocument()
    })
});