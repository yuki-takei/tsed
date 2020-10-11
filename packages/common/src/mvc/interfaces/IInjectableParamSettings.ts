import {Type} from "@tsed/core";
import {IParamOptions} from "./IParamOptions";

/**
 * @ignore
 */
export interface IInjectableParamSettings<T> extends IParamOptions<T> {
  target: Type<T>;
  propertyKey: string | symbol;
  parameterIndex: number;
}
