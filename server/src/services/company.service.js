const { CompanyModel } = require('../schemas/company.schema');

class CompanyService {
  constructor() {}

  async getCompanies(name) {
    const companies = await CompanyModel.find({
      name: new RegExp(`${ name }`, 'i')
    });

    return companies;
  }

  async getCompany(id) {
    const company = await CompanyModel.findOne({
      adsh: id
    });

    return company;
  }
}

module.exports.CompanyService = CompanyService;
