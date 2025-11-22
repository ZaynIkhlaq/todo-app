import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { todoSchema } from '../schemas/todoSchema'
import useStore from '../store/todoStore'
import {z} from 'zod'

// only for validating title - using zod (z) again
const formSchema = z.object({
    title: z.string().min(1, "Title is required")
  })

export default function TodoForm(){

    const addTodo = useStore((state)=> state.addTodo)

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data) => {
        addTodo(data.title)// connecting with Zustand "addTodo"
        reset()
    }

    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input
            {...register('title')}
            placeholder='Add a new item'
            />
            {errors.title && <span>{errors.title.message}</span>}
            <button type = "submit">Add Todo</button>
        </form>
    )

}