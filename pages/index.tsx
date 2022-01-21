import { App } from "~components/app";
import { Footer } from "~components/footer/footer";

export default function IndexPage() {
  return (
    <div className="w-screen h-screen flex pt-32 items-center bg-slate-50 overflow-hidden p-6 flex-col gap-10">
      <App />
      <Footer />
    </div>
  );
}
