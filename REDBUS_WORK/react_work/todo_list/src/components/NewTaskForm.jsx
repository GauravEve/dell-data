import {useForm} from 'react-hook-form';
export default function NewTaskForm({newTaskHandler}){
    const {register,handleSubmit,reset,formState,clearErrors}=useForm({
        shouldRegister:true,
        defaulValues:{label:''}
    });
    const onSubmit=(data)=>{
        newTaskHandler(data.label);
        reset();
        clearErrors();
    }
    const error=Object.values(formState.errors);
    return(
            <form className='new-task-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='task'>New Task</label>

                <input id="task"
                {...register('label',{
                    required:'task cannot be found',
                    validate:{
                        lessThanTwenty:(v)=>
                            v.length<=20||'Task cannot be longer than 20 characters'
                }})}/>
                {error.length>0&&(
                    <ul className='error-message'>
                        {error.map((error)=>{
                            <li>{error.message}</li>
                        })}
                    </ul>
                )}
                
                <button type="submit" >add</button>
            </form>
    )
}