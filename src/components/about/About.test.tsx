import {render} from "@testing-library/react"
import About from "./About"

describe("testing abut component", function(){
    test("render about image", function(){
        const {getByTestId} = render(<About />)
        const image = getByTestId("about-image")
        expect(image).toBeTruthy()
    })

    test("render resume div", async function(){
        const {getByTestId} = render(<About />)
        const resume = getByTestId("resume")
        expect(resume).toBeTruthy()
    })
});