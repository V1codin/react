class Validation {
  constructor() {
    this.maskNumber = /^\d{14}$/;
    this.maskCity = /^([а-яА-ЯёЁії]+[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*)$/i;
  }
  validateNumber(number) {
    if (number && this.maskNumber.test(number)) {
      return true;
    } else {
      return "incorrectNumberWarning";
    }
  }
  validationCity(city) {
    if (this.maskCity.test(city)) {
      return true;
    } else {
      return "incorrectCityWarning";
    }
  }
  validationBranch(city, branchNum) {
    if (this.validationCity(city)) {
      if (city && branchNum && isFinite(branchNum)) {
        return true;
      } else if (!city && !branchNum) {
        return "incorrectCityBranchWarning";
      } else if (!city && branchNum) {
        return "incorrectCityWarning";
      } else if (city && !branchNum) {
        return "incorrectBranchWarning";
      } else if (city && !isFinite(branchNum)) {
        return "incorrectBranchWarning";
      }
    }
  }
}

export default Validation;
