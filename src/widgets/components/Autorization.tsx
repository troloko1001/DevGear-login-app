import { useStoreMap } from "effector-react";

import { AccountContainer } from "../../entities/AccountContainer";
import { FakeAutorizationData } from "../../entities/FakeAutorizationData";
import { LogInBtn } from "../../features/ui/LogInBtn";
import { $userLoginizationDate } from "../../features/model/login-btn";
import { ContainerForLoginInput } from "../../shered/ui/ContainerForLoginInput";

export const Autorization = () => {
  const user = useStoreMap({
    store: $userLoginizationDate,
    keys: ["status"],
    fn: (obj) => obj || {},
  });

  return (
    <div>
      {/* <div maxWidth='500px'> */}
      <FakeAutorizationData />
      <ContainerForLoginInput />
      <LogInBtn type="button" text="log in" />
      <AccountContainer user={user} />
    </div>
  );
};
