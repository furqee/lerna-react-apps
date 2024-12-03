const validateFormGlobal = (schema: any[], formData: any) => {
  const newErrors: any = {};
  schema.forEach((field: any) => {
    const value = formData[field.field];

    // Check if regex exists and validate value with regex
    if (field.regex && !field.regex.test(value)) {
      newErrors[field.field] = field.errorMessage || "Invalid value";
    }

    // Check for required fields if specified
    if (field.required && !value) {
      newErrors[field.field] = `${field.label} is required`;
    }
  });

  return newErrors as any;
};

export default validateFormGlobal;
