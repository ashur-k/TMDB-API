import React from 'react'
import ReactDOM from 'react-dom'
import Button from './../button'
@jest-environment jsdom

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})