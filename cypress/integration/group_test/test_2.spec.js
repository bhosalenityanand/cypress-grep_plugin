/// <reference types="cypress" />

describe('group test', () => {
    it('Devops ', { tags: ["@Devops"] }, () => {
        expect(1).to.eql(1)
    })

    it('Test1 ', { tags: ["@Test1"] }, () => {
        expect(1).to.eql(1)
    })

    it('Sanity ', { tags: ["@Sanity"] }, () => {
        expect(1).to.eql(1)
    })

    it('Devops and Test1', { tags: ["@Devops", "@Test1"] }, () => {
        expect(1).to.eql(1)
    })

    it('Devops and Test1', { tags: ["@Devops", "@Test1"] }, () => {
        expect(1).to.eql(1)
    })

    it('Sanity and Test1', { tags: ["@Sanity", "@Test1"] }, () => {
        expect(1).to.eql(1)
    })
    it('Request test',()=>{
        expect(1).to.eql(1)
    })

})