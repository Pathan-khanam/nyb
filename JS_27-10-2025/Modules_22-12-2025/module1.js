// export default function add(a,b){
//     console.log(a,b)
//     return a+b
// }

//default export module
export default function logMsg(msg){
    console.log("LOG:",msg)
}

export let tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function removeTask(taskName) {
  tasks = tasks.filter(task => task !== taskName);
}

export function listTasks() {
  return tasks;
}

