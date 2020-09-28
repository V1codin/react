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

  getDeliveryCost(props) {
    const { apiKey, baseUrl } = setts;
    const { sender, recipient, deliveryWeight } = props;

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
          CityRecipient: recipient,
          CitySender: sender,
          Cost: "200",
          Weight: parseInt(deliveryWeight),
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
  getBranchLoc(city) {
    const { apiKey, baseUrl } = setts;
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
      .catch((e) => console.log(e));
  }
}

export default RequestData;
