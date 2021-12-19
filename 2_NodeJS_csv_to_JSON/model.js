const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    adsh: {
      type: String,
    },
    cik: {
      type: String
    },
    name: {
      type: String
    },
    sic: {
      type: String
    },
    countryba: {
      type: String
    },
    stprba: {
      type: String
    },
    cityba: {
      type: String
    },
    zipba: {
      type: String
    },
    bas1: {
      type: String
    },
    bas2: {
      type: String
    },
    baph: {
      type: String
    },
    countryma: {
      type: String
    },
    stprma: {
      type: String
    },
    cityma: {
      type: String
    },
    zipma: {
      type: String
    },
    mas1: {
      type: String
    },
    mas2: {
      type: String
    },
    countryinc: {
      type: String
    },
    stprinc: {
      type: String
    },
    ein: {
      type: String
    },
    former: {
      type: String
    },
    changed: {
      type: String
    },
    afs: {
      type: String
    },
    wksi: {
      type: String
    },
    fye: {
      type: String
    },
    form: {
      type: String
    },
    period: {
      type: String
    },
    fy: {
      type: String
    },
    fp: {
      type: String
    },
    filed: {
      type: String
    },
    accepted: {
      type: String
    },
    prevrpt: {
      type: String
    },
    detail: {
      type: String
    },
    instance: {
      type: String
    },
    nciks: {
      type: String
    },
    aciks: {
      type: String
    },
    tag: {
      type: String
    },
    version: {
      type: String
    },
    coreg: {
      type: String
    },
    ddate: {
      type: String
    },
    qtrs: {
      type: String
    },
    uom: {
      type: String
    },
    value: {
      type: String
    },
    footnote: {
      type: String
    }
}, {
    timestamps: true
});

const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = CompanyModel;
