class Validation {
  constructor() {
    this.maskNumber = /^\d{14}$/;
    this.maskCity = /^([а-яА-ЯёЁії]+[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*)$/i;
  }
  validateNumber(number) {
    if (number && this.maskNumber.test(number)) {
      return true;
    } else {
      return alert("Warning");
    }
  }
  validationCity(city) {
    if (this.maskCity.test(city)) {
      return true;
    } else {
      alert("Warning");
    }
  }
  validationBranch(city, branchNum) {
    if (this.validationCity(city)) {
      if (city && branchNum && isFinite(branchNum)) {
        return true;
      } else if (!city && !branchNum) {
        return alert("Warning");
      } else if (!city && branchNum) {
        return alert("Warning");
      } else if (city && !branchNum) {
        return alert("Warning");
      } else if (city && !isFinite(branchNum)) {
        return alert("Warning");
      }
    }
  }
}

export default Validation;
