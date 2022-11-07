type TypingProps ={
    name:string
    massageCount : number
    isLoggedIn: boolean
}
export const Typeprops= (props:TypingProps) => {
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