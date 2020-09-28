export default function (requestObject, reduxStore) {
  try {
    const fetchData = async function () {
      const res = await requestObject.getCities();
      if (res !== undefined && res.success === true) {
        return res;
      } else {
        throw new Error("Fetching data failed");
      }
    };

    fetchData().then(({ data }) => {
      reduxStore.dispatch({
        type: "GET_CITIES",
        serverScities: data,
      });
    });
  } catch (e) {
    console.log(e);
  }
}
