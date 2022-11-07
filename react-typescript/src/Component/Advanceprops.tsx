type Statusprops ={
    status:'loading' | 'success' |'error'
}
export const Advancedprops = (props:Statusprops)=>{
    let message
    if(props.status ==='loading'){
        message = 'Loading'
    }else if(props.status ==='success'){
        message = 'data fetched successfully!'}
        else if(props.status ==='error'){
            message = 'error fetching data'}
    return(
        <div>
            <h2>Status-{message}</h2>
            
        </div>
    )
}