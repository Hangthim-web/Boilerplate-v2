// aVAr.delete('/todos/:id', (req: Request, res: Response) => {
//     todos = todos.filter((todo) => todo.id !== req.params.id)
//     res.sendStatus(200)
// })

// aVAr.patch('/todos/:id', (req: Request, res: Response) => {
//     const { name } = req.body as TodoRequestBody
//     const updatedTodos = todos.map((todo) =>
//         todo.id === req.params.id ? { ...todo, name } : todo
//     )
//     todos = updatedTodos
//     res.sendStatus(200)
// })

// aVAr.post('/todos', (req: Request, res: Response) => {
//     const { name, active } = req.body as TodoRequestBody
//     const newTodo: Todo = { id: crypto.randomUUID(), name, active }
//     todos.push(newTodo)
//     res.sendStatus(201)
// })

import aVar from './utils/create-server'

const PORT = process.env.PORT || 3001

aVar.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})

// console.log("hello");
