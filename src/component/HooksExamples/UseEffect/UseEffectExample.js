import React from "react";

const UseEffectExample = () => {
  // This runs after every render
  // We can control it run less or run more using a
  //second parameter (dependecy array, values that the
  //array depends on, will trigger when it is change)
  //   useEffect(() => {});

  //   useEffect can be uses as a componentDidMount hook and also a componentDidUnMount hook
  // useEffect(()=>{
  // This is component did mount, will be called once per compoenent
  // },[]);
  // useEffect(()=>{
  //  return () = >{
  // This return will work as a componentDidUnmount hook for any cleanup required
  // }
  // },[]);

  React.useEffect(() => {
    console.log("Mounted 1");
    return () => {
      console.log("unmounted 1");
    };
  }, []);
  // This second parameter is balnk and so its
  // informs this hook to render only once when component loads
  // If there is a second parameter then the unmount will be
  // called each time the value of the second parameter change
  // Therefore actually its not unmount, its cleanup

  // We can have more than one useEffect and they are fired in order
  React.useEffect(() => {
    console.log("Mounted 2");
    return () => {
      console.log("unmounted 2");
    };
  }, []);

  return <div>Open Cosole log to see</div>;
};

export default UseEffectExample;
