type GreetProps ={
    name:string
    massageCount ?: number
    isLoggedIn: boolean
}
export const Greet= (props:GreetProps) => {
    const{ massageCount =0}= props
    return (
        <div>
            <h2>
                
            {
                props.isLoggedIn ? `welcome ${props.name} ! You Have ${props.massageCount} unread message`:'Welcome Guest'

            }    
              </h2>  
           
        </div>
    )
        
}