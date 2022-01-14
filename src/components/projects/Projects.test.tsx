import {render} from "@testing-library/react"
import Projects from "./Projects"

describe("testing projects component", function(){
    test("render projects image", function(){
        const {getByTestId} = render(<Projects />)
        const image = getByTestId("projects-image")
        expect(image).toBeVisible()
    })

    test("render projects title", function(){
        const {getByText} = render(<Projects />)
        const title = getByText("some of my projects...")
        expect(title).toBeTruthy()
    })

    test("render project items", function(){
        const {getByTestId} = render(<Projects />)
        const projects = getByTestId("projects")
        expect(projects).toBeTruthy()
    })
});