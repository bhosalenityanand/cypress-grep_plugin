/// <reference types="cypress" />

// here we run the test cases  by grep plugin

describe('run the group test cases by greep plugin',()=>{
    it('Smoke test',()=>{
        expect(1).to.eql(1)
    })
    it('Smoke test',()=>{
        expect(1).to.eql(1)
    })
    it('Smoke test',()=>{
        expect(1).to.eql(1)
    })

    it('Request test',{tag:["@Request"]},()=>{
        expect(1).to.eql(1)
    })

    it('Sanity test',()=>{
        expect(1).to.eql(1)
    })

    it('devops test',()=>{
        expect(1).to.eql(1)
    })
})

