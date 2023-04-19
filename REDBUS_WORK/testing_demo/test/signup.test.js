const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require("../index");

chai.use(chaiHttp);
const expect=chai.expect;


describe('app',()=>{
describe('GET /signup',()=>{
    it('should check signup credentials',(done)=>{
            chai.request(app)
            .get('/signup')
            .end((err,res)=>{
                var flag=0;
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.not.null
                expect(res.body).to.be.an('array').that.is.not.empty
                expect(res.body[0].password).to.have.lengthOf(9)
                
                done()
            })
    });
});
});