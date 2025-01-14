const html = require("html-string");
const cn = require("classnames");

const variants = {
  danger: Symbol("danger"),
};

const getClassesForVariant = (variant) => {
  switch (variant) {
    case variants.danger:
      return cn(
        "my-4 w-auto py-2 text-danger text-sm background-transparent font-bold uppercase outline-none focus:outline-none ease-linear disabled:text-gray-400"
      );
    default:
      return cn(
        "py-2 px-6 rounded transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none shadow text-white hover:bg-primary-light w-auto bg-success"
      );
  }
};

const button = (
  children,
  { variant, type = "submit", ...attrs } = {}
) => html` <button
  class="${getClassesForVariant(variant)}"
  type="${type}"
  ${attrs}:attrs
>
  ${children}
</button>`;

button.variants = variants;

module.exports = button;
