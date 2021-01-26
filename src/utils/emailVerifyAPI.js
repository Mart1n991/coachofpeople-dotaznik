export const getEmail = async (email) => {
  const response = await fetch(
    `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=c5de266a2c76aa35f7812e74b6ee7776524bcfdb`
  );
  const data = await response.json();
  return data;
};
