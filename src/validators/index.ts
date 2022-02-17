import { validate } from "class-validator";
import { LoginUserDto } from "../api/interface/auth";

export interface ErrorItem {
  property: string;
  errors: string[];
}

export async function validateLoginUserDto(model: LoginUserDto) {
  const errors = await validate(model);
  // console.log(errors);
  const res: ErrorItem[] = [];
  errors.forEach((error) => {
    const { property, constraints } = error;
    if (constraints) res.push({ property, errors: Object.values(constraints) });
  });
  console.log(res);
  return res;
}

export async function validateModel<T extends object>(model: T) {
  const errors = await validate(model);
  const res: ErrorItem[] = [];
  errors.forEach((error) => {
    const { property, constraints } = error;
    if (constraints) res.push({ property, errors: Object.values(constraints) });
  });
  return res;
}
