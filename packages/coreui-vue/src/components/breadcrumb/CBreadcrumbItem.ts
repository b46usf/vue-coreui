import { defineComponent, h } from 'vue'

const CBreadcrumbItem = defineComponent({
  name: 'CBreadcrumbItem',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * The `href` attribute for the inner link component.
     */
    href: String,
  },

  setup(props, { slots }) {
    return () =>
      h(
        'li',
        {
          class: [
            'breadcrumb-item',
            {
              active: props.active,
            },
          ],
          ...(props.active && { 'aria-current': 'page' }),
        },
        props.href
          ? h('a', { href: props.href }, slots.default && slots.default())
          : slots.default && slots.default(),
      )
  },
})
export { CBreadcrumbItem }
