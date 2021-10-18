const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");

const { CompanyType } = require('../types/company.type');
const { CompanyService } = require('../services/company.service');

const companyService = new CompanyService();

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getCompanies: {
      type: new GraphQLList(CompanyType),
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve(source, args) {
        return companyService.getCompanies(args.name);
      }
    },
    getCompany: {
      type: CompanyType,
      args: {
        adsh: {
          type: GraphQLString
        }
      },
      resolve(source, args) {
        return companyService.getCompany(args.adsh);
      }
    }
  }
});

module.exports.RootQuery = RootQuery;
