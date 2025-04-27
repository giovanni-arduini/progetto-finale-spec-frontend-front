export function useAvailability(available) {
  return {
    style: available ? "text-green-600" : "text-red-600",
    message: available ? "Available" : "Currently out of stock",
  };
}
