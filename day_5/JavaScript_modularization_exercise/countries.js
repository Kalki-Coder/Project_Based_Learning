const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
export default countries;

if ((countries.join(",")).includes("Ethiopia") === true) {
  console.log((countries[countries.indexOf("Ethiopia")]).toUpperCase());
} else {
  countries.push("Ethopia");
  console.log(countries);
}
