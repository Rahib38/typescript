{
  function handleError(message: string): never {
    throw new Error(message);
  }
  try {
    handleError("something went wrong!");
  } catch (error) {
    console.error(error);
  }
}
