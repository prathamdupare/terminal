const StatusBar = ({ state }: { state: number }) => {
  return (
    <div className="px-2 text-black w-full bg-green-400 ">
      [{state}] {state}`
    </div>
  );
};

export default StatusBar;
