const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require("../index");

chai.use(chaiHttp);
const expect=chai.expect;
const login=[
    
    {'username':"Gaurav", 'password':"Gaurav123"},
    {'username':"Jatin", 'password':"Jatin123"}
]
describe('app',()=>{
describe('GET /login',()=>{
    it('should return login credentials',(done)=>{
            chai.request(app)
            .get('/login')
            .end((err,res)=>{
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.not.null
                expect(res.body).to.be.an('array').that.is.not.empty
                expect(res.body[0]).to.have.property('password')
                expect(res.body[0].password).to.have.lengthOf(9)
                login.forEach((item)=>{
                    if(res.body[0].password==item.password)
                        flag=1;
                })
                expect(flag).to.equal(1);
                done()
            })
    });
});
});