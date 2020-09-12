import { mount } from '@vue/test-utils'
import House from '@/views/house.vue'

describe('House', () => {
  it('should ', () => {
    const wrapper = mount(House)
    expect(wrapper.element).toMatchSnapshot()
  })
})
