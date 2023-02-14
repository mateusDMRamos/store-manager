const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models/index');

const connection = require('../../../src/connection');
const { allSales, oneSaleReturn, saleCreationReturn } = require('./mocks/salesMocks');

describe('Testes de unidade da camada model para o model de sales', function () {
  it('Verifica se a função de buscar todas as vendas está funcionando', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);
    const result = await salesModel.findAllSales();
    expect(result).to.be.deep.equal(allSales);
  });

  it('Verifica se a função de buscar as vendas por id está funcionando com um id válido', async function () {
    sinon.stub(connection, 'execute').resolves([oneSaleReturn]);
    const result = await salesModel.findSaleById(1);
    expect(result).to.be.deep.equal(oneSaleReturn);
  });


  it('Verifica se a função de criar vendas está funcionando com um nome válido', async function () {
    const date = new Date();
    const insertId = 1;
    sinon.stub(connection, 'execute').resolves([{ insertId }]);

    const result = await salesModel.writeNewSales(date);
    expect(result).to.be.deep.equal(insertId);

  });
  afterEach(function () {
    sinon.restore();
  });
});