import {useForm} from "react-hook-form"
import {FormSchemma, FormValues} from "./Schema"
import {zodResolver} from "@hookform/resolvers/zod"


const HookForm = () => {
    const {register, handleSubmit,  formState: {
            errors
        }} = useForm < FormValues > ({resolver: zodResolver(FormSchemma), mode: "onChange",  defaultValues: { name: "", pwd: "", hobbies: "" }  })

    const submit = () => console.log()
    return (
        <div>
            <form onSubmit={
                handleSubmit(submit)
            }>

                <div>
                    <label htmlFor='name'>Name:
                         < input type = "text" id = "name" {
                        ...register('name')
                    }
                       
                        />


                    </label>
                </div>
                {
                errors.name && errors.name.message
            }

                <div>
                    <label htmlFor='pwd'>Password:
                    < input type="text" id="pwd" {
                        ...register('pwd')
                    }
                        />

                    </label>
                    {errors.pwd && errors.pwd.message}
                </div>
                <p></p>
                <p></p>
                <p></p>
                <pre>


                </pre>
                <div>Next</div>
                <div>

                    <label htmlFor='hobbies'>Hobbies:
                < input type="text" id="hobbies" {
                        ...register('hobbies')
                    }
                        />

                    </label>
                      {errors.hobbies && errors.hobbies.message}
               
                </div>
                <p></p>
                <p></p>
                <div>
                    <button type="submit" disabled={!isValid}>
                        Submit form
                    </button>
                
                </div>
                 
            </form>
           {/* {isValid.toString()} */}
        </div>


    )
}


export default HookForm
