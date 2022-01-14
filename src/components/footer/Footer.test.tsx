import {render} from "@testing-library/react"
import Footer from "./Footer"

describe("testing footer component", function(){
    test("reder copyright span", function(){
        const {getByTestId} = render(<Footer />)
        const copyright = getByTestId("copyright")
        expect(copyright).toBeTruthy()
    })
});