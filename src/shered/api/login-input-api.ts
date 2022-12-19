export interface LoginInputType {
  name: string;
  type: string;
  placeholder: string;
}

export type LoginStoreType =
  | {
      password?: string;
      email?: string;
    }
  | any;

export type LoginEventType = {
  key: string;
  value: string;
};
