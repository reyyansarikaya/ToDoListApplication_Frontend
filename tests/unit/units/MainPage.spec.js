import {shallowMount} from "@vue/test-utils";
import MainPage from "../../../src/views/MainPage";
import API from "../../../src/api";
import flushPromises from "flush-promises";

jest.mock('@/api');

const mockResponse = [
    {
        "id": 1,
        "todo": "buy some milk"
    },
];

describe("MainPage.vue", () => {
    test("Sanity Test", () => {
        expect(true).toBeTruthy()
    })
    test("Rendered correctly check", () => {
        const wrapper = shallowMount(MainPage)
        const title = wrapper.find("#title")
        const add = wrapper.find("#add-button")

        expect(wrapper.exists()).toBeTruthy()
        expect(add.exists()).toBeTruthy()
        expect(title.exists()).toBeTruthy()
    })
    test("the to-do list component should render correctly", async () => {
        const wrapper = shallowMount(MainPage)
        let listToDoComponent = wrapper.findAll(".to-do-container");
        expect(listToDoComponent).toHaveLength(mockResponse.length)
    })

    test("should add a todo when user enters input and clicks the button", async() => {

        const inputTodo = {
            id: 1,
            todo: "dummy todo"
        }
        API.getToDo.mockResolvedValue(mockResponse)
        API.addToDo.mockResolvedValue({ data: inputTodo.todo })

        const wrapper = shallowMount(MainPage)
        await flushPromises();

        const input = wrapper.find('input')
        await input.setValue(inputTodo.todo)

        const button = wrapper.find('#add-button')
        await button.trigger('click')
        await flushPromises();

        expect(wrapper.vm.todo).toBe(inputTodo.todo)
    })
});