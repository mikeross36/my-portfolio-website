import {render} from "@testing-library/react"
import Socials from "./Socials"

describe("testing sicial icons", function(){
    test("render social icons", function(){
        const {getByTestId} = render(<Socials />)
        const icons = getByTestId("social-icons")
        expect(icons).toBeVisible()
    })
});