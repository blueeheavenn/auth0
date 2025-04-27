import {useForm} from "react-hook-form"
import {FormSchemma, FormValues} from "./Schema"
import {zodResolver} from "@hookform/resolvers/zod"
import { useState } from "react"


const HookForm = () => {
    const {register, handleSubmit,  formState: {
            errors, isValid, isLoading
        }} = useForm < FormValues > ({resolver: zodResolver(FormSchemma), mode: "onChange"})
    
    const [currStep, setCurrStep ] = useState<Number>(1)
    
    const submit = () => ''
    return (
        <div>
            {isLoading && "Form is loading"}
            <form onSubmit={
                handleSubmit(submit)
            }>

                {currStep === 1 && (
                    <div>
                        <label htmlFor='name'>Name:
                            < input type="text" id="name" {
                                ...register('name')
                            }
                       
                            />


                        </label>
                    </div>)}
              

                {currStep === 1 && (<div>
                    <label htmlFor='pwd'>Password:
                    < input type="password" id="pwd" {
                        ...register('pwd')
                    }
                        />

                    </label>
                    {errors.pwd && errors.pwd.message}
                </div>)}

                <p></p>
                <p></p>
                <p></p>
                <pre>


                </pre>
                <div><a href='#' onClick={()=>setCurrStep(currStep+1)}>Next</a></div>
                
                
                {currStep=== 2 && (<div>

                    <label htmlFor='hobbies'>Hobbies:
                        < input type="text" id="hobbies" {
                            ...register('hobbies')
                        }
                        />

                    </label>
                    {errors.hobbies && errors.hobbies.message}
                </div>)}
               <p></p>
                <div>
                    <button type="submit" disabled={!isValid} >
                        Submit form
                    </button>
                
                </div>
                 
            </form>
            {isValid.toString()} 
        </div>


    )
}


export default HookForm
