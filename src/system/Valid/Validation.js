class Validation {
  constructor() {
    this.maskRefs = /^[a-zA-Z\-\d]{36}$/;
    this.maskNumber = /^\d{14}$/;
    this.maskCity = /^([а-яА-ЯёЁії]+[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*[-]?[а-яА-ЯёЁії]*)$/i;
  }
  validationCost(refSender, refRecipient, weight) {
    if (
      this.maskRefs.test(refSender) &&
      this.maskRefs.test(refRecipient) &&
      weight !== "" &&
      Number(weight) <= 18999
    ) {
      return true;
    } else if (
      !this.maskRefs.test(refSender) &&
      this.maskRefs.test(refRecipient) &&
      weight !== ""
    ) {
      return "incorrectSenderWarning";
    } else if (
      this.maskRefs.test(refSender) &&
      !this.maskRefs.test(refRecipient) &&
      weight !== ""
    ) {
      return "incorrectRecipientWarning";
    } else if (
      this.maskRefs.test(refSender) &&
      this.maskRefs.test(refRecipient) &&
      weight === ""
    ) {
      return "incorrectWeight";
    } else if (Number(weight) > 18999) {
      return "incorrectLimitWeight";
    } else {
      return "incorrectCostWarning";
    }
  }
  validateNumber(number, historyArray) {
    const historyValid = historyArray.tracking.every((item) => item !== number);

    if (historyValid) {
      if (this.maskNumber.test(number)) {
        return true;
      } else {
        return "incorrectNumberWarning";
      }
    } else {
      return "trackingHistoryWarning";
    }
  }
  validationCity(city) {
    if (this.maskCity.test(city)) {
      return true;
    } else {
      return "incorrectCityWarning";
    }
  }
  validationBranch(city, branchNum, historyArray) {
    const historyValid = historyArray.branchLoc
      .filter((item) => item.city === city)
      .every((item) => item.branchNumber !== branchNum);

    if (historyValid) {
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
    } else {
      return "branchLocHistoryWarning";
    }
  }
}

export default Validation;
