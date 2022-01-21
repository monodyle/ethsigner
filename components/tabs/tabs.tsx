interface Props {
  active: boolean;
  tab: TabType;
  setTab: (tab: TabType) => void;
}

export enum TabType {
  Verify = "Verify Signature",
  Sign = "Sign Message",
}

export const Tabs = (props: Props) => (
  <div className="my-6 -mx-5 px-5 border-b border-slate-100">
    {Object.entries(TabType)
      .filter((i) => props.active || (!props.active && i[1] !== TabType.Sign))
      .map(([key, value]) => (
        <button
          className={[
            "py-1 px-2 text-xs font-semibold mr-2",
            props.tab === value
              ? "border-b-2 border-slate-700"
              : "text-slate-400",
          ].join(" ")}
          style={{ marginBottom: -1 }}
          key={key}
          onClick={() => props.setTab(value)}
        >
          {value}
        </button>
      ))}
  </div>
);
