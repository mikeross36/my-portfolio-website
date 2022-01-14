import {render, fireEvent} from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"

const MockHeader = function(){
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
};

describe("testing Header component", function(){
    test("toggle mobile menu", function(){
        const {getByTestId} = render(<MockHeader />)
        const menuBtn = getByTestId("menu-btn")
        expect(menuBtn).toBeTruthy()
    })

    test("render burger span", function(){
        const {getByTestId} = render(<MockHeader />)
        const menuBtn = getByTestId("menu-btn")
        const burger = getByTestId("burger-span")
        fireEvent.click(menuBtn)
        expect(burger).toBeTruthy()
    })

    test("on toggle mobile menu nav to be visible", function(){
        const {getByTestId} = render(<MockHeader />)
        const menuBtn = getByTestId("menu-btn")
        const navEl = getByTestId("nav")
        fireEvent.click(menuBtn)
        expect(navEl).toBeVisible()
    })
});