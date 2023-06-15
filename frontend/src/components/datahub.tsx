export function DataHub() {
  return (
    <>
      <div className="text-3xl font-bold text-right">Data Hub</div>
      <div className="flex flex-row mt-2 w-full justify-end">
        <div className="flex flex-col text-left w-1/4 font-semibold">
          <span>Angle:</span>
          <span>Coordinate:</span>
          <span>Orientation:</span>
          <span>Power:</span>
        </div>
        <div className="flex flex-col text-right w-1/4">
          <span>X, Y, Z</span>
          <span>Xpos, Ypos</span>
          <span>Degree</span>
          <span>Red / Blue / Yellow</span>
        </div>
      </div>
    </>
  );
}
