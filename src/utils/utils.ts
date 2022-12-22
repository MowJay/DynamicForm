export function mergeClasses(...classNames: string[]): string {
  let result = "";
  classNames.forEach((className) => {
    result = result.concat(" ").concat(className);
  });

  return result;
}
