let initialState=[
    {id:1, name:'iphone',image:'',description:'apple', price:500, inventory:10},
    {id:1, name:'samsung',image:'',description:'samsung', price:400, inventory:10},
    {id:1, name:'asus',image:'',description:'china', price:300, inventory:10}
]
const product =(state=initialState, action)=>{
    switch(action.type){
        default:
            return [...state]
    }
}
export default product