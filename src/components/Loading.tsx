import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <div className="loading">
      <p>Loading</p>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="grey"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

export default Loading;
