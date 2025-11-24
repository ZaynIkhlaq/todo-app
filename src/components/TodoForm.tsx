import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import useStore from '../store/todoStore'

// Only for validating title - using zod (z) again
const formSchema = z.object({
    title: z.string().min(1, "Title is required")
})

// TypeScript type inferred from the form schema
// This tells TypeScript what shape the form data will have
type FormData = z.infer<typeof formSchema>

export default function TodoForm() {
    const addTodo = useStore((state) => state.addTodo)

    // The <FormData> tells react-hook-form what type of data this form handles
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    // The data parameter is now typed! TypeScript knows it has a 'title' property that's a string
    const onSubmit = (data: FormData) => {
        addTodo(data.title) // Connecting with Zustand "addTodo"
        reset()
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            {...register('title')}
            placeholder='Add something here'
            />
            {errors.title && <span>{errors.title.message}</span>}
            <button type="submit">Add Todo</button>
        </form>
    )
}

