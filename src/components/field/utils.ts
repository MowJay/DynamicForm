export function convertValueToDisplayFormat(
  value: string,
  displayFormat: string | undefined
): string {
  if (displayFormat === "numberWithCommas") {
    return numberWithCommas(value);
  }

  return value;
}

export function numberWithCommas(num: string) {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : num;
}

export function removeNonNumeric(num: string) {
  return num ? num.toString().replace(/[^0-9]/g, "") : num;
}
