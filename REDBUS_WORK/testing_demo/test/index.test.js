const chai=require('chai');
const chaiHttp=require('chai-http');
const app=require("../index");

chai.use(chaiHttp);
const expect=chai.expect;

describe('app',()=>{
    describe('GET /',()=>{
        it('should return "Welcome to Unit Testing',(done)=>{
                chai.request(app)
                .get('/')
                .end((err,res)=>{
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.text).to.equal("Welcome to Unit Testing")
                    done()
                })
        });
    });



    describe('GET /users',()=>{
        it(`should return a array of users`,(done)=>{
                chai.request(app)
                .get('/users')
                .end((err,res)=>{
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.not.null
                    expect(res.body).to.be.an('array')
                    expect(res.body[0].name).to.equal("Puneet")
                    done()
                })
        });
    });

        
    });