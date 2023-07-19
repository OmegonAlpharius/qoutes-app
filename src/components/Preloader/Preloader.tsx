import Portal from "@/HOC/Portal";
import Spinner from "@/components/Preloader/Spinner/Spinner";

const Preloader = () => {
  return (
    <Portal>
      <Spinner />
    </Portal>
  );
};

export default Preloader;
