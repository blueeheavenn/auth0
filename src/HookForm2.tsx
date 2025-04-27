import { useForm } from "react-hook-form"
import { FormSchemma, FormValues } from "./Schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const HookForm = () => {
    const [currStep, setCurrStep] = useState<number>(1) // Fixed useState usage
    const { register, handleSubmit, trigger, formState: { errors, isValid, isLoading } } = useForm<FormValues>({
        resolver: zodResolver(FormSchemma),
        mode: "onChange"
    })
    
    const submit = () => console.log('Submitted')
    
    const handleNext = async () => {
        // Validate current step fields before proceeding
        const isValidStep = await trigger(['name', 'pwd'])
        if (isValidStep) {
            setCurrStep(2)
        }
    }

    return (
        <div>
            {isLoading && "Form is loading"}
            <form onSubmit={handleSubmit(submit)}>
                {currStep === 1 && (
                    <>
                        <div>
                            <label htmlFor='name'>Name:
                                <input 
                                    type="text" 
                                    id="name" 
                                    {...register('name')}
                                />
                            </label>
                            {errors.name && errors.name.message}
                        </div>

                        <div>
                            <label htmlFor='pwd'>Password:
                                <input 
                                    type="password" 
                                    id="pwd" 
                                    {...register('pwd')}
                                />
                            </label>
                            {errors.pwd && errors.pwd.message}
                        </div>
                    </>
                )}

                {currStep === 2 && (
                    <div>
                        <label htmlFor='hobbies'>Hobbies:
                            <input 
                                type="text" 
                                id="hobbies" 
                                {...register('hobbies')}
                            />
                        </label>
                        {errors.hobbies && errors.hobbies.message}
                    </div>
                )}

                <div>
                    {currStep === 1 ? (
                        <button 
                            type="button" 
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            disabled={!isValid}
                        >
                            Submit form
                        </button>
                    )}
                </div>
            </form>
            {isValid.toString()}
        </div>
    )
}

export default HookForm