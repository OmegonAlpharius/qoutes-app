import Card from "@/components/Card/Card";
import Sidebar from "@/components/Sidebar/Sidebar";

const Quotes = () => {
  return (
    <>
      <Sidebar>
        <div className="flex-1 ml-4">
          <h1 className="text-3xl font-bold">Quotes list</h1>
          <Card />
          <Card />
          <Card />
        </div>
      </Sidebar>
    </>
  );
};

export default Quotes;
