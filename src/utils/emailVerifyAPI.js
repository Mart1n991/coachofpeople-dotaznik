export const getEmail = async (email) => {
  console.log(email);
  const response = await fetch(
    `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=c5de266a2c76aa35f7812e74b6ee7776524bcfdb`
  );
  const data = await response.json();

  if ((data.data && data.data.status === "invalid") || data.errors) {
    throw new Error("Nesprávny email");
  }

  if ((data.data && data.data.status === "webmail") || data.data.status === "unknown") {
    return data;
  }
};
