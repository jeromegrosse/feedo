const cn = require("classnames");

const html = require("html-string");

const variants = {
  button: Symbol("button"),
  brand: Symbol("brand"),
  nav: Symbol("nav"),
};

const getClassesForVariant = (variant) => {
  switch (variant) {
    case variants.button:
      return cn(
        "my-4 w-auto py-2 rounded transition-colors duration-200 border-gray-400 disabled:bg-gray-500 shadow inline-flex items-center justify-center px-4 text-white bg-success hover:bg-success-light"
      );
    case variants.brand:
      return cn("font-bold text-lg text-white px-4 py-2");
    case variants.nav:
      return cn("uppercase text-white align-middle text-sm py-2 px-4");
    default:
      return "";
  }
};

const link = (children, { variant, ...attrs } = {}) => {
  const linkClasses = `${getClassesForVariant(variant)}`;

  return html`<a class="${linkClasses}" ${attrs}:attrs>${children}</a>`;
};

link.variants = variants;

module.exports = link;
