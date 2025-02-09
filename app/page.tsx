import Userlogin from "@/components/Userlogin/Userlogin";
import StoreProvider from "./Admin/Store/Store";

export default function Home() {
  return (
   <StoreProvider>
      <main>
    <Userlogin/>
      </main>
    </StoreProvider>
 
  );
}
