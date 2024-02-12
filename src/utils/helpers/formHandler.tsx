import { useState } from "react";

interface FormHandlerOptions<T> {
  initialState: T;
}

export const useFormHandler = <T,>(options: FormHandlerOptions<T>) => {
  const [formData, setFormData] = useState(options.initialState);

  const handleInputChange = (fieldName: keyof T, value: T[keyof T]) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent,
    onSubmitCallback: (data: T) => void
  ) => {
    event.preventDefault();
    // You can add additional validation logic here if needed
    onSubmitCallback(formData);
  };

  const resetForm = () => {
    setFormData(options.initialState);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
