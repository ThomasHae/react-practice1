import Button from "./Button";
import MyButton from "./MyButton";

//元件的props

const MyComponent = () => {
  return (
    <>
      <input />
      <Button />
      <Button />
      <MyButton
        handleClick={() => {
          window.alert("取消");
        }}
      >
        取消
      </MyButton>
      <MyButton
        handleClick={() => {
          window.alert("好的");
        }}
      >
        好的
      </MyButton>
    </>
  );
};

export default MyComponent;
