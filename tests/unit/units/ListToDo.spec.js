import {shallowMount} from "@vue/test-utils";
import ListToDo from "@/components/ListToDo";

describe("ListToDo.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(ListToDo, {
            propsData:{
                todo:{}
            }
        })
    })

    test("Sanity Test", () => {
        expect(true).toBeTruthy()
    })

    test("Rendered correctly check", () => {
        const listToDo = wrapper.find("#list-to-do")

        expect(wrapper.exists()).toBeTruthy()
        expect(listToDo.exists()).toBeTruthy()
    })

})