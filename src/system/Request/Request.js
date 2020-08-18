import setts from "./APISetts.json";

/**
 * Creates HTTP request.
 * @class
 */
class RequestData {
  getCityRef() {
    const { apiKey, baseUrl } = setts;
    return fetch(baseUrl, {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
          Language: "ru",
        },
      }),
    })
      .then((r) => r.json())
      .catch((r) => console.log(r));
  }

  getDeliveryCost(initObj) {
    const {
      apiKey,
      baseUrl,
      costCitySender,
      costCityRecipient,
      userDeliveryWeight,
    } = initObj;

    return fetch(baseUrl, {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        MarketplacePartnerToken: "005056b2fc3d-ab8b-11e7-7857-d4f086bf",
        apiKey: apiKey,
        calledMethod: "getDocumentPrice",
        language: "ua",
        methodProperties: {
          CargoType: "Parcel",
          CityRecipient: costCityRecipient.value,
          CitySender: costCitySender.value,
          Cost: "200",
          Weight: parseInt(userDeliveryWeight.value),
        },
        modelName: "InternetDocument",
      }),
    }).then((res) => {
      return res.json();
    });
  }

  /**
   * Create and send HTTP request and process it.
   * @param {Object} - Object with properties.
   * @param {number} - Number of user's delivery.
   */
  getTrackingData(userNubmer) {
    const { apiKey, baseUrl } = setts;
    return fetch(baseUrl, {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        apiKey: apiKey,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: userNubmer,
            },
          ],
        },
      }),
    })
      .then((r) => {
        return r.json();
      })
      .catch((r) => console.log(r));
  }
  /**
   * Create and send HTTP request and process it.
   * @param {Object} - Object with properties.
   * @param {string} - City the requested branches are in.
   */
  getBranchLoc(obj, city) {
    const { apiKey, baseUrl } = obj;
    return fetch(baseUrl, {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        apiKey: apiKey,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: city,
          Language: "ru",
        },
      }),
    })
      .then((r) => {
        return r.json();
      })
      .catch((r) => console.log(r));
  }
}

export default RequestData;
