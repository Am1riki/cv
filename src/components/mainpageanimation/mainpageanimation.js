import Lottie from 'react-lottie';
import animationData from '../../assets/animations/Animation - 1721330951903.json'


const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };

        return (
            <div>
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                style = {{marginTop:'10vh'}}
                />
            </div>
          );
  };
  
  export default LottieAnimation;