import {saveComment, SAVE_COMMENT} from "actions";

// it("receives a string as an argument", ()=>{
//     expect(saveComment).toEqual(["New Comment"])
// })
let action;
beforeEach(()=>{
    action = saveComment("New comment");
})
describe("saveComment", ()=>{
    it("has the correct type", ()=>{
        expect(action.type).toEqual(SAVE_COMMENT);
       
    })
    it("has the correct payload", ()=>{
        expect(action.payload).toEqual("New comment");
    })
})