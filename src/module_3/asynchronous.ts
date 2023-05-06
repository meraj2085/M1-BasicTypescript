// Ex-1
const makePromise = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { Fetched_data: "Data" };
    if (data) {
      resolve(data);
    } else {
      reject({ message: "Failed to fetch data" });
    }
  });
};
const getPromise = async (): Promise<object> => {
  const data = await makePromise();
  return data;
};


// Ex-2
type DataType = {
  data: string;
};
const makePromise2 = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "Data" };
    if (data) {
      resolve(data);
    } else {
      reject({ message: "Failed to fetch data" });
    }
  });
};
const getPromise2 = async (): Promise<DataType> => {
  const data = await makePromise2();
  return data;
};


// Ex-3: Fetch
interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<IToDo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};
const getTodoData = async (): Promise<void> => {
     const todo = await getTodo();
     // return todo;
     console.log(todo);
}
getTodoData();