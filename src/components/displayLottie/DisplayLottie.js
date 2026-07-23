import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const {animationData, width = "650px", height = "450px"} = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "100%",
            maxWidth: width,
            height: "auto"
          }}
        />
      </Suspense>
    );
  }
}
