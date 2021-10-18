const { GraphQLObjectType, GraphQLString } = require("graphql");

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    adsh: {
      type: GraphQLString
    },
    cik: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    sic: {
      type: GraphQLString
    },
    countryba: {
      type: GraphQLString
    },
    stprba: {
      type: GraphQLString
    },
    cityba: {
      type: GraphQLString
    },
    zipba: {
      type: GraphQLString
    },
    bas1: {
      type: GraphQLString
    },
    bas2: {
      type: GraphQLString
    },
    baph: {
      type: GraphQLString
    },
    countryma: {
      type: GraphQLString
    },
    stprma: {
      type: GraphQLString
    },
    cityma: {
      type: GraphQLString
    },
    zipma: {
      type: GraphQLString
    },
    mas1: {
      type: GraphQLString
    },
    mas2: {
      type: GraphQLString
    },
    countryinc: {
      type: GraphQLString
    },
    stprinc: {
      type: GraphQLString
    },
    ein: {
      type: GraphQLString
    },
    former: {
      type: GraphQLString
    },
    changed: {
      type: GraphQLString
    },
    afs: {
      type: GraphQLString
    },
    wksi: {
      type: GraphQLString
    },
    fye: {
      type: GraphQLString
    },
    form: {
      type: GraphQLString
    },
    period: {
      type: GraphQLString
    },
    fy: {
      type: GraphQLString
    },
    fp: {
      type: GraphQLString
    },
    filed: {
      type: GraphQLString
    },
    accepted: {
      type: GraphQLString
    },
    prevrpt: {
      type: GraphQLString
    },
    detail: {
      type: GraphQLString
    },
    instance: {
      type: GraphQLString
    },
    nciks: {
      type: GraphQLString
    },
    aciks: {
      type: GraphQLString
    },
    tag: {
      type: GraphQLString
    },
    version: {
      type: GraphQLString
    },
    coreg: {
      type: GraphQLString
    },
    ddate: {
      type: GraphQLString
    },
    qtrs: {
      type: GraphQLString
    },
    uom: {
      type: GraphQLString
    },
    value: {
      type: GraphQLString
    },
    footnote: {
      type: GraphQLString
    }
  })
});

module.exports.CompanyType = CompanyType;
