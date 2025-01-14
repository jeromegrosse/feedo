up.compiler("[up-disable]", (element) => {
  const { disableWith } = element.dataset;
  up.on(element, "click", () => {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      element.disabled = true;
      // eslint-disable-next-line no-param-reassign
      element.textContent = disableWith ?? "Saving...";
    }, 0);
  });
});
