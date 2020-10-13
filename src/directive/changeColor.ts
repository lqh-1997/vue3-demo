export const changeColorDirective = {
    beforeMount(el: HTMLElement, binding: any) {
        el.style.color = binding.value;
    }
};
