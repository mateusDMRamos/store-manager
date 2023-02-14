const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsControllers } = require('../../../src/controllers/index');

const { productServices } = require('../../../src/services/index');
const { allProducts, singleProduct, newProduct } = require('./mocks/productsMocks');

describe('Testes de unidade da camada controler para o controler de produtos', function () {
  it('Verifica se a função de buscar todas os produtos está funcionando', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productServices, 'getAllProducts')
      .resolves({ type: null, message: allProducts });
    
    await productsControllers.getAllProds(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Verifica se a função de buscar os produtos por id está funcionando com um id válido', async function () {
    const res = {};
    const req = { params: { id: 1 }};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productServices, 'findById')
      .resolves({ type: null, message: singleProduct });

    await productsControllers.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(singleProduct);
  });


  it('Verifica se a função de creiar os produtos por nome está funcionando com um nome válido', async function () {
    const res = {};
    const req = { body: { name: 'product X' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productServices, 'setNewProduct')
      .resolves({ type: null, message: newProduct });

    await productsControllers.newProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  afterEach(function () {
    sinon.restore();
  });
});