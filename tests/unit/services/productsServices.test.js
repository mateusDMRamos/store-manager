const { expect } = require('chai');
const sinon = require('sinon');
const { productServices } = require('../../../src/services/index');
const { productsModel } = require('../../../src/models/index');

const { allProducts, idError, singleProduct } = require('./mocks/productsMocks');


describe('Testes de unidade da camada services para o service de produtos', function () {
  it('Verifica se a função de buscar todas os produtos está funcionando', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(allProducts);
    const result = await productServices.getAllProducts();
    expect(result.message).to.be.deep.equal(allProducts);
  });

  it('Verifica se a função de buscar um produto por id está encontrando um produto válido', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(singleProduct);
    const result = await productServices.findById(1);
    expect(result.message).to.be.deep.equal(singleProduct);
  });

  it('Verifica se a função de buscar os produtos por id está retornando um erro quando é informado um id inválido', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(idError);
    const result = await productServices.findById(17);
    expect(result.message).to.be.deep.equal(idError);
  });

  afterEach(function () {
    sinon.restore();
  });
});