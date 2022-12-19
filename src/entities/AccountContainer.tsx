import { AccountText } from "../shered/ui/AccountText";

export const AccountContainer = ({ user }: any) => {
  switch (user.status) {
    case "loading": {
      return <AccountText text={"Loading..."} />;
    }
    case "feilure": {
      return (
        <AccountText
          text={
            <span>
              Ooops something goes wrong, error: <b>{user.errors}</b>{" "}
            </span>
          }
        />
      );
    }
    case "logged in": {
      return <AccountText text={`Welcome to your account ${user.data.name}`} />;
    }
    case "logout": {
      return <AccountText text={"Log in pls"} />;
    }

    default: {
      return <div>Oops</div>;
    }
  }
};
