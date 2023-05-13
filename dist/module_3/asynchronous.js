"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ex-1
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = { Fetched_data: "Data" };
        if (data) {
            resolve(data);
        }
        else {
            reject({ message: "Failed to fetch data" });
        }
    });
};
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const makePromise2 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data" };
        if (data) {
            resolve(data);
        }
        else {
            reject({ message: "Failed to fetch data" });
        }
    });
};
const getPromise2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise2();
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield getTodo();
    // return todo;
    console.log(todo);
});
getTodoData();
