import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  createdAt?: Date;
  description?: string;
  dueDate?: Date;
  id?: string;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date;
  updatedAt?: Date;
};
