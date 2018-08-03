const user = (state={user:'', err:'', message:''}, action)=>{
  switch (action.type){
    case 'NEW_USER' :return {name:action.payload,err:""};
    case 'AUTH_ERROR' :return {name:"", err:"incorrect login credentials"};
    case 'LOGOUT' :return {name:"", err:"", message:"Vartotojas admin atsijungė"};
    default : return state;
  }
};

export default user;