import Todo from 'Frontend/generated/com/example/application/Todo';
import TodoModel from "Frontend/generated/com/example/application/TodoModel";
import { useEffect, useState } from 'react';
import { useForm } from '@hilla/react-form';
import { Button } from '@hilla/react-components/Button.js';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { TodoEndpoint } from 'Frontend/generated/endpoints';

export default function TodoView() {
    const [todos, setTodos] = useState(Array<Todo>());

    useEffect(() => {
        TodoEndpoint.findAll().then(setTodos);
    }, []);

    const { model, field, submit, reset, invalid } = useForm(TodoModel, {
        onSubmit: async (todo: Todo) => {
            const saved = await TodoEndpoint.save(todo);
            if (saved) {
                setTodos([...todos, saved]);
                reset();
            }
        }
    });

    async function changeStatus(todo: Todo, done: boolean) {
        const newTodo = { ...todo, done: done };
        const saved = await TodoEndpoint.save(newTodo);
        if (saved) {
            setTodos(todos.map(item => item.id === todo.id ? saved : item));
        }
    }

    return (
        <>
            <div className="m-m flex items-baseline gap-m">
                <TextField
                    label="Task"
                    {...field(model.task)}
                ></TextField>
                <Button
                    theme="primary"
                    disabled={invalid}
                    onClick={submit}
                >Add</Button>
            </div>

            <div className="m-m flex flex-col items-stretch gap-s">
                {todos.map(todo => (
                    <Checkbox
                        key={todo.id}
                        label={todo.task}
                        checked={todo.done}
                        onCheckedChanged={({ detail: { value } }) => changeStatus(todo, value)}/>
                ))}
            </div>
        </>
    );
}