const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models/index');

const connection = require('../../../src/connection');
const { allProducts } = require('./mocks/productsMocks');

describe('Testes de unidade da camada model para o model de produtos', function () {
  it('Verifica se a função de buscar todas os produtos está funcionando', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Verifica se a função de buscar os produtos por id está funcionando', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModel.findProductById(1);
    expect(result).to.be.deep.equal(allProducts[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});