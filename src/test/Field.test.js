import { screen, render } from "@testing-library/react"
import Field from "../components/Field"

describe("Field", () => {
    test("is rendered", () => {
        render(<Field text="Sasa" />);

        expect(screen.getByText("Sasa")).toBeInTheDocument();
    })
})