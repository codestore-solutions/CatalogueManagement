
const ErrorReducer = (state=false,action:{type:string,data:boolean}) => {
        switch (action.type) {
            case ('show_error'):{
                return action.data;
            }
        
            default:
                return false;
        }
}