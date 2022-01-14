import {render} from "@testing-library/react"
import Contact from "./Contact"

describe("testing contact component", function(){
    test("render contact list", function(){
        const {getByTestId} = render(<Contact />)
        const list = getByTestId("contact-list")
        expect(list).toBeTruthy()
    })

    test("render all 4 title hedings", function(){
        const {getAllByRole} = render(<Contact />)
        const titles = getAllByRole("heading")
        expect(titles).toHaveLength(4)
    })
});