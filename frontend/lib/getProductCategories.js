export default function getProductCategories(products) {
  // take all products and create a list of the unique categories that exist
  const productCategories = ["all"]; // always start with "all" because that is the default filter

  for (let product of products) {
    const category = product.category;

    if (!productCategories.includes(category)) {
      // if the category isn't already in the array, then push it
      productCategories.push(category);
    }
  }

  return productCategories;
}
