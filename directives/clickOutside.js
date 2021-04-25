export const clickOutside = {
  bind(element, binding, vnode) {
    if (element.tagName.toLowerCase() !== 'button') {
      return;
    }

    element.clickOutsideEvent = (event) => {
      const target = event.target;

      if (!(element === target || element.contains(target))) {
        return binding.value.call(vnode.context, event);
      }
    };
    document.body.addEventListener('click', element.clickOutsideEvent);
  },
  unbind(element) {
    document.body.removeEventListener('click', element.clickOutsideEvent);
  }
};
