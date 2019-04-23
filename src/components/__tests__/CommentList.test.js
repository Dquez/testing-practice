import React from "react";
import {mount} from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;
const initialState = {comments: ["First", "Second"]}
beforeEach(()=> wrapped = mount(
    <Root initialState={initialState}>
        <CommentList />
    </Root>
));
afterEach(()=> wrapped.unmount());

it("creates one LI per comment", () =>{
    expect(wrapped.find("li").length).toEqual(2);
    
})

it("shows the text for each comment", () =>{
    expect(wrapped.find("li").contains("First"));
    // wrapped.render() returns a cheerio wrapper, similar to jQuery's $("#id")
     expect(wrapped.render().text()).toContain("Second");
    
})

// describe("the textarea", ()=>{
//     beforeEach(()=>{
//     // simulates the "event" that happens onChange, merges as the event that gets passed to the actual function in react
//     wrapped.find("textarea").simulate("change",{
//         target: {value: "new comment"}
//     })
//     wrapped.update();
//     })
//     it("has a textarea users can type in", ()=>{
//         expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
//     })
    
//     it("submits user input and clears textarea", ()=>{
//         wrapped.find("textarea").simulate("submit")
//         wrapped.update();
//         expect(wrapped.find("textarea").prop("value")).toEqual("");
//     })
// })

