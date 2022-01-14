import {render, screen} from "@testing-library/react"
import Home from "./Home"

describe("testing home component", function(){
    test("should render first name & laste name passed into title prop", function(){
        render(
            <Home firstName="Vladimir" lastName="Monarov"/>
        )
        const title = screen.getByText(/Vladimir Monarov/i)
        expect(title).toBeTruthy()
    })

    test("render title text", function(){
        const {getByText} = render(<Home />)
        const title = getByText(/front end developer/i)
        expect(title).toBeTruthy()
    })
});