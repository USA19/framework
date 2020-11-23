import {UserEdit} from './Views/UserEdit';
import {User} from './models/User'



const user =User.buildUser({name:"USA",age:23});

const root=  document.getElementById('root');
if(root){
    const userEdit=new UserEdit(
        root,user
      )
      userEdit.render();
    console.log(userEdit)
}

else{
    throw new Error('root Element not Found');
}


