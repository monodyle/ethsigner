import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { Signer } from "./signer/signer";
import { Tabs, TabType } from "./tabs/tabs";
import { User } from "./user/user";
import { Verify } from "./verify/verify";

export const App = () => {
  const { active } = useWeb3React();
  const [tab, setTab] = useState<TabType>(TabType.Verify);

  return (
    <div className="w-full max-w-lg py-6 px-5 rounded-md bg-white shadow-xl">
      <User />
      <Tabs active={active} tab={tab} setTab={setTab} />
      {tab === TabType.Verify && <Verify />}
      {active && tab === TabType.Sign && <Signer />}
    </div>
  );
};
