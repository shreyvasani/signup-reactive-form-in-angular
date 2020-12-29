import {FormGroup} from "@angular/forms"

export function passwordChecker (controlpass:string,comparePass:string){
    return(formGroup:FormGroup)=>{
        const password = formGroup.controls[controlpass];
        const confpass = formGroup.controls[comparePass];

        if(password.value !== confpass.value){
                confpass.setErrors({mustMatch:true})
        }
        else{
            confpass.setErrors(null)
        }
    }
}