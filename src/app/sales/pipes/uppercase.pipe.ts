import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'upperCasePipe'
})
export class UppercasePipe implements PipeTransform {


    transform(value: string, onUpperCase: boolean = true): string {

        return (onUpperCase)
            ? value.toUpperCase()
            : value.toLocaleLowerCase();
    }


}