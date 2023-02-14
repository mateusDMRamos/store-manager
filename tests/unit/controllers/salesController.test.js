const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers/index');

const { salesService } = require('../../../src/services/index');
const { allSales, oneSaleReturn, saleCreationReturn } = require('./mocks/salesMocks');

describe('Testes de unidade da camada controler para o controler de sales', function () {
  it('Verifica se a função de buscar todas as vendas está funcionando', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'getAllSales')
      .resolves({ type: null, message: allSales });

    await salesController.allSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it('Verifica se a função de buscar as vendas por id está funcionando com um id válido', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'getSaleById')
      .resolves({ type: null, message: oneSaleReturn });

    await salesController.findSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneSaleReturn);
  });


  it('Verifica se a função de creiar vendas está funcionando com um nome válido', async function () {
    const res = {};
    const req = {
      body: [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ] };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'setNewSales')
      .resolves(saleCreationReturn);

    await salesController.newSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(saleCreationReturn);
  });

  afterEach(function () {
    sinon.restore();
  });
});