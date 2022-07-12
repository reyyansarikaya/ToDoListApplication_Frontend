import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like } = Matchers
import {API} from "@/api";

pactWith({
    consumer: "Frontend",
    provider: "Backend",
}, provider => {
    describe("todo", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl, false)
        })
        test('get todo list', async () => {
            console.log(provider)
            await provider.addInteraction({
                state: 'get todo list successfully',
                uponReceiving: 'a request not empty for todo list',
                withRequest: {
                    method: 'GET',
                    path: '/api/v1/todo',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: eachLike({
                        id: like(0),
                        todo: like("For Provider Test"),
                    })
                }
            })
            const res = await api.getToDo()
            expect(res[0].id).toEqual(0)
            expect(res[0].todo).toEqual("For Provider Test")
        })

        test('post todo list', async () => {
            console.log(provider)
            await provider.addInteraction({
                state: 'post todo successfully',
                uponReceiving: 'a request not empty for todo list',
                withRequest: {
                    method: 'POST',
                    path: '/api/v1/todo',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        todo: like("For Provider Test"),
                    }
                },
                willRespondWith: {
                    status: 200
                }
            })
            await api.addToDo()
        })
    })
})