import { shallowMount } from "@vue/test-utils";
import FooterComp from "@/components/FooterComp.vue";

describe("FooterComp.vue", () => {
  it("renders project footer text", () => {
    const wrapper = shallowMount(FooterComp);
    expect(wrapper.text()).toContain("Proyecto Módulo 7");
  });
});
