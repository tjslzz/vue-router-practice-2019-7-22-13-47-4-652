const mutations={
    filterItem(state){
     state.itemsShow=state.itemsAll.filter((item) => {
             if (state.condition == 1) {
               return item
             } else if (state.condition == 2) {
               return !item.isChecked
             } else if (state.condition == 3) {
               return item.isChecked
             }
           })
    },
    add(state,item){      
     state.itemsAll.push(item ); 
     state.itemsShow.push(item );     
    },
    update(state,item){    
      state.itemsAll.map(itemInit=>itemInit.id==item.id?item:itemInit);
      state.itemsShow.map(itemInit=>itemInit.id==item.id?item:itemInit);
     },
    getItems(state,items){
        state.itemsAll=items;
        state.itemsShow=items;
        
    },
    
    delete(state,itemId){  
      state.itemsAll.splice(itemId,1);
     },
}
export default mutations