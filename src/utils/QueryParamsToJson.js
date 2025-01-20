export function queryParamsToJson(queryString) {
  // Remove o "?" do início da string, se existir
  queryString = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  return queryString.split("&").reduce((acc, param) => {
    const [key, value] = param.split("=");
    // Decodifica as chaves e valores, tratando valores como strings
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value || "");

    // Garante que valores duplicados se tornem arrays
    if (acc[decodedKey]) {
      acc[decodedKey] = [].concat(acc[decodedKey], decodedValue);
    } else {
      acc[decodedKey] = decodedValue;
    }
    return acc;
  }, {});
}