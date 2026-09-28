const product = {
  id: "demo-001",
  title: "Demo Product",
  price: "49.00 USD",
  availability: "in_stock",
  brand: "Demo Brand",
  gtin: "0000000000000",
  link: "https://example.com/products/demo",
  image_link: "https://example.com/demo.jpg"
};

const required = ["id", "title", "price", "availability", "link", "image_link"];
const issues = [];
for (const field of required) if (!product[field]) issues.push("Missing required field: " + field);
if (!/^\d+(\.\d{2})? [A-Z]{3}$/.test(product.price)) issues.push("Price format should look like 49.00 USD");
if (!["in_stock","out_of_stock","preorder","backorder"].includes(product.availability)) issues.push("Unsupported availability value");
if (!product.link.startsWith("https://")) issues.push("Landing page should use HTTPS");
if (!product.image_link.startsWith("https://")) issues.push("Image URL should use HTTPS");

if (issues.length) {
  console.error("Feed diagnostics failed:");
  for (const issue of issues) console.error("-", issue);
  process.exit(1);
}
console.log("PASS: synthetic feed item passed structural diagnostics");
console.log(JSON.stringify(product, null, 2));
