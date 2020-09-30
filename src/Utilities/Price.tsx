export default function formatPrice (price: number | string) {
  // eslint-disable-next-line quotes
  return `${parseFloat(price).toFixed(2)}€`;
}
