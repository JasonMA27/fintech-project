const Dashboard = () => {
  return (
    <div className="h-full bg-red-500 rounded-xl p-2">
      <div className="grid grid-cols-3 gap-4 bg-amber-50 rounded-xl">
        <div className="col-start- col-span-4 ...">1</div>
        <div className="col-start-1 col-end-3">2</div>
        <div className="col-end-5 col-span-8 bg-blue-500 rounded-xl">3</div>
        <div className="col-start-1 col-end-7 bg-black">4</div>
      </div>
    </div>
  );
};

export default Dashboard;
