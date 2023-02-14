const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services/index');
const { salesModel } = require('../../../src/models/index');

const { allSales, oneSaleReturn } = require('./mocks/salesMocks');


describe('Testes de unidade da camada services para o service de sales', function () {
  it('Verifica se a função de buscar todas as sales está funcionando', async function () {
    sinon.stub(salesModel, 'findAllSales').resolves(allSales);
    const result = await salesService.getAllSales();
    expect(result.message).to.be.deep.equal(allSales);
  });

  it('Verifica se a função de buscar um produto por id está encontrando um produto válido', async function () {
    sinon.stub(salesModel, 'findSaleById').resolves(oneSaleReturn);
    const result = await salesService.getSaleById(1);
    expect(result.message).to.be.deep.equal(oneSaleReturn);
  });

  afterEach(function () {
    sinon.restore();
  });
});