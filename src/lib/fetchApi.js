// const BASE_URL =
//   "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1";

// export const fetchApi = async (path, options = {}) => {
//   try {
//     // 1
//     const requestOptions = {
//       method: options.method || "GET",
//       headers: { userId: "salatanat", "Content-Type": "appLication/json" },
//     };

//     //2

//     if (options.method !== "GET") {
//       requestOptions.body = JSON.stringify(options.body);
//     }

//     //  3
//     const response = await fetch(`${BASE_URL}/${path}`, requestOptions);

//     // 4

//     if (!response.ok) {
//       throw Error("somsing");
//     }

//     // 5

//     const result = response.json();

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
