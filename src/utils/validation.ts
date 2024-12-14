export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string
): string | undefined => {
  const trimmedLength = value.trim().length;
  if (trimmedLength < minLength) {
    return `Please lengthen this ${fieldName.toLowerCase()} to ${minLength} characters or more (you are currently using ${trimmedLength} characters).`;
  }
  return undefined;
};

export const validateMaxLength = (
  value: string,
  maxLength: number,
  fieldName: string
): string | undefined => {
  const trimmedLength = value.trim().length;
  if (trimmedLength > maxLength) {
    return `${fieldName} must not exceed ${maxLength} characters`;
  }
  return undefined;
};