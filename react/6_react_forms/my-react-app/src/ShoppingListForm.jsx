import { useForm } from "react-hook-form";

function ShoppingListForm({ addItem }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addItem(data);
    reset(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="product">Product: </label>
      <input
        type="text"
        id="product"
        {...register("product", {
          required: "Product is required",
          minLength: { value: 2, message: "At least 2 characters" },
        })}
      />
      {errors.product && (
        <p style={{ color: "red" }}>{errors.product.message}</p>
      )}
      <br />

      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        {...register("quantity", {
          required: "Quantity is required",
          min: { value: 1, message: "Must be at least 1" },
        })}
      />
      {errors.quantity && (
        <p style={{ color: "red" }}>{errors.quantity.message}</p>
      )}
      <br />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
