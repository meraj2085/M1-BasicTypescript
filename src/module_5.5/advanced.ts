// Properties
interface IModel<TData, TMethods>{
     data: TData;
     methods: TMethods;
}
interface IUserr{
     first_name: string;
     last_name: string;
}
// Methods
interface IMethods{
     full_name(): string;
}
type model = IModel<IUserr, IMethods>;

class UserMD implements model{
     data: IUserr;
     methods: IMethods;

     constructor(first_name: string,last_name: string){
          this.data = {first_name, last_name}
          this.methods = {
               full_name: () => `${first_name} ${last_name}`
          }
     }
     
}
const user_1 = new UserMD('John', 'Doe');
user_1.methods.full_name(); // John Doe
